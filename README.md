<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/d153deab-424e-4794-8c9e-937db64a0d01

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Hostinger with GitHub Actions

This repository includes a GitHub Actions workflow that builds the Astro site and uploads the generated files to Hostinger over FTP.

Before enabling it, add these repository secrets in GitHub:

- `FTP_SERVER`
- `FTP_USERNAME`
- `FTP_PASSWORD`

Push to the `main` or `master` branch (or run the workflow manually) to trigger the deployment.
