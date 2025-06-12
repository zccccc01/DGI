# 🧠 DGI - 文档通用智能体

> 让每一页都被 AI 精雕细琢 ✨

## 🌐 Language

- [🇺🇸 English](README-en.md)
- [🇨🇳 简体中文](README.md)

## 📌 项目简介

**DGI**（Document General Intelligence）是一个由大语言模型（LLM）驱动的智能文档排版系统，支持将文档分页处理、独立优化、统一合并。它用一种近乎“AGI”的方式提升文档的结构感知和排版质量，无论是毕业论文、学术报告，还是出版材料，DGI 都能让你专注内容，格式交给 AI。

## ✨ 功能亮点

### 🔹 页级处理（Page-based Editing）

- 每页作为独立单元进行处理。
- 支持增量更新，便于局部修改，效率更高。

### 🔹 Map-Reduce 架构

- **Map 阶段**：LLM 对每一页进行润色与排版。
- **Reduce 阶段**：将所有页面合并成完整文档（`.docx` / `.pdf` / `.html`）。

### 🔹 智能结构感知（Structure-Aware Formatting）

- 自动识别标题、编号、引用等结构内容。
- 无需手动打开 Word，也能生成专业排版。

## 🧩 模块组成

| 模块名称     | 功能说明                                     |
| ------------ | -------------------------------------------- |
| `dgi-split`  | 自动分页：按章节/页面切分文档                |
| `dgi-style`  | 样式美化：统一标题样式、引用风格等           |
| `dgi-polish` | LLM 语言润色：每页自动润色优化               |
| `dgi-merge`  | 合并所有页面，输出为 `.docx` / `.pdf` 等格式 |
| `dgi-watch`  | 文件监听：改动自动触发排版                   |
| `dgi-web`    | 网页界面：支持可视化排版与编辑               |

### 使用示例

```bash
# 1. 分页处理
dgi-split input.md --output pages/

# 2. 使用 LLM 优化每一页
dgi-polish pages/

# 3. 合并所有页面为最终文档
dgi-merge pages/ --output final.docx
```

## 📚 项目愿景

> 就像 AGI 致力于构建通用智能，DGI 希望成为“文档通用智能体”。
> 让写作者专注写作，排版交给 AI。

我们希望每一位学生、研究者、写作者都能从 DGI 获益：
不再因 Word 样式困扰，不再为论文格式抓狂，DGI 是你的 AI 排版搭子！

## 🧠 项目命名缘由（Why “DGI”？）

因为这个想法疯狂得像 AGI，而我们专注于文档。
我们处理的是文档（doc），赋予它智能（general intelligence）。

## 📄 许可证

MIT License
自由修改、使用、分发。希望你因此写得更快、毕业更早 :)
