
# 💻 Grow-Blog: A Minimalist Static Blog Generator

Grow-Blog is a **fast**, **minimalist**, and **developer-focused** static site generator designed specifically for creating simple, responsive blogs. Stop worrying about databases, servers, and complicated CMS setups—just write your content in Markdown and let Grow-Blog handle the rest.
Grow-Blog utilizes a unique blend of **Neumorphism (Soft UI)** and a **Modern Tech aesthetic**.

![Grow-Blog Homepage Preview](https://gretamacri.com/assets/img/projects/project2/2_homepage/2_growblog_homepage_1920.webp)

---

###  Key Features

* **Zero Database:** Generates a complete, ready-to-deploy static website.
* **Markdown Focused:** Write all your content using easy, portable Markdown files.
* **Rapid Development:** Designed for quick iteration and easy customization.
* **Built for Speed:** Static sites are inherently fast, providing excellent performance and SEO.

---


###  Technologies Used

| Technology | Purpose |  |
| :--- | :--- | :--- | 
| **Node.js** | Runtime Environment | 
| **NextJs** | Framework of choice | 
| **Gray-Matter** | Parsing Markdown files and extracting **Frontmatter** | 
| **Remark** | Converting Markdown post body content into final HTML |
| **SASS** 	| Styling |
| **Playwright** 	| End-to-End (E2E) testing framework |
 ---

<br><br>

## Getting Started

Follow these steps to get Grow-Blog up and running on your local machine.

### Prerequisites

You must have **Node.js** (version 16 or higher is recommended) installed on your system.

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/DarkPix3l/Grow-Blog.git](https://github.com/DarkPix3l/Grow-Blog.git)
    ```

2.  **Navigate and Install Dependencies:**
    ```bash
    cd Grow-Blog
    npm install
    ```

### Local Development

Run the development script to build the site and start a local server with file watching for live updates:

```bash
npm run dev
```


## Writing Content

All blog posts are written in standard Markdown format and stored in the **`posts/`** directory.

### Post Structure

Every post file requires **Frontmatter**—metadata placed at the very top of the file, enclosed by triple dashes (`---`). This data is used to generate the index page and post headers.

| Field | Description | Required? |
| :--- | :--- | :--- |
| **`title`** | The main title of the blog post. | Yes |
| **`date`** | The date of publication (e.g., `YYYY-MM-DD`). | Yes |
| **`tags`** | A comma-separated list of keywords for categorization. | No |


```markdown
---
title: "My First Grow-Blog Post"
date: "2025-10-27"
tags: "getting-started, tutorial"
---

Welcome to my new blog! This content is written in Markdown. 
You can use **bold** text, *italics*, and [links](https://example.com).

## Subheading Example

This section covers basic usage.

```

## Testing

**End-to-End (E2E) testing** were made using ** Playwright **

### Running Tests

To run the comprehensive test suite locally:

1.  Start the development server:
    ```bash
    npm run dev
    ```
2.  In a separate terminal, run the tests:
    ```bash
    npx playwright test
    ```

### Generating New Tests
Playwright includes a powerful inspector tool, **Codegen**, which records your browser actions. This feature helps quickly generate new test code and generating locators.

example:
```bash
npx playwright codegen [url]

```
That's perfectly fine! Since you haven't deployed it yet, we can draft a standard **Deployment** section that covers the necessary steps for any static site generator, giving you clear instructions for when you're ready.

Here is the draft for the **Deployment** section, ready to be added to your README:



## Deployment

Once you've finished developing and writing your posts, deployment is the final step.

### 1. Build the Site

Run the production build script:

```
npm run build

```

This command outputs the complete, ready-to-publish static site into the **`out/`** folder (or check your build script's output if the directory name differs).
