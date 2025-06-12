# 🧠 DGI - Document General Intelligence

> Let every page be crafted by AI ✨

## 📌 Overview

**DGI** (Document General Intelligence) is an experimental, LLM-powered document formatting system that reimagines how we **structure**, **style**, and **compose** documents.

By treating each page as a unit, DGI enables intelligent formatting through a **map-reduce architecture** — turning messy drafts into professional `.docx`, `.pdf`, or `.html` outputs.

## ✨ Features

### 🔹 Page-Based Editing

- Each page is treated independently.
- Supports incremental updates and improves LLM efficiency.

### 🔹 Map-Reduce Architecture

- **Map Phase**: Each page is polished and styled via LLM.
- **Reduce Phase**: All pages are merged into a final formatted document.

### 🔹 Structure-Aware Formatting

- Auto-detects headings, numbering, citations, and tables.
- No more fighting with Word styles — the AI does it for you.

## 🧩 Modules

| Module       | Description                                          |
| ------------ | ---------------------------------------------------- |
| `dgi-split`  | Splits document into logical page-based segments     |
| `dgi-style`  | Applies predefined formatting styles and templates   |
| `dgi-polish` | LLM-based language polishing per page                |
| `dgi-merge`  | Merges pages into `.docx`, `.pdf`, or `.html` output |
| `dgi-watch`  | Watches file changes and auto-regenerates            |
| `dgi-web`    | Web interface for visual editing                     |

### Example Usage

```bash
# 1. Split document into pages
dgi-split input.md --output pages/

# 2. Polish each page with LLM
dgi-polish pages/

# 3. Merge all pages into a final doc
dgi-merge pages/ --output final.docx
```

## 📚 Vision

> Just like AGI aims to generalize intelligence, **DGI** aims to generalize document intelligence.

We want every student, researcher, and writer to focus on **what** they write — not **how** it's formatted.
DGI is your smart, structure-aware formatting companion.

## 🧠 Why "DGI"?

Because it’s as bold as AGI — but for documents.
It brings structure, elegance, and intelligence into your writing workflow.

## 📄 License

MIT License.
Free to use, modify, and distribute — we hope it helps you write faster and graduate sooner. :)
