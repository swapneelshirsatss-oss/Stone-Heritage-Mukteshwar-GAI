# 🌳 Branch Management Guide for Stone Heritage Mukteshwar

This guide explains how to manage Git branches for this project effectively.

---

## 📋 Table of Contents
1. [Understanding Branches](#understanding-branches)
2. [Creating Branches](#creating-branches)
3. [Switching Between Branches](#switching-between-branches)
4. [Publishing & Pushing Branches](#publishing--pushing-branches)
5. [Branch Naming Conventions](#branch-naming-conventions)
6. [Merging Branches](#merging-branches)
7. [Deleting Branches](#deleting-branches)
8. [Viewing Branches](#viewing-branches)
9. [Common Workflows](#common-workflows)
10. [GitHub UI vs Command Line](#github-ui-vs-command-line)

---

## Understanding Branches

**What is a Branch?**
- A branch is an independent line of development in your repository
- Allows multiple people to work on different features simultaneously
- Your main repository always has a `main` or `master` branch (production-ready code)

**Current Branches in Your Repository:**
- `main` - Production branch (deployed to Hostinger)
- `fix/code-errors-and-optimization` - New branch with code improvements

---

## Creating Branches

### Via GitHub Web UI (Easiest)

1. Go to: https://github.com/swapneelshirsatss-oss/Stone-Heritage-Mukteshwar-GAI
2. Click the **"Branches"** tab
3. Click **"New branch"** button (top right)
4. Enter branch name: `feature/your-feature-name`
5. Select base branch (usually `main`)
6. Click **"Create branch"**

### Via Command Line

```bash
# Clone the repository (first time only)
git clone https://github.com/swapneelshirsatss-oss/Stone-Heritage-Mukteshwar-GAI.git
cd Stone-Heritage-Mukteshwar-GAI

# Create and switch to new branch
git checkout -b feature/your-feature-name

# Or create without switching
git branch feature/your-feature-name

# Push branch to GitHub
git push -u origin feature/your-feature-name
```

---

## Switching Between Branches

### Via Command Line

```bash
# List all branches locally
git branch

# List all branches including remote
git branch -a

# Switch to existing branch
git checkout feature/your-feature-name

# Or use newer syntax (Git 2.23+)
git switch feature/your-feature-name

# Create and switch in one command
git checkout -b new-feature-name
```

### Via GitHub Desktop (Recommended for Beginners)

1. Open GitHub Desktop
2. Click **"Current Branch"** at the top
3. Click any branch in the list to switch
4. Click **"New Branch"** to create a new one

---

## Publishing & Pushing Branches

### Push Local Branch to GitHub

```bash
# First time pushing a new branch
git push -u origin feature/your-feature-name

# Subsequent pushes to same branch
git push

# Force push (use carefully!)
git push -u origin feature/your-feature-name --force
```

### Update Branch with Latest Changes from Main

```bash
# Switch to your branch
git checkout feature/your-feature-name

# Fetch latest changes
git fetch origin

# Rebase on main (recommended)
git rebase origin/main

# Or merge main into your branch
git merge origin/main
```

---

## Branch Naming Conventions

Follow these patterns for consistency:

```
feature/description          # New features
  ✅ feature/user-authentication
  ✅ feature/blog-comments

fix/description              # Bug fixes
  ✅ fix/ftp-deployment-error
  ✅ fix/image-loading-issue

hotfix/description           # Urgent production fixes
  ✅ hotfix/payment-processing

docs/description             # Documentation updates
  ✅ docs/setup-instructions

refactor/description         # Code refactoring (no new features)
  ✅ refactor/optimize-images

chore/description            # Maintenance, dependencies
  ✅ chore/update-dependencies
```

---

## Merging Branches

### Via GitHub Pull Request (Recommended)

1. Push your branch to GitHub
2. Go to your repository
3. GitHub will show "Compare & pull request" banner - click it
4. Add title and description
5. Select reviewers (optional)
6. Click **"Create pull request"**
7. Wait for review
8. Click **"Merge pull request"** when ready
9. Delete branch after merging

### Via Command Line

```bash
# Switch to main branch
git checkout main

# Fetch latest changes
git fetch origin

# Merge feature branch into main
git merge feature/your-feature-name

# Push merged changes to GitHub
git push origin main

# Delete branch locally
git branch -d feature/your-feature-name

# Delete branch on GitHub
git push origin --delete feature/your-feature-name
```

---

## Deleting Branches

### Delete Via GitHub UI

1. Go to: https://github.com/swapneelshirsatss-oss/Stone-Heritage-Mukteshwar-GAI/branches
2. Find the branch you want to delete
3. Click the trash/delete icon
4. Confirm deletion

### Delete Via Command Line

```bash
# Delete local branch
git branch -d feature/your-feature-name

# Delete local branch (force)
git branch -D feature/your-feature-name

# Delete remote branch on GitHub
git push origin --delete feature/your-feature-name

# Clean up deleted remote branches
git fetch --prune
```

---

## Viewing Branches

### GitHub Web UI

1. Go to: https://github.com/swapneelshirsatss-oss/Stone-Heritage-Mukteshwar-GAI/branches
2. See all branches with:
   - Last commit message
   - Last update time
   - Status (behind/ahead of main)

### Command Line

```bash
# List local branches
git branch

# List all branches
git branch -a

# Show branch with last commit
git branch -v

# Show remote branches only
git branch -r

# Show merged branches
git branch --merged

# Show unmerged branches
git branch --no-merged
```

---

## Common Workflows

### Workflow 1: Create Feature & Submit Pull Request

```bash
# 1. Update main branch
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/new-page

# 3. Make changes to files
# Edit files, add code, etc.

# 4. Stage and commit changes
git add .
git commit -m "feat: add new page layout"

# 5. Push to GitHub
git push -u origin feature/new-page

# 6. Create Pull Request on GitHub UI
# (GitHub will show "Compare & pull request" button)

# 7. After approval, merge on GitHub UI
# (Deletes branch automatically if you enable it)
```

### Workflow 2: Fix a Bug on Main

```bash
# 1. Create hotfix branch from main
git checkout main
git pull origin main
git checkout -b fix/critical-bug

# 2. Fix the issue
# Make your changes

# 3. Test locally
npm run dev
npm run build

# 4. Commit and push
git add .
git commit -m "fix: resolve critical bug in deployment"
git push -u origin fix/critical-bug

# 5. Create and merge Pull Request immediately
```

### Workflow 3: Sync Your Branch with Main

```bash
# Your branch is behind main and you need updates
git checkout feature/your-feature

# Option A: Rebase (recommended for clean history)
git fetch origin
git rebase origin/main

# Option B: Merge (creates merge commit)
git merge origin/main

# Push updated branch
git push origin feature/your-feature
```

---

## GitHub UI vs Command Line

### Choose GitHub UI If:
✅ You're a beginner  
✅ You prefer visual interface  
✅ You're creating simple branches  
✅ You're reviewing and merging PRs  

### Choose Command Line If:
✅ You're experienced with Git  
✅ You need complex operations  
✅ You're working with many files  
✅ You want to automate workflows  

### Hybrid Approach (Recommended)

```
Create branch    → GitHub UI ✅
Make changes     → GitHub Desktop / VS Code ✅
Commit & push    → Command line / GitHub Desktop ✅
Create PR        → GitHub UI ✅
Merge PR         → GitHub UI ✅
Delete branch    → GitHub UI ✅
```

---

## Current Branches in Your Repository

| Branch | Purpose | Status |
|--------|---------|--------|
| `main` | Production code | Active |
| `fix/code-errors-and-optimization` | Bug fixes & optimizations | Ready for review |

### What to Do Now:

1. **Review the fix branch:**
   ```bash
   git checkout fix/code-errors-and-optimization
   git pull origin fix/code-errors-and-optimization
   ```

2. **Test locally:**
   ```bash
   npm install
   npm run dev
   ```

3. **If satisfied, create Pull Request on GitHub**

4. **Merge to main when ready**

---

## Tips & Best Practices

✅ **Always branch from main**
```bash
git checkout main
git pull origin main
git checkout -b feature/new-feature
```

✅ **Keep branches focused on one task**
- Don't mix bug fixes with new features
- Easier to review and merge

✅ **Delete branches after merging**
- Keeps repository clean
- Reduces confusion

✅ **Write clear commit messages**
```bash
git commit -m "feat: add user authentication page"
git commit -m "fix: resolve image loading delay"
git commit -m "docs: update deployment instructions"
```

✅ **Pull before you push**
```bash
git fetch origin
git pull origin main
git push origin feature/your-feature
```

❌ **Don't:**
- Force push to shared branches
- Keep branches alive for months
- Commit to main directly (use PRs)
- Leave branches with unclear names

---

## Troubleshooting

### Accidentally Committed to Main?

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Create new branch with those changes
git checkout -b feature/new-feature
git push -u origin feature/new-feature
```

### Branch is Behind Main

```bash
git fetch origin
git rebase origin/main
# or
git merge origin/main
```

### Need to Switch Branches with Uncommitted Changes?

```bash
# Stash changes temporarily
git stash

# Switch branch
git checkout other-branch

# Come back and restore changes
git checkout original-branch
git stash pop
```

### Delete Branch Locally Only (Keep on GitHub)

```bash
git branch -d feature/your-feature
# (Without pushing the deletion)
```

---

## Resources

- 📖 GitHub Docs: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
- 🎓 Interactive Git Learning: https://learngitbranching.js.org/
- 💻 GitHub Desktop: https://desktop.github.com/

---

## Need Help?

For your repository: https://github.com/swapneelshirsatss-oss/Stone-Heritage-Mukteshwar-GAI/branches

Questions? Check the GitHub Issues or create a new discussion!
