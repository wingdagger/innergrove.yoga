# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Git installed locally
- This project initialized as a Git repository

## Setup Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name your repository: `innergrove.yoga` or your preferred name
4. Choose "Public" (required for free GitHub Pages)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### 2. Configure Repository for GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
4. Save changes

### 3. Push Your Code to GitHub

In your project directory, run:

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: InnerGrove Yoga website"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/innergrove.yoga.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Automatic Deployment

Once you push to the `main` branch:
1. GitHub Actions will automatically build your site
2. The workflow file (`.github/workflows/deploy.yml`) will run
3. Your site will be deployed to GitHub Pages

You can monitor the deployment:
1. Go to your repository on GitHub
2. Click "Actions" tab
3. You'll see the deployment workflow running

### 5. Access Your Deployed Site

Once deployed, your site will be available at:
- `https://YOUR_USERNAME.github.io/innergrove.yoga/`

Or if using a custom domain (optional):
- Configure your custom domain in the "Pages" settings

## Making Updates

After deployment, any changes you push to the `main` branch will automatically redeploy:

```bash
git add .
git commit -m "Update: Description of changes"
git push
```

The site will be updated within 1-2 minutes.

## Custom Domain (Optional)

To use a custom domain like `innergrove.yoga`:

1. Purchase a domain (GoDaddy, Namecheap, etc.)
2. Go to your repository's Settings → Pages
3. Under "Custom domain", enter your domain: `innergrove.yoga`
4. Follow the DNS configuration instructions provided by GitHub
5. Update your domain's DNS records to point to GitHub Pages

## Troubleshooting

### Build Failed
- Check the "Actions" tab to see error messages
- Common issues:
  - Missing dependencies: Run `npm install` locally, then commit `package-lock.json`
  - TypeScript errors: Fix any type errors before pushing

### Site Not Appearing
- Wait 5-10 minutes for the first deployment
- Clear your browser cache
- Verify the correct URL in repository Settings → Pages

### Pages Showing Old Content
- GitHub Pages may cache files
- Add `?version=2` to URL to bypass cache
- Or wait for cache to expire (up to 24 hours)

## Local Testing Before Deployment

To test the production build locally before deploying:

```bash
npm run build
npm run start
```

Then visit `http://localhost:3000`

## File Structure for Deployment

The deployment looks for a static build in the `out/` directory created by:
```bash
npm run build
```

This happens automatically in the GitHub Actions workflow.
