# Rae（张楠）个人求职作品集网站

一个可直接公开发布、放进简历投递的静态作品集网站。零后端、零数据库、移动优先。

- 线上：https://bejewelled-biscochitos-0da0a0.netlify.app
- 仓库：https://github.com/rae20130806-source/rae
- 部署：Netlify 已关联 GitHub 仓库 `rae` 的 `main` 分支，推送后自动发布（约 1-2 分钟）

---

## 一、文件结构（本次已理顺）

```
/
├── index.html              首页（引用独立 CSS/JS，不再内嵌代码）
├── project.html            项目详情页模板
├── assets/
│   ├── css/style.css       样式（一般不用改）
│   ├── js/content.js       ★ 唯一需要维护的内容文件
│   ├── js/app.js           渲染逻辑（不用改）
│   ├── images/             图片素材（见下方目录）
│   ├── videos/             视频素材
│   └── documents/          简历 / 报告 PDF
└── README.md
```

> 本次把之前的「内联版」改回了清晰的分离结构。以后**改任何文字只改 `content.js` 一个文件**，不用再动 HTML 里的大段代码。旧的 `style.css`、`app.js` 冗余文件已删除。

---

## 二、当前状态：已完成 / 待补充

### 已完成
- 首页（Hero / About）、核心能力、工具技能、简历、作品集、更多经历、联系 8 大板块
- 8 个项目：4 个重点项目（Featured）+ 4 个补充经历（Additional），各有详情页
- 中英文切换（逐字段对齐，忠实翻译）
- 移动优先：导航默认收起、汉堡菜单、照片缩小、无横向溢出
- 图片点击看大图、视频内嵌播放、简历下载入口（配置驱动）
- 素材目录体系

### 待补充（当前为占位，不填假数据）
| 素材 | 放到哪个目录 | 建议在 content.js 填的位置 |
| --- | --- | --- |
| 正面证件照 | `assets/images/profile/` | `hero.photo` |
| AI 漫剧：剧本/人设/场景/分镜/关键帧/成片 | `assets/images/ai-comic/`、`assets/videos/ai-comic/` | `aigc-mini-drama` 的 `cover` / `evidence` |
| AI 产品体验截图/问题记录 | `assets/images/ai-product/`、`assets/documents/ai-analysis/` | `ai-product-experience` 的 `evidence` |
| 抖音：主页/代表作/数据截图 | `assets/images/music-account/`、`assets/videos/music-account/` | `douyin-music-account` 的 `evidence` |
| 网站：首页/移动端/桌面端/GitHub/Netlify 截图 | `assets/images/website/` | `portfolio-website` 的 `evidence` |
| 补充经历图片 | `assets/images/experience/` | 对应项目的 `evidence` |
| 简历 PDF | `assets/documents/resume/` | `contact.resumePdf` |
| 邮箱 / 电话 / GitHub / LinkedIn | 无需文件 | `contact.email` / `phone` / `github` / `linkedin` |

---

## 三、怎么改内容（只改 content.js）

打开 `assets/js/content.js`，里面 `zh`（中文）、`en`（英文）两套，字段一一对应。**改中文时把英文对应位置也一起改，保持一致。**

### 1. 填联系方式
找到 `contact`，把空字符串填上真实信息；留空的字段网站会自动隐藏，不会显示无效内容：
```js
contact: {
  email: '你的邮箱@example.com',
  phone: '',              // 不想公开就留空
  github: 'https://github.com/rae20130806-source',
  linkedin: '',
  resumePdf: 'assets/documents/resume/Rae_Resume.pdf',
  ...
}
```

### 2. 放个人照片
把照片放进 `assets/images/profile/portrait.jpg`，然后：
```js
hero: { photo: 'assets/images/profile/portrait.jpg', ... }
```
中英文两处都填。留空 `''` 时显示简洁占位。

### 3. 给项目加图片 / 视频
先上传素材到对应目录，再在项目里填 `evidence`：
```js
evidence: [
  { type: 'image', src: 'assets/images/ai-comic/character.png', caption: '人物设定图' },
  { type: 'image', src: 'assets/images/ai-comic/storyboard.png', caption: '分镜' },
  { type: 'video', src: 'assets/videos/ai-comic/episode.mp4', poster: '', caption: '成片' }
]
```
图片点击可看大图；视频在网页内播放并适配手机。项目卡片封面填 `cover: '图片路径'`。

### 4. 改文字、数据
直接改引号里的文字，如 `intro`、`title`、`value: '28'` 等。**只改引号内的字，别动引号和逗号括号。**

---

## 四、手机端操作流程（你现在的主要方式）

GitHub 已关联 Netlify，改完 push 到 `main` 就自动上线。iPhone 上用 **Safari 网页版 github.com**（不要用电邮/其他 App），建议先「请求桌面网站」。

**改文字：**
1. 进仓库 `rae` → 点开 `assets/js/content.js`
2. 点铅笔图标 → 改 → 拉到底 **Commit changes**
3. 等 1-2 分钟，刷新网站

**传素材（照片/视频/PDF）：**
1. 进仓库里对应目录，如 `assets/images/profile/`
2. **Add file → Upload files** → 选文件 → **Commit changes**
3. 再按上面第 3 节把路径填进 `content.js`

> 视频建议压缩到 50MB 以内（GitHub 单文件限制）。iPhone 录屏可先在「照片」里选择「压缩」或用剪映导出较小尺寸。

---

## 五、发布前检查清单

- [ ] 中英文内容一致、无夸大
- [ ] 照片 / 项目素材路径正确，图片能放大、视频能播放
- [ ] 简历 PDF 放入 `assets/documents/resume/` 且 `contact.resumePdf` 已填，下载可用
- [ ] 确认可公开的联系方式已填，其余留空
- [ ] 手机端检查：排版、导航、语言切换、按钮、链接
- [ ] 无破图、无无效链接、无控制台报错

---

## 六、内容真实性原则

所有经历、数据、工具熟练度以本人确认为准。个人体验不写成产品开发，个人实验不写成商业交付，累计数据不写成近 30 天数据，不虚构联系方式与成绩。缺失信息一律占位，不自行补全。
