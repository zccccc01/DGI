// 切换标签页
function switchTab(tabName) {
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("active");
  });

  document.getElementById(tabName + "Tab").classList.add("active");
  document
    .querySelector(`.tab-button[onclick="switchTab('${tabName}')"]`)
    .classList.add("active");
}

// 文件上传处理
document
  .getElementById("markdownFile")
  .addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("markdownInput").value = e.target.result;
      };
      reader.readAsText(file);
    }
  });

document.getElementById("cssFile").addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("cssInput").value = e.target.result;
    };
    reader.readAsText(file);
  }
});

// 加载示例Markdown
function loadSampleMarkdown() {
  const sampleMarkdown = `# 1. 引言

## 1.1 研究背景

说明研究领域的现状和存在的问题...

## 1.2 研究意义

阐述本研究的理论价值和实践意义...

## 2. 相关工作

## 2.1 国内外研究现状

综述现有研究成果...

## 2.2 现有方法局限性

分析当前方法的不足...

## 3. 研究方法

## 3.1 实验设计

描述实验方案和流程...

## 3.2 数据收集

说明数据来源和处理方法...

## 4. 实验结果

## 4.1 定量分析

展示实验数据...

## 4.2 结果讨论

分析实验结果的意义...

## 5. 结论与展望

## 5.1 主要结论

总结研究成果...

## 5.2 未来工作

提出后续研究方向...

## 参考文献

1. 作者. 文献名[J]. 期刊名, 年份, 卷(期): 页码.
2. 作者. 书名[M]. 出版地: 出版社, 年份.`;
  document.getElementById("markdownInput").value = sampleMarkdown;
}

// 加载默认CSS
function loadDefaultCSS() {
  const defaultCSS = `/* 全局样式 */
@page {
  size: A4;
  margin: 2.5cm 2.5cm 2.5cm 3cm; /* 左增加0.5cm装订线 */
}

body {
  font-family: "宋体", "Times New Roman", serif;
  font-size: 12pt;
  line-height: 1.25;
  text-align: justify;
  margin: 0;
  padding: 0;
}

/* 标题样式 */
h1 {
  font-family: "黑体", sans-serif;
  font-size: 16pt; /* 三号 */
  font-weight: bold;
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1em;
}

h2 {
  font-family: "黑体", sans-serif;
  font-size: 15pt; /* 小三号 */
  font-weight: bold;
  text-align: left;
  margin-top: 1em;
  margin-bottom: 1em;
}

h3 {
  font-family: "黑体", sans-serif;
  font-size: 14pt; /* 四号 */
  font-weight: bold;
  text-align: left;
  margin-top: 1em;
  margin-bottom: 1em;
}

/* 正文样式 */
p {
  font-size: 12pt; /* 小四号 */
  text-indent: 2em;
  margin: 0;
  padding: 0;
}

/* 列表样式 */
ol,
ul {
  margin-left: 2em;
}

li {
  margin-bottom: 0.5em;
}

/* 表格样式 */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1em 0;
}

table thead tr {
  border-top: 2pt solid black;
  border-bottom: 1pt solid black;
}

table tbody tr {
  border-bottom: 1pt solid black;
}

th,
td {
  padding: 0.5em;
  text-align: left;
}

/* 特殊页码样式 */
.front-matter {
  page: roman;
}

.front-matter::after {
  content: counter(page, upper-roman);
}

.main-content {
  page: arabic;
}

.main-content::after {
  content: counter(page);
}

/* 分节符样式 */
.section-break {
  break-before: page;
}

/* 参考文献引用样式 */
.citation {
  vertical-align: super;
  font-size: smaller;
}

/* 两端对齐 */
.justify {
  text-align: justify;
  text-justify: inter-ideograph;
}`;
  document.getElementById("cssInput").value = defaultCSS;
}

// 清空Markdown
function clearMarkdown() {
  document.getElementById("markdownInput").value = "";
}

// 清空CSS
function clearCSS() {
  document.getElementById("cssInput").value = "";
}

