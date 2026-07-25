import React, { useState, useEffect } from 'react';
import { Search, Loader2, FileText, ArrowRight, Sparkles, X } from 'lucide-react';

interface PagefindResultData {
  url: string;
  excerpt: string;
  meta: {
    title?: string;
    image?: string;
  };
  sub_results?: Array<{
    title: string;
    url: string;
    excerpt: string;
  }>;
}

interface PagefindSearchResult {
  id: string;
  data: () => Promise<PagefindResultData>;
}

export function SearchPageContent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PagefindResultData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [pagefindModule, setPagefindModule] = useState<any>(null);

  // Load Pagefind module dynamically
  useEffect(() => {
    async function loadPagefind() {
      try {
        // Pagefind script is generated in /pagefind/pagefind.js after build
        const pagefindUrl = `${window.location.origin}/pagefind/pagefind.js`;
        // @ts-ignore
        const pf = await import(/* @vite-ignore */ pagefindUrl);
        if (pf) {
          await pf.init();
          setPagefindModule(pf);
        }
      } catch (err) {
        console.warn('Pagefind is available in production build output at /pagefind/pagefind.js');
      }
    }
    loadPagefind();
  }, []);

  // Read URL query parameter on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const qParam = params.get('q');
    if (qParam) {
      setQuery(qParam);
    }
  }, []);

  // Trigger search when query or pagefindModule changes
  useEffect(() => {
    let isCancelled = false;

    async function executeSearch() {
      if (!query.trim()) {
        setResults([]);
        setHasSearched(false);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setHasSearched(true);

      // Update browser URL without reloading
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('q', query);
      window.history.replaceState({}, '', newUrl.toString());

      if (pagefindModule) {
        try {
          const searchResponse = await pagefindModule.search(query);
          if (isCancelled) return;

          const loadedData = await Promise.all(
            searchResponse.results.slice(0, 20).map((r: PagefindSearchResult) => r.data())
          );

          if (!isCancelled) {
            setResults(loadedData);
          }
        } catch (error) {
          console.error('Search execution error:', error);
          if (!isCancelled) setResults([]);
        }
      } else {
        // Fallback for dev mode or before pagefind is indexed
        setTimeout(() => {
          if (!isCancelled) {
            setResults([]);
          }
        }, 300);
      }

      if (!isCancelled) {
        setIsLoading(false);
      }
    }

    const timer = setTimeout(() => {
      executeSearch();
    }, 200);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [query, pagefindModule]);

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setHasSearched(false);
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.delete('q');
    window.history.replaceState({}, '', newUrl.toString());
  };

  const quickTags = [
    'Homestay in Mukteshwar',
    'Family Rooms',
    'Chauli Ki Jali',
    'Pet Friendly',
    'Workation',
    'Volunteer Work',
    'Contact'
  ];

  return (
    <div className="bg-stone-50 min-h-[85vh] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-3 block">
            Instant Static Search
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium text-primary mb-4 tracking-tight">
            Search Stone Heritage
          </h1>
          <p className="text-primary/70 max-w-xl mx-auto font-light text-base">
            Search rooms, experiences, local attractions, blog articles, and guest information instantly.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="relative max-w-2xl mx-auto mb-10">
          <div className="relative flex items-center shadow-md rounded-2xl bg-white border border-stone-300 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20 transition-all">
            <Search className="w-6 h-6 text-primary/40 ml-5 flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search rooms, Chauli Ki Jali, workation, policies..."
              className="w-full py-4 pl-4 pr-12 text-primary placeholder-primary/40 bg-transparent text-base sm:text-lg focus:outline-none font-sans"
              autoFocus
            />
            {query && (
              <button
                onClick={handleClear}
                className="p-2 mr-3 text-primary/40 hover:text-primary transition-colors rounded-full"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Popular Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-wider text-primary/50 mr-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-accent" /> Popular:
          </span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="text-xs bg-white text-primary/80 border border-stone-200 hover:border-accent hover:text-accent px-3 py-1.5 rounded-full transition-all shadow-xs"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results / Status */}
        <div className="space-y-6">
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-16 text-primary/60">
              <Loader2 className="w-8 h-8 animate-spin text-accent mb-3" />
              <p className="text-sm font-light">Searching indexing database...</p>
            </div>
          )}

          {!isLoading && hasSearched && results.length > 0 && (
            <div>
              <p className="text-sm text-primary/60 mb-6 font-medium border-b border-stone-200 pb-3">
                Found <span className="text-accent font-bold">{results.length}</span> results for &ldquo;{query}&rdquo;
              </p>

              <div className="space-y-4">
                {results.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className="block bg-white p-6 rounded-2xl border border-stone-200 hover:border-accent hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-block text-[11px] font-mono text-accent uppercase tracking-wider mb-1">
                          {item.url}
                        </span>
                        <h2 className="text-xl font-serif font-medium text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                          {item.meta?.title || item.url}
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                        </h2>
                      </div>
                      <FileText className="w-5 h-5 text-stone-300 group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                    </div>

                    <p
                      className="text-primary/75 text-sm font-light mt-3 leading-relaxed [&>mark]:bg-amber-100 [&>mark]:text-primary [&>mark]:px-1 [&>mark]:rounded"
                      dangerouslySetInnerHTML={{ __html: item.excerpt }}
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          {!isLoading && hasSearched && results.length === 0 && (
            <div className="bg-white p-12 rounded-2xl border border-stone-200 text-center max-w-lg mx-auto shadow-xs">
              <p className="text-lg font-serif font-medium text-primary mb-2">No matching pages found</p>
              <p className="text-sm text-primary/60 font-light mb-6">
                We couldn&apos;t find any pages matching &ldquo;<span className="text-primary font-medium">{query}</span>&rdquo;.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={handleClear}
                  className="bg-primary text-stone-50 text-xs uppercase tracking-widest font-medium py-2.5 px-6 rounded-full hover:bg-primary/90 transition-colors"
                >
                  Clear Search Filter
                </button>
              </div>
            </div>
          )}

          {!hasSearched && !isLoading && (
            <div className="text-center py-12 text-primary/50 font-light text-sm">
              Type a word above or click one of the popular search topics.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
