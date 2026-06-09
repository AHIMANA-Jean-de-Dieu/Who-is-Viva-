# More About Viva

This is a static portfolio website built with HTML, CSS, and JavaScript.

## Deployment Options

### 1. GitHub Pages

1. Create a GitHub repository for this project.
2. Add the remote and push:
   ```powershell
   git remote add origin https://github.com/<your-user>/<repo>.git
   git branch -M main
   git push -u origin main
   ```
3. In the GitHub repository settings, enable `Pages` and choose the `main` branch with the root folder.
4. The site will be available at `https://<your-user>.github.io/<repo>/`.

### 2. Netlify

1. Sign up for a Netlify account at https://www.netlify.com/.
2. Create a new site from Git and connect your GitHub repository.
3. Use the default build settings; no build command is needed for a static site.
4. Deploy the site and use the generated Netlify URL.

### 3. Vercel

1. Sign up for Vercel at https://vercel.com/.
2. Import your GitHub repository.
3. Use the default settings for a static site.
4. Deploy and use the provided Vercel URL.

## Local Preview

To run the site locally:

```powershell
python -m http.server 3000
```

Then open `http://127.0.0.1:3000/`.

To run the site locally:

```powershell
python -m http.server 3000
```

Then open `http://127.0.0.1:3000/`.