// 渲染预览
function renderPreview() {
  const markdown = document.getElementById("markdownInput").value;
  const css = document.getElementById("cssInput").value;

  // 转换Markdown为HTML
  const html = convertMarkdownToAcademicHTML(markdown);

  // 创建预览内容
  const previewContent = document.getElementById("previewContent");
  previewContent.innerHTML = html;

  // 应用CSS样式
  const styleElement = document.createElement("style");
  styleElement.textContent = css;
  previewContent.appendChild(styleElement);
}

/**
 * 将Markdown转换为学术论文格式的HTML
 * @param {string} markdownText - Markdown文本
 * @returns {string} 转换后的HTML
 */
function convertMarkdownToAcademicHTML(markdownText) {
  // 预处理：处理中文空格和特殊格式
  markdownText = markdownText.replace(/^# ([\u4e00-\u9fa5]{2})$/gm, (match) => {
    return match.replace(" ", "  "); // 两个字的中文标题加空格
  });

  // 转换Markdown为HTML
  let html = markdownText
    // 加粗文本 **text** 或 __text__
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/__(.*?)__/g, "<strong>$1</strong>")
    // 斜体文本 *text* 或 _text_
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/_(.*?)_/g, "<em>$1</em>")
    // 一级标题
    .replace(/^# (.*)$/gm, '<h1 class="level1">$1</h1>')
    // 二级标题
    .replace(/^## (.*)$/gm, '<h2 class="level2">$1</h2>')
    // 三级标题
    .replace(/^### (.*)$/gm, '<h3 class="level3">$1</h3>')
    // 段落
    .replace(/^(?!<h[1-6]|<ul|<ol|<li|<table|<tr|<td|<th)(.+)$/gm, "<p>$1</p>")
    // 无序列表
    .replace(/^\* (.*)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)+/gms, "<ul>$&</ul>")
    // 有序列表
    .replace(/^\d+\. (.*)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)+/gms, "<ol>$&</ol>")
    // 三线表格
    .replace(/^\|(.+)\|$/gm, (match) => {
      const cells = match.split("|").filter((cell) => cell.trim() !== "");
      if (cells[0].includes("-")) return "";
      return `<tr>${cells
        .map((cell) => `<td>${cell.trim()}</td>`)
        .join("")}</tr>`;
    })
    .replace(/(<tr>.*<\/tr>)+/gms, (match) => {
      const rows = match
        .split("</tr>")
        .filter((row) => row.trim() !== "")
        .map((row) => row + "</tr>");
      return `<table class="three-line"><thead>${rows[0]}</thead><tbody>${rows
        .slice(1)
        .join("")}</tbody></table>`;
    })
    // 参考文献引用
    .replace(/\[(\d+)\]/g, '<sup class="citation">[$1]</sup>')
    // 图表标题
    .replace(
      /^图 (\d+): (.*)$/gm,
      '<div class="figure"><p class="caption">图 $1: $2</p></div>'
    )
    .replace(
      /^表 (\d+): (.*)$/gm,
      '<div class="figure"><p class="caption">表 $1: $2</p></div>'
    );

  return html;
}

// 下载Word文档
function downloadWord() {
  const markdown = document.getElementById("markdownInput").value;
  const css = document.getElementById("cssInput").value;
  const html = convertMarkdownToAcademicHTML(markdown);

  // 创建完整的HTML文档
  const fullHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        ${css}
    </style>
</head>
<body>
    ${html}
</body>
</html>`;

  // 创建Blob对象
  const blob = new Blob([fullHtml], { type: "application/msword" });
  const url = URL.createObjectURL(blob);

  // 创建下载链接
  const a = document.createElement("a");
  a.href = url;
  a.download = "学术论文.doc";

  // 触发下载
  document.body.appendChild(a);
  a.click();

  // 清理
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 100);
}

// 初始化加载默认CSS
window.onload = function () {
  loadDefaultCSS();
};
