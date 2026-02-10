# 🌱 Grow-Blog V2

Grow-Blog is a modern, CMS-driven blog platform built with Next.js App Router and Contentful.
It focuses on resilience, performance, and clean component architecture, while keeping the UI minimal and developer-friendly.

The project evolved from a static prototype into a fully dynamic blog powered by a headless CMS, with strong error handling and graceful UI fallbacks.

![Grow-Blog Homepage Preview](https://github.com/user-attachments/assets/d96b1def-2fb6-45fd-bf77-064f402085f5)


## ✨ Key Features

    - **Headless CMS (Contentful)**
        - Content is fetched dynamically from Contentful — no local markdown files.

    - **Next.js App Router**
        - Server Components, async pages, and optimized data fetching.

    - **Resilient UI Architecture**
        - Pages don’t crash when content is missing:

    - **Component-level error handling**
        - Graceful fallbacks (NotFoundComponent, internal guards)

    - **UI Component System**
        - Expanding UI component variants to increase development speed while maintaining style consistency

    - **Performance-Focused**
        - Server-side rendering
        - Reduced redundant fetching (props passed instead of refetching)
        - Optimized images (next/image)
        
    - **Weather Widget Integration**
        - Retrieves live weather data from openweathermap (user consent required)
        - Fetches dynamic background images from Unsplash (user consent required)
        - Weather codes map to “mood categories”
        - Updates recommended articles dynamically based on weather mood


## Tech Stack

| Technology               | Purpose      |
| ------------------------ | ------------ |
| **Next.js (App Router)** | Framework    |
| **TypeScript**           | Type safety  |
| **Contentful**           | Headless CMS |
| **SASS / CSS Modules**   | Styling      |
| **Netlify**              | Deployment   |
| **ESLint**               | Code quality |
| **Playwright**           | E2E testing  |
| **Weather API**          | Weather-based personalization  |
| **Unsplash API**         | Dynamic location imagery  |

## Prerequisites

- Node.js ≥ 22 recommended
- A Contentful Space with:
    - Blog post content model
    - Access token

## 🔐 Environment Variables

This project requires Contentful credentials.
Create a .env.local file:
```bash
SPACE_ID=your_contentful_space_id
ACCESS_TOKEN=your_contentful_delivery_token
WEATHER_APIKEY=your_openweathermap_api_key
UNSPLASH_KEY=your_unsplash_api_key
```

>## ⚠️ Important
>
>- Do NOT prefix these with NEXT_PUBLIC_
>- These are server-only secrets
>- Never commit .env.local
>

## 🧪 Local Development
```bash
npm run dev
```

App runs at: http://localhost:3000


## Project Evolution (v2)

Grow-Blog started as a local, file-based blog prototype, where posts were read from Markdown files at build time.
This repository represents Grow-Blog v2, a major architectural evolution.

What Changed

| v1 (Original)                 | v2 (Current)                    |
| ----------------------------- | ------------------------------- |
| Local Markdown files          | Headless CMS (Contentful)       |
| Static content reading        | Dynamic server-side fetching    |
| Build-time content            | Runtime CMS integration         |
| Tight coupling page ↔ content | Decoupled, resilient components |
|                               | More components & Variants      |
|                               | More dynamic Sections           |
|                               | Weather Widget Integration      |
|                               | Better Dynamic filtering logic  |

## Why the Migration Matters

- Real CMS workflow (non-dev content editing)
- No rebuild required for content update
- Better security
- Cleaner separation of concerns
- Pages fetch data
- Components render data
- Components fail gracefully
