# Truly M — Stories Crafted by Hand

A luxury website prototype for Truly M home textiles and contemporary living, rooted in Indian handloom craftsmanship.

## Getting Started

### Local Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

### Static Build (for GitHub Pages)
```bash
npm run build
```
When `NEXT_EXPORT=true` or running on GitHub Actions, Next.js generates static HTML, CSS, and JS into the `./out` folder.

---

## How to Push to GitHub & Host on GitHub Pages

### 1. Download or Clone the Project
In Google AI Studio Build, click the **Export / Download** button (or copy the files to your computer).

### 2. Initialize Git & Push to GitHub
Open your terminal in the project directory:

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit of Truly M luxury website"

# Create a new repository on GitHub (e.g., https://github.com/your-username/truly-m)
# Link and push your code:
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (top tab) → **Pages** (in the left sidebar).
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. That's it! The included `.github/workflows/deploy.yml` workflow will automatically trigger, build the static export, and deploy your site to `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPO_NAME>/`.
