# Link to Page

https://vincepr.github.io/vite-portfolio/

## installing vite

```
npm create vite@latest vite-portfolio -- --template react-ts
cd vite-portfolio
npm install
```

- add dependencies for animations and pagescrolling on menuclicking
```
npm i framer-motion react-anchor-link-smooth-scroll react-hook-form
```

## create useMediaQuery hook
- in /src/hooks/useMediaQuery.tsx
```tsx
import {useState, useEffect} from "react"


/** tells us if the screen size reaches a certain breakpoint */
export default function useMediaQuery(query:any){
    const [matches, setMatches] = useState(false)

    useEffect(()=>{
        const media = window.matchMedia(query)
        if(media.matches !== matches){
            setMatches(media.matches)
        }
        const listener = () => setMatches(media.matches)
        window.addEventListener("resize", listener)
        return () => window.removeEventListener("resize", listener)
    }, [matches, query])

    return matches
}
```

## tailwind

- installing 
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- setting up the tailwind.config.cjs

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "FDCC49",
        grey: "#EDEDED",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.25)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": "linear-gradient(81.66deg, #00B5EE 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue": "linear-gradient(90deg, #24CBFF 14.53%, #FFBD0C 107.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: 'url("./assets/brush.png")',
        person1: 'url("./assets/person-1.png")',
        person2: 'url("./assets/person-2.png")',
        person3: 'url("./assets/person-3.png")',
      },
    },
    screens: {
      xs: "480px",
      sm: "760px",
      md: "1060px",
    },
  },
  plugins: [],
}
```

- add to index.css
```css

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:wght@400;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#root,
.app {
    height: 100%;
    background-color: #010026;
    @apply text-white;
}
```

- in terminal run

```
npm run dev
```

- start using Tailwind utility classes, for example:

```jsx
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

## Deploy to GitHub-pages
- set correct base in vite.config.ts
- Go to your GitHub Pages configuration in the repository settings page and choose the source of deployment as "GitHub Actions", this will lead you to create a workflow that builds and deploys your project, a sample workflow that installs dependencies and builds using npm is provided:

```
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ['main']

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          # Upload dist repository
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```