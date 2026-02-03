# Quick Start: Deploy InnerGrove to GitHub Pages

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Name your repo: `innergrove.yoga` (or your preferred name)
3. Make it **Public**
4. Click "Create repository"

## Step 2: Initialize Git & Push to GitHub

```bash
cd /Users/jallen/code/InnerGroveWebSite

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: InnerGrove Yoga website"

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/innergrove.yoga.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (on the left sidebar)
3. Under "Build and deployment":
   - Select "GitHub Actions" as the source
4. Save

That's it! GitHub will automatically build and deploy your site.

## Step 4: Wait for Deployment

- Go to the **Actions** tab in your repository
- Watch for the "Deploy to GitHub Pages" workflow to complete
- Once done (green checkmark), your site is live!

## Step 5: View Your Live Site

Your site is now available at:
```
https://YOUR_USERNAME.github.io/innergrove.yoga/
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Making Changes

To update your site after deployment:

```bash
# Make your changes to the files

# Commit and push
git add .
git commit -m "Update: description of changes"
git push
```

Your site will redeploy automatically (1-2 minutes).

## Using a Custom Domain (Optional)

If you own `innergrove.yoga` domain:

1. In GitHub repository Settings → Pages
2. Enter your custom domain
3. Update your domain's DNS records (GitHub will show instructions)
4. Your site will be accessible at `https://innergrove.yoga`

---

**Current Setup:**
- ✅ Only About page is visible in navigation
- ✅ Static export enabled for GitHub Pages
- ✅ GitHub Actions workflow ready for auto-deployment
- ✅ All other pages (Home, Services, Contact) are hidden but still in code
