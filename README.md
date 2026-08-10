# 🚀 LeetCode Hot 100 极速记忆 & 艾宾浩斯刷题工坊

<p align="left">
  <img src="https://img.shields.io/badge/Author-chinaliao-0071e3?style=flat-square&logo=github" alt="Author" />
  <img src="https://img.shields.io/badge/UI-Apple_Minimalist-000000?style=flat-square&logo=apple" alt="Apple UI" />
  <img src="https://img.shields.io/badge/Framework-React_18_%2B_Vite-61dafb?style=flat-square&logo=react" alt="React Vite" />
  <img src="https://img.shields.io/badge/Algorithm-SM--2_Spaced_Repetition-34c759?style=flat-square" alt="SM-2 Algorithm" />
</p>

> **专为 LeetCode 算法面试打造的高效刷题、快速记忆与抗遗忘复习 Web 应用。**  
> 结合 **艾宾浩斯记忆曲线 (SM-2 算法)**、**苹果极简白 (Apple Minimalist White)** 设计语言与 **IntelliJ IDEA 经典代码高亮**，帮你告别“看懂了容易忘”、“关键代码写不出”的痛苦！

🌐 **在线体验地址**：[https://chinaliao.github.io/LeetCodehot100/](https://chinaliao.github.io/LeetCodehot100/)

---

## 🌟 核心特性概览

- 🍏 **苹果极简白设计语言 (Apple Minimalist White)**
  - 采用通透的纯白/微灰底色、毛玻璃 Header (`backdrop-filter: blur(20px)`)、柔和浅阴影与 SF Pro 质感字形，打造极简、优雅、高专注度的练习环境。
- 📚 **完整 100 道 Hot 100 题单 + 多维联合筛选**
  - **100% 覆盖官方 LeetCode Hot 100 题单**。
  - 支持按 **难度（简单 / 中等 / 困难）** 与 **16 大算法大类（哈希表、双指针、滑动窗口、链表、二叉树、动态规划、单调栈等）** 进行组合筛选。
  - 支持题号、中文/英文名称及考点关键词实时搜索。
- 💡 **快速答案查阅 & IntelliJ IDEA 语法高亮**
  - 一键展收标准答案，提炼 **1-2 句核心解题直觉/避坑技巧**。
  - 接入 **IntelliJ IDEA Darcula 风格代码高亮**，支持 **Java / Python** 双语一键切换与复制代码。
- ✍️ **手写代码演练与个人笔记**
  - 内置极简手写代码编辑器（支持 Tab 键 4 空格缩进、重置模板）。
  - 支持记录个人解题笔记与心得，全自动实时保存草稿至浏览器 `localStorage`。
- 🧠 **艾宾浩斯 SM-2 抗遗忘推送**
  - 练习完成后可对记忆熟练度进行打分：
    - 🔴 **遗忘 / 重学**（1 天后再次推送）
    - 🟠 **模糊 / 困难**（2 天后再次推送）
    - 🟢 **良好 / 掌握**（4 天后再次推送）
    - 🔵 **熟练 / 专家**（7~15 天后推送）
  - 首页每日自动根据曲线推送“今天到期需复习”的题目清单，支持一键顺序连续复习。
- 💾 **本地持久化与数据导入导出**
  - 纯前端单页应用（SPA），无需后端服务，所有学习进度保存在本地。
  - 支持一键导出与导入 `.json` 备份文件，方便随时迁移或恢复。

---

## 📂 项目结构

```text
LeetCodehot100/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions 自动化部署工作流
├── src/
│   ├── components/
│   │   ├── Header.jsx       # 苹果风毛玻璃 Header & 备份导入导出
│   │   ├── AllProblems.jsx  # 全量 100 题多维筛选列表
│   │   ├── PracticeStudio.jsx # 快速看答案 + 手写代码演练 + SM-2 打分
│   │   ├── CodeBlock.jsx    # IntelliJ IDEA Darcula 语法高亮组件
│   │   ├── MemoryQueue.jsx  # 艾宾浩斯每日到期推送列表
│   │   └── StatsModal.jsx   # 学习进度可视化统计图表
│   ├── data/
│   │   ├── hot100Data.js    # 100 道官方 Hot 100 题目、考点与多语言代码
│   │   └── categories.js    # 16 大算法大类定义与数量统计
│   ├── services/
│   │   └── storage.js       # 艾宾浩斯 SM-2 算法 & localStorage 存取
│   ├── index.css            # 苹果极简白 CSS 设计系统
│   ├── App.jsx              # 主应用根组件
│   └── main.jsx             # React 入口
├── index.html
├── vite.config.js           # Vite 配置文件 (基准相对路径 base: './')
└── package.json
```

---

## 🛠️ 本地开发与构建

1. **克隆项目到本地**：
   ```bash
   git clone https://github.com/chinaliao/LeetCodehot100.git
   cd LeetCodehot100
   ```

2. **安装依赖**：
   ```bash
   npm install
   ```

3. **启动本地开发服务器**：
   ```bash
   npm run dev
   ```
   在浏览器中打开 `http://localhost:5173/` 即可体验。

4. **构建生产环境产物**：
   ```bash
   npm run build
   ```

---

## 🚀 部署到 GitHub Pages

项目已配置好 GitHub Actions 自动化工作流 `.github/workflows/deploy.yml`。

只需在仓库的 `Settings` -> `Pages` 中，将 **Source** 切换为 **GitHub Actions**，每次 `git push` 到 `main` 分支时 GitHub 将会自动完成构建与在线部署！

---

## 👤 作者 (Author)

Designed & Developed with ❤️ by **[chinaliao](https://github.com/chinaliao)**.

如觉得有帮助，欢迎点个 ⭐ **Star** 支持一下！
