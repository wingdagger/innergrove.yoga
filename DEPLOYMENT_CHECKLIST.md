# GitHub Pages Deployment Checklist

## Pre-Deployment ✅

- [x] Navigation updated - Only About page visible
- [x] Static export configured - `output: "export"` in next.config.ts
- [x] GitHub Actions workflow created - `.github/workflows/deploy.yml`
- [x] Project builds successfully - No errors, creates `out/` directory
- [x] Documentation complete - README, DEPLOY_NOW, GITHUB_PAGES_SETUP

## Deployment Steps (Do These Now)

### Step 1: Create GitHub Repository
- [ ] Go to https://github.com/new
- [ ] Name: `innergrove.yoga`
- [ ] Make it **PUBLIC** (required for free GitHub Pages)
- [ ] Do NOT initialize with README
- [ ] Click "Create repository"

### Step 2: Push Code to GitHub
In your terminal, in the project folder:

```bash
git init
git add .
git commit -m "Initial commit: InnerGrove Yoga website"
git remote add origin https://github.com/YOUR_USERNAME/innergrove.yoga.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

- [ ] Code pushed successfully

### Step 3: Enable GitHub Pages
- [ ] Go to your GitHub repository
- [ ] Click Settings (top right)
- [ ] Click "Pages" in left sidebar
- [ ] Under "Build and deployment":
  - [ ] Select "GitHub Actions" as source
- [ ] Save changes

### Step 4: Wait for Deployment
- [ ] Go to "Actions" tab
- [ ] Watch for "Deploy to GitHub Pages" workflow
- [ ] Wait for green checkmark (typically 1-2 minutes)

### Step 5: View Your Live Site
Your site will be available at:
```
https://YOUR_USERNAME.github.io/innergrove.yoga/
```

- [ ] Copy URL from GitHub Pages settings
- [ ] Test the site works

## Post-Deployment

### Adding Custom Domain (Optional)
- [ ] Purchase domain (if not already owned)
- [ ] Go to GitHub Pages settings
- [ ] Enter custom domain: `innergrove.yoga`
- [ ] Follow DNS instructions from GitHub

### Making Changes (After Deployment)
Whenever you update your site:

```bash
# Make changes to files
# Then:
git add .
git commit -m "Description of changes"
git push
```

Site will auto-update in 1-2 minutes.

## Troubleshooting

### Build Failed
- Check "Actions" tab for error messages
- Most common: Missing dependencies
- Solution: `npm install` locally, commit `package-lock.json`, try again

### Site Not Appearing
- Wait 5-10 minutes for first deployment
- Clear browser cache
- Verify correct GitHub Pages settings

### Site Shows Old Content
- Clear cache or use incognito mode
- GitHub Pages may cache for up to 24 hours

## Helpful URLs

- Your GitHub repository: `https://github.com/YOUR_USERNAME/innergrove.yoga`
- Your live site: `https://YOUR_USERNAME.github.io/innergrove.yoga/`
- GitHub Pages docs: `https://pages.github.com/`

## Files Reference

| File | Purpose |
|------|---------|
| `.github/workflows/deploy.yml` | Auto-deployment script |
| `next.config.ts` | Next.js config with static export |
| `src/app/about/page.tsx` | Your About page content |
| `src/components/Navigation.tsx` | Navigation with About link |
| `src/components/Footer.tsx` | Footer with About link |
| `README.md` | Project documentation |
| `DEPLOY_NOW.md` | Quick deployment guide |

## Support

If you get stuck:
1. Check the error message in GitHub Actions
2. Read GITHUB_PAGES_SETUP.md for more details
3. Check GitHub Pages documentation

---

**Ready to deploy?** Start with Step 1 above! 🚀
