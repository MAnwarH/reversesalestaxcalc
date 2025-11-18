# GitHub Repository Setup Guide

Complete instructions to push your code to GitHub and maximize SEO backlinks for [reversesalestaxcalc.com](https://reversesalestaxcalc.com/).

## 📋 Prerequisites

- [x] GitHub account created
- [x] Repository created: https://github.com/MAnwarH/reversesalestaxcalc.git
- [x] Git installed on your computer ([Download Git](https://git-scm.com/downloads))

## 🚀 Step-by-Step Setup

### Step 1: Open Terminal/Command Prompt

**Windows:**
- Press `Win + R`
- Type `cmd` and press Enter
- Navigate to your project: `cd "d:\Reverse sales tax calculator"`

**Mac/Linux:**
- Open Terminal
- Navigate to your project: `cd /path/to/Reverse\ sales\ tax\ calculator`

### Step 2: Initialize Git Repository

```bash
# Initialize git in your project directory
git init

# Check git status
git status
```

You should see all your files listed as "Untracked files".

### Step 3: Configure Git (First Time Only)

```bash
# Set your name (replace with your name)
git config --global user.name "Your Name"

# Set your email (use your GitHub email)
git config --global user.email "your.email@example.com"
```

### Step 4: Add All Files to Git

```bash
# Add all files to staging
git add .

# Verify files are staged
git status
```

All files should now show as "Changes to be committed" in green.

### Step 5: Create Your First Commit

```bash
# Commit with a descriptive message
git commit -m "Initial commit: Add reverse sales tax calculator with comprehensive documentation"
```

### Step 6: Connect to GitHub Repository

```bash
# Add your GitHub repository as remote origin
git remote add origin https://github.com/MAnwarH/reversesalestaxcalc.git

# Verify remote is added
git remote -v
```

### Step 7: Rename Branch to 'main' (GitHub Standard)

```bash
# Rename current branch to main
git branch -M main
```

### Step 8: Push to GitHub

```bash
# Push your code to GitHub
git push -u origin main
```

**If prompted for credentials:**
- Use your GitHub username
- For password, use a **Personal Access Token** (not your GitHub password)
  - Create token at: https://github.com/settings/tokens
  - Select scopes: `repo` (full control of private repositories)
  - Copy the token and paste when prompted

### Step 9: Verify on GitHub

1. Go to: https://github.com/MAnwarH/reversesalestaxcalc
2. You should see all your files including:
   - README.md with preview
   - index.html, styles.css, script.js
   - All HTML pages
   - LICENSE, CONTRIBUTING.md, CHANGELOG.md
   - Images and assets

---

## ⚙️ Configure GitHub Repository Settings

### 1. Add Website URL

1. Go to your repo: https://github.com/MAnwarH/reversesalestaxcalc
2. Click **⚙️ Settings** (top right)
3. Under "About" section (right side):
   - Click **⚙️ (gear icon)**
   - **Website**: `https://reversesalestaxcalc.com/`
   - **Description**: `Free reverse sales tax calculator - Calculate original price before tax instantly`
   - Check ✅ **Use your GitHub Pages website**
   - **Topics**: Add tags (press Enter after each):
     - `calculator`
     - `sales-tax`
     - `finance`
     - `javascript`
     - `web-app`
     - `tax-calculator`
     - `reverse-calculator`
     - `finance-tools`
   - Click **Save changes**

### 2. Enable GitHub Pages (Optional but Recommended)

1. Go to **Settings** → **Pages** (left sidebar)
2. Under "Source":
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click **Save**
3. Your site will be published at: `https://manwarh.github.io/reversesalestaxcalc/`

**Note**: This creates another backlink! You can keep both domains active.

### 3. Add Repository Description

The description should appear under your repo name automatically. If not:
1. Edit the "About" section (gear icon)
2. Add: `Free reverse sales tax calculator - Calculate original price before tax instantly. Works with any tax rate worldwide.`

### 4. Pin Repository to Profile (Optional)

1. Go to your profile: https://github.com/MAnwarH
2. Click **Customize your pins**
3. Select `reversesalestaxcalc` checkbox
4. Click **Save pins**

This showcases your project prominently on your profile!

---

## 🔄 Making Future Updates

When you make changes to your code:

```bash
# 1. Check what changed
git status

# 2. Add changed files
git add .

# 3. Commit with descriptive message
git commit -m "Update: describe what you changed"

# 4. Push to GitHub
git push
```

---

## 📊 SEO Optimization Checklist

After pushing to GitHub, verify these for maximum SEO benefit:

### ✅ Repository Page
- [ ] README.md displays correctly with all links
- [ ] Website URL shows in "About" section
- [ ] Topics/tags are visible
- [ ] Description is clear and keyword-rich
- [ ] License badge shows MIT

### ✅ Links Working
- [ ] All links to reversesalestaxcalc.com work
- [ ] Badges clickable and functional
- [ ] Internal navigation (CONTRIBUTING, LICENSE) works

### ✅ Content Quality
- [ ] README is comprehensive (2000+ words)
- [ ] Multiple strategic links to your website
- [ ] Keywords naturally included
- [ ] Professional formatting

### ✅ Discoverability
- [ ] Repository is PUBLIC (not private)
- [ ] Topics added for search
- [ ] README includes screenshots/demo section
- [ ] Clear call-to-action links

---

## 🌟 Maximize Your GitHub SEO

### 1. Submit to Google for Indexing

After pushing, submit your GitHub repo to Google:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://github.com/MAnwarH/reversesalestaxcalc`
3. Request indexing for:
   - Main repo page
   - README (GitHub renders it)

### 2. Share Your Repository

- Post on social media (Twitter, LinkedIn, Reddit)
- Add link from your website footer: "View on GitHub"
- Mention in developer communities

### 3. Encourage Engagement

- Ask colleagues to ⭐ star the repo
- Respond to issues quickly
- Keep code updated regularly
- Add releases/version tags

### 4. Create a Profile README

Create a special repository `MAnwarH/MAnwarH` with README.md to showcase this project on your profile.

---

## 🔗 Backlink Summary

After completing this setup, you'll have backlinks from:

1. **Main README** - 10+ links to reversesalestaxcalc.com
2. **Repository About section** - Direct link
3. **CONTRIBUTING.md** - 5+ links
4. **CHANGELOG.md** - 5+ links
5. **GitHub Pages** (if enabled) - Additional backlink
6. **Profile** (if pinned) - Profile page visibility

**Total**: 25+ high-quality backlinks from GitHub.com (Domain Authority: 96)

---

## 🆘 Troubleshooting

### "fatal: remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/MAnwarH/reversesalestaxcalc.git
```

### "Updates were rejected"

```bash
# Pull first, then push
git pull origin main --rebase
git push origin main
```

### "Permission denied"

Make sure you're using a Personal Access Token, not your password.

### Files not showing on GitHub

```bash
# Verify files are committed
git log --oneline

# Force push (ONLY if repo is empty)
git push -f origin main
```

---

## 📞 Need Help?

- **GitHub Docs**: https://docs.github.com/
- **Git Tutorial**: https://git-scm.com/book/en/v2
- **Contact**: Use the [contact form](https://reversesalestaxcalc.com/contact.html)

---

## ✅ Verification

After completing all steps, verify:

1. Visit: https://github.com/MAnwarH/reversesalestaxcalc
2. Click links to reversesalestaxcalc.com - all should work
3. README should display with formatting
4. Topics should show as blue badges
5. Website URL should appear in About section

**Congratulations! Your GitHub backlink setup is complete!** 🎉

Visit [reversesalestaxcalc.com](https://reversesalestaxcalc.com/) to see your live calculator!
