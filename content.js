/*
 * Rae（张楠）求职作品集 — 唯一内容源文件
 * ---------------------------------------------------------------
 * 本文件是整站唯一需要维护的内容文件。所有文字都在这里，中英文各一套，字段一一对应。
 * 改任何介绍、项目、数据、联系方式后，刷新页面即可生效。
 *
 * 素材：图片 / 视频 / PDF 放到 assets/ 对应目录后，把路径填到下方 photo / cover /
 *       evidence / contact.resumePdf 字段。留空 '' 时显示简洁占位，不出现破图或无效链接。
 *
 * 真实性红线：所有内容以本人确认的事实为准；缺失素材一律使用占位，
 * 不虚构数据、不夸大熟练度、不把个人体验 / 实验包装成商业或专业工作成果。
 */

window.SITE_DATA = {
  /* ============================================================
   * 中文
   * ============================================================ */
  zh: {
    langLabel: '中',
    siteName: 'Rae · 张楠',
    seoTitle: 'Rae 张楠 — AI Product Operations｜个人求职作品集',
    seoDesc: '张楠（Rae）个人求职作品集：AI 产品运营 / AI 运营 / AI 内容运营方向，涵盖 AI 产品体验分析、AIGC 内容创作、内容与社媒运营及个人项目实践。',

    nav: [
      { id: 'home', label: '首页' },
      { id: 'about', label: '关于' },
      { id: 'competencies', label: '核心能力' },
      { id: 'skills', label: '工具技能' },
      { id: 'resume', label: '简历' },
      { id: 'portfolio', label: '作品集' },
      { id: 'experience', label: '更多经历' },
      { id: 'contact', label: '联系' }
    ],

    ui: {
      viewWork: '查看作品',
      downloadResume: '下载简历',
      contactMe: '联系我',
      readMore: '查看详情',
      backHome: '返回首页',
      prevProject: '上一个项目',
      nextProject: '下一个项目',
      placeholder: '素材待补充',
      featured: '重点项目',
      additional: '补充经历',
      emptyEmail: '邮箱待确认后公开',
      skillsUsed: '使用工具',
      overview: '概述'
    },

    hero: {
      eyebrow: '个人求职作品集 · 2027 届',
      name: '张楠',
      nameEn: 'Rae',
      role: 'AI Product Operations · AI Content Operations',
      intro: '音乐学背景的内容创作者，持续探索 AI 产品体验、数字内容创作与 AI 工具应用。关注真实用户需求，善于从实际使用场景中发现问题、整理体验并形成改进思路。',
      seeking: ['AI 产品运营', 'AI 内容运营', 'AI 运营'],
      location: '苏州优先 · 也考虑上海 / 杭州 / 深圳 / 北京 / 广州 / 长沙',
      availability: '2027 届应届 · 接受实习、校招及全职',
      photo: '',
      photoPlaceholder: '正面证件照位置',
      photoHint: '照片待上传'
    },

    about: {
      eyebrow: '关于我',
      title: '在内容创作与 AI 工具之间，找到自己的位置',
      blocks: [
        {
          tag: 'Background · 专业背景',
          paragraphs: [
            '我叫张楠（Rae），吉首大学张家界学院音乐学专业 2027 届本科毕业生。',
            '音乐专业学习经历让我具备一定的审美能力、艺术表达能力和内容理解能力。专业基础包括声乐、音乐理论，同时有古筝、钢琴等学习经历。'
          ]
        },
        {
          tag: 'Experience · 实践经历',
          paragraphs: [
            '我独立运营个人抖音音乐账号，参与账号定位、选歌、内容录制、后期处理、封面设计、文案发布和基础数据观察，具备从内容构思到发布的完整实践经验。',
            '我也是多种 AI 产品的长期用户，持续体验 ChatGPT、DeepSeek、Gemini 等工具，关注 AI 产品的实际使用体验、交互逻辑、记忆能力、内容生成效果和用户需求。此外，我尝试用 AI 工具完成剧本、人物设定、分镜、图片及视频生成，探索多种 AI 工具在内容生产中的协作方式。',
            '目前正在独立推进个人作品集网站建设，使用 GitHub 管理代码、Netlify 部署网站，并借助 AI 编程工具辅助开发和优化。'
          ]
        },
        {
          tag: 'Career Focus · 职业方向',
          paragraphs: [
            '希望将内容创作经验、用户视角与 AI 工具应用能力结合，向 AI 产品运营、AI 运营及 AI 内容运营方向发展。',
            '我重视真实的用户体验，愿意主动学习新工具、理解产品功能、分析使用问题，并通过实践持续完善自己的能力。'
          ]
        }
      ]
    },

    competencies: {
      eyebrow: '核心能力',
      title: '我如何观察、创作与推进',
      intro: '相比罗列形容词，这里用具体的实践方式说明我在 AI 产品体验、内容创作与项目推进上的能力。',
      items: [
        {
          no: '01',
          title: 'AI 产品体验与用户洞察',
          desc: '长期使用多种 AI 产品，具有持续的实际使用经验。关注用户使用场景、AI 对话交互、长期记忆与上下文延续、人物设定一致性、内容生成质量、交互逻辑与稳定性，以及用户持续使用的原因。',
          detail: '使用中能主动发现记忆丢失、角色偏离、逻辑不一致等问题，并通过反馈和调整尝试改善体验，希望进一步把个人观察整理为结构化的体验分析与优化建议。',
          note: '这是个人产品体验实践，不是专业产品测试岗位经历，也不是 AI 产品开发经验。'
        },
        {
          no: '02',
          title: 'AI 工具应用与自主学习',
          desc: '主动探索不同 AI 工具的功能与使用场景，能根据任务需求选择工具，把 AI 应用于信息整理、内容创意、文案辅助、图片生成、视频生成、剧本与分镜构思、个人项目推进与网站开发辅助。',
          detail: '具有自主探索新工具的意愿，能通过实际操作逐步理解工具能力及其适用范围。'
        },
        {
          no: '03',
          title: '内容策划与数字内容创作',
          desc: '具有个人内容账号运营经验，能独立完成账号定位、选题与选歌、内容构思、拍摄与录制、基础音视频处理、封面与文案制作、内容发布和基础数据观察。',
          detail: '同时具有 AI 漫剧创作实验经历，接触剧本、人物设定、场景设计、分镜、图片生成、视频生成与剪辑等环节。'
        },
        {
          no: '04',
          title: '用户视角与内容敏感度',
          desc: '关注内容表达能否满足用户需求，重视可读性、情绪价值和互动体验。能结合实际使用与内容反馈观察用户反应，理解用户为什么使用某项产品、为什么对某类内容产生兴趣。',
          detail: '具有跨平台内容体验，了解短视频与社交平台内容的不同表达方式。'
        },
        {
          no: '05',
          title: '创意执行与跨领域整合',
          desc: '音乐专业背景带来审美、表达、节奏感和艺术理解能力，能把音乐、文字、视觉内容与 AI 工具结合，参与内容构思和数字内容制作。',
          detail: '具有节目策划、个人内容创作、视频制作和 AI 漫剧实验等实践经历。'
        },
        {
          no: '06',
          title: '自主学习与项目推进',
          desc: '能围绕个人目标主动学习新工具，并把学习落实到具体项目：从长期 AI 产品使用中整理体验问题，用 AI 工具完成内容创作实验，独立推进个人作品集网站搭建。',
          detail: '使用 GitHub 管理代码、Netlify 部署网站，并持续根据实际浏览效果优化页面，体现从学习到实践、从发现问题到迭代改进的过程。'
        }
      ]
    },

    skills: {
      eyebrow: '工具与技能',
      title: '工具服务于任务，而非罗列',
      intro: '按用途分类，并如实区分使用程度。标注为「辅助 / 基础 / 实践中」的，表示仍在学习和积累中。',
      groups: [
        {
          title: 'AI 对话与研究工具',
          tools: ['ChatGPT', 'DeepSeek', 'Gemini', 'Grok', '豆包', '通义千问'],
          usage: '信息整理、内容辅助、问题分析、创意构思、产品体验'
        },
        {
          title: 'AI 内容生产工具',
          tools: ['ChatGPT', '豆包', '即梦', '剪映'],
          usage: '剧本构思、人物设定、图片生成、视频生成、视频剪辑'
        },
        {
          title: 'AI 编程与开发辅助',
          tools: ['Claude Code', 'Codex', 'WorkBuddy'],
          usage: '辅助理解代码、修改网页、整理需求、推进网站搭建与迭代（辅助性质，非专业开发）'
        },
        {
          title: '网站与代码管理',
          tools: ['GitHub', 'Netlify', 'HTML', 'CSS', 'JavaScript'],
          usage: '参与网站结构设计、用 GitHub 管理代码、用 Netlify 部署；HTML / CSS / JavaScript 为网站搭建中的基础应用与学习实践，非专业前端开发能力'
        },
        {
          title: '其他内容制作能力',
          tools: ['剪映（基础剪辑）', '音频录制与基础处理', '短视频内容制作'],
          usage: '个人短视频与课程小组视频实践'
        }
      ],
      note: '说明：PS、Excel、PPT 等工具目前不熟练；英语、韩语无正式成绩支持，不标注等级或熟练程度。'
    },

    resume: {
      eyebrow: '简历概览',
      title: '经历与能力一览',
      note: '完整 PDF 简历待上传；未确认的联系方式不予公开。',
      sections: [
        {
          heading: '教育背景',
          items: [
            { title: '吉首大学张家界学院', sub: '音乐学 · 本科 · 2027 届', time: '—', desc: '专业基础：声乐、音乐理论；古筝、钢琴学习经历。' }
          ]
        },
        {
          heading: '重点项目',
          items: [
            { title: 'AI 产品体验与用户需求分析', sub: '个人体验分析', time: '长期进行', desc: '记录多模型使用中的问题、场景与影响，整理体验观察。' },
            { title: 'AI 漫剧创作实验', sub: '个人未发布实验', time: '个人项目', desc: '多工具协同完成一集一分多钟短片的剧本、分镜、素材与剪辑。' },
            { title: '个人抖音音乐账号运营', sub: '从 0 到 1', time: '持续运营', desc: '28 条作品，粉丝 89 人；独立完成定位、制作、发布与数据观察。' },
            { title: '个人作品集网站搭建', sub: '个人数字化项目', time: '近期', desc: 'GitHub 管理代码、Netlify 部署、AI 工具辅助，持续迭代。' }
          ]
        },
        {
          heading: '补充经历',
          items: [
            { title: 'Threads 内容运营 / 咖啡代理 / 才艺直播 / 节目策划', sub: '', time: '', desc: '跨平台内容运营、基础销售与客户沟通、直播表达、节目策划与排练协调。' }
          ]
        }
      ]
    },

    categories: [
      { key: 'ai-product', no: '01', name: 'AI 产品体验与分析', en: 'AI Product Experience & Research', desc: '作为长期用户，对产品功能、用户需求与体验问题的观察。' },
      { key: 'aigc', no: '02', name: 'AIGC 内容创作', en: 'AIGC Content Creation', desc: '使用多款 AI 工具协同完成的内容实验与创作流程。' },
      { key: 'content-social', no: '03', name: '内容与社媒运营', en: 'Content & Social Media Operations', desc: '个人账号从定位、制作到发布与数据观察的运营实践。' },
      { key: 'website', no: '04', name: '数字化项目实践', en: 'Digital Project Practice', desc: '个人作品集网站的规划、搭建、部署与迭代。' },
      { key: 'creative', no: '05', name: '创意策划与执行', en: 'Creative Planning & Execution', desc: '销售、直播、节目编排等落地执行经历。' }
    ],

    projects: [
      {
        id: 'ai-product-experience',
        category: 'ai-product',
        no: '01',
        featured: true,
        badge: ['个人体验分析', '长期进行'],
        title: 'AI 产品体验与用户需求分析',
        subtitle: '从长期真实使用中，观察 AI 产品的体验问题、用户影响与优化方向。',
        cover: '',
        stats: null,
        sections: [
          { heading: '项目背景', body: [
            '长期体验 AI 互动文字游戏、AI 对话产品及通用 AI 助手，关注 AI 产品在真实使用场景中的体验表现。使用过 ChatGPT、DeepSeek、Gemini、Grok 等工具。'
          ]},
          { heading: '重点观察的问题', body: [
            '长期对话中的记忆丢失；人物设定与角色一致性不足；上下文衔接与剧情逻辑混乱；AI 内容生成质量不稳定；用户需要反复纠正系统才能获得预期结果。'
          ]},
          { heading: '实践内容', body: [
            '在真实使用中记录问题，观察问题出现的场景，分析对用户体验的影响；尝试通过补充信息和调整交互改善体验，并思考产品层面可能的优化方向。'
          ]},
          { heading: '结果与呈现', body: [
            '形成长期、连续的体验观察与问题归类，属于个人体验分析，不是正式商业项目或产品开发项目。',
            '项目正进一步完善为结构化体验分析报告，建议结构：用户场景 → 问题复现 → 问题分类 → 用户影响 → 优化建议。'
          ]}
        ],
        evidence: [],
        evidenceNote: '预留：产品使用截图、问题记录、体验分析报告、优化建议文档。',
        disclaimer: '说明：本项目为个人产品体验分析，不是正式产品测试工作，也不是 AI 产品开发经验。'
      },
      {
        id: 'aigc-mini-drama',
        category: 'aigc',
        no: '02',
        featured: true,
        badge: ['个人实验', '多工具协同'],
        title: 'AI 漫剧创作实验',
        subtitle: '用多款 AI 工具协同，尝试完成一集一分多钟的漫剧短片。',
        cover: '',
        stats: null,
        sections: [
          { heading: '项目背景与工具', body: [
            '尝试使用 AI 工具完成一集一分多钟的漫剧。ChatGPT 用于剧本、人物设定、分镜及图片生成；豆包用于视频生成；剪映用于后期剪辑。'
          ]},
          { heading: '实践内容', body: [
            '剧本构思与编写、人物设定、场景设计、分镜制作、图片生成、视频生成、剪辑与整合，并尝试解决人物和场景一致性问题。'
          ]},
          { heading: '项目状态', body: [
            '个人实验作品，尚未公开发布。当前重点在于呈现 AI 工具应用、内容生产流程和多工具协作能力。'
          ]}
        ],
        evidence: [],
        evidenceNote: '建议展示：剧本片段、人物设定图、场景图、分镜图、关键帧、最终视频。素材待本人确认后可公开。',
        disclaimer: '说明：这是个人 AIGC 创作实验，尚未发布，不是商业交付或客户项目。'
      },
      {
        id: 'douyin-music-account',
        category: 'content-social',
        no: '03',
        featured: true,
        badge: ['个人账号', '从 0 到 1'],
        title: '个人抖音音乐账号运营',
        subtitle: '独立完成一个音乐账号从内容定位、制作到发布与数据观察的全过程。',
        cover: '',
        stats: [
          { value: '28', label: '发布作品' },
          { value: '89', label: '粉丝' },
          { value: '9,897', label: '单条最高播放' },
          { value: '471', label: '单条最高点赞' }
        ],
        statsNote: '最高播放与最高点赞来自同一条作品。',
        sections: [
          { heading: '项目定位', body: [
            '个人内容账号从零到一的运营实践。内容形式包括中文、英文、韩文歌曲翻唱，以及清唱、伴奏演唱、一镜到底视频。'
          ]},
          { heading: '具体工作', body: [
            '账号定位、选歌、歌曲学习、内容录制、音轨调整、封面设计、文案制作、内容发布和基础数据观察。'
          ]},
          { heading: '个人复盘', body: [
            '选歌与平台内容趋势的结合仍需加强；视频时长和完播表现值得继续研究；演唱表现及内容质量仍有提升空间；不同拍摄和制作方式的效果需要通过更多数据验证。'
          ]}
        ],
        evidence: [],
        evidenceNote: '建议展示：账号主页截图、3—5 条代表作品、作品数据截图、录制与制作过程。素材待确认。',
        disclaimer: '说明：这是个人账号实践，不包装成成熟商业账号，也不夸大增长成绩。'
      },
      {
        id: 'portfolio-website',
        category: 'website',
        no: '04',
        featured: true,
        badge: ['个人项目', 'AI 辅助开发'],
        title: '个人作品集网站搭建',
        subtitle: '独立推进个人作品集网站，从定位、结构到部署与持续迭代。',
        cover: '',
        stats: null,
        sections: [
          { heading: '项目背景', body: [
            '为求职展示个人经历、能力与项目作品，独立推进个人作品集网站搭建。使用 WorkBuddy、GitHub、Netlify、AI 编程辅助工具，以及 HTML、CSS、JavaScript。'
          ]},
          { heading: '实际实践', body: [
            '梳理网站定位和信息结构；规划首页、个人介绍、简历、作品集和联系方式；参与页面布局与视觉风格设计；用 GitHub 管理代码仓库；用 Netlify 部署网站；借助 AI 编程工具辅助代码修改；根据手机端浏览效果进行迭代。'
          ]},
          { heading: '项目现状', body: [
            '已完成个人作品集网站的基础搭建和线上部署，目前正在完善页面设计、个人信息、联系方式和项目素材。'
          ]}
        ],
        evidence: [],
        evidenceNote: '建议展示：网站首页 / 移动端 / 桌面端截图、GitHub 仓库截图、Netlify 部署截图、迭代过程。',
        disclaimer: '说明：这是个人实践项目，不是商业网站开发项目，也不代表专业软件工程经验。'
      },

      {
        id: 'threads-account',
        category: 'content-social',
        no: '05',
        featured: false,
        badge: ['补充经历', '跨平台内容'],
        title: 'Threads 内容运营',
        subtitle: '数月持续发布与互动，观察不同表达方式的反馈。',
        cover: '',
        stats: [
          { value: '8,000+', label: '累计浏览量' },
          { value: '5', label: '粉丝' }
        ],
        statsNote: '以上为累计浏览量，不是近 30 天数据。',
        sections: [
          { heading: '内容与工作', body: [
            '独立运营 Threads 账号数月，主要内容为中文生活感悟、情绪表达及个人兴趣相关内容。通过内容发布和主动互动观察不同表达方式的反馈，积累基础跨平台内容运营经验。'
          ]}
        ],
        evidence: [],
        evidenceNote: '',
        disclaimer: '数据口径：8,000+ 为累计浏览量，非近 30 天数据。'
      },
      {
        id: 'coffee-microbusiness',
        category: 'creative',
        no: '06',
        featured: false,
        badge: ['补充经历', '校园时期'],
        title: '咖啡代理实践',
        subtitle: '从推广到售后，参与一次小型销售实践。',
        cover: '',
        stats: null,
        sections: [
          { heading: '背景与实践', body: [
            '大一寒假期间参与小品牌咖啡代理，持续约 2—3 个月。通过抖音、小红书、快手等平台进行产品推广和客户沟通，参与获客、销售、订单处理、打包发货和售后。'
          ]},
          { heading: '重点', body: [
            '重点体现自主执行、客户沟通和基础销售实践。'
          ]}
        ],
        evidence: [],
        evidenceNote: '',
        disclaimer: ''
      },
      {
        id: 'talent-livestream',
        category: 'creative',
        no: '07',
        featured: false,
        badge: ['补充经历', '现场表达'],
        title: '才艺直播实践',
        subtitle: '以唱歌为主的直播实践，锻炼现场表达与实时互动。',
        cover: '',
        stats: null,
        sections: [
          { heading: '背景与实践', body: [
            '大三暑假期间进行过约一个月的才艺直播，以唱歌为主要内容，偶尔进行聊天互动，积累了直播表达、内容呈现和实时互动经验。'
          ]}
        ],
        evidence: [],
        evidenceNote: '',
        disclaimer: ''
      },
      {
        id: 'new-year-show-director',
        category: 'creative',
        no: '08',
        featured: false,
        badge: ['补充经历', '组织协调'],
        title: '节目策划与执行',
        subtitle: '两次参与元旦晚会单个节目的策划与排练组织。',
        cover: '',
        stats: null,
        sections: [
          { heading: '背景与实践', body: [
            '高中期间两次参与元旦晚会节目策划与排练组织，负责单个节目的创意、改编及排练协调，具有基础的创意策划、沟通协作和执行经验。'
          ]},
          { heading: '范围说明', body: [
            '职责范围是单个节目，不是整场晚会总导演。'
          ]}
        ],
        evidence: [],
        evidenceNote: '',
        disclaimer: '说明：这是单个节目的策划与排练协调，不是整场晚会总导演。'
      }
    ],

    contact: {
      eyebrow: '联系我',
      title: '期待与你聊聊',
      intro: '以下信息仅在确认可公开后显示。未提供的字段不会出现在网站上。',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
      resumePdf: '',
      labels: {
        email: '邮箱',
        phone: '电话',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        resume: '简历 PDF'
      },
      privacyNote: '未确认的联系方式与隐私信息不会公开；简历 PDF 上传后此处才显示下载入口。'
    },

    footer: {
      tagline: 'AI Product Operations · Content Creator',
      note: '本网站内容以本人确认的真实信息为准，缺失素材均以占位呈现。',
      backToTop: '回到顶部'
    }
  },

  /* ============================================================
   * English — 严格依据中文事实翻译，不额外发挥或夸大
   * ============================================================ */
  en: {
    langLabel: 'EN',
    siteName: 'Rae · Zhang Nan',
    seoTitle: 'Rae — AI Product Operations | Portfolio',
    seoDesc: 'Portfolio of Rae (Zhang Nan), seeking AI Product Operations / AI Operations / AI Content Operations roles: AI product experience research, AIGC creation, content & social operations.',

    nav: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'competencies', label: 'Competencies' },
      { id: 'skills', label: 'Skills' },
      { id: 'resume', label: 'Résumé' },
      { id: 'portfolio', label: 'Portfolio' },
      { id: 'experience', label: 'Experience' },
      { id: 'contact', label: 'Contact' }
    ],

    ui: {
      viewWork: 'View work',
      downloadResume: 'Download résumé',
      contactMe: 'Contact me',
      readMore: 'View project',
      backHome: 'Back to home',
      prevProject: 'Previous',
      nextProject: 'Next',
      placeholder: 'Visual pending',
      featured: 'Featured projects',
      additional: 'Additional experience',
      emptyEmail: 'Email to be published',
      skillsUsed: 'Tools used',
      overview: 'Overview'
    },

    hero: {
      eyebrow: 'Personal Portfolio · Class of 2027',
      name: 'Zhang Nan',
      nameEn: 'Rae',
      role: 'AI Product Operations · AI Content Operations',
      intro: 'A content creator with a music background, exploring AI product experience, digital content creation and AI tool application. I focus on real user needs and turn observations from actual use into structured improvement ideas.',
      seeking: ['AI Product Operations', 'AI Content Operations', 'AI Operations'],
      location: 'Suzhou preferred · also open to Shanghai / Hangzhou / Shenzhen / Beijing / Guangzhou / Changsha',
      availability: 'Class of 2027 · open to internships, campus hiring and full-time',
      photo: '',
      photoPlaceholder: 'Portrait photo space',
      photoHint: 'Photo to be added'
    },

    about: {
      eyebrow: 'About me',
      title: 'Finding my place between content creation and AI tools',
      blocks: [
        {
          tag: 'Background',
          paragraphs: [
            'I am Zhang Nan (Rae), a 2027 BA graduate in Musicology at Jishou University Zhangjiajie College.',
            'My music training has shaped my aesthetic sense, artistic expression and content understanding. My foundation includes vocal music and music theory, along with guzheng and piano study.'
          ]
        },
        {
          tag: 'Experience',
          paragraphs: [
            'I independently run a personal Douyin music account, taking part in positioning, song selection, recording, post-production, cover design, copywriting and basic data review — a complete process from concept to publication.',
            'I am also a long-term user of many AI products, continuously experiencing tools such as ChatGPT, DeepSeek and Gemini, focusing on real usability, interaction logic, memory, generation quality and user needs. I have also used AI tools to create scripts, character designs, storyboards, images and video, exploring how multiple tools collaborate in content production.',
            'I am currently building my personal portfolio site independently, using GitHub for code, Netlify for deployment, and AI coding tools to assist development and optimization.'
          ]
        },
        {
          tag: 'Career Focus',
          paragraphs: [
            'I hope to combine content creation experience, a user perspective and AI tool application, growing toward AI Product Operations, AI Operations and AI Content Operations.',
            'I value genuine user experience and am willing to learn new tools proactively, understand product features, analyze usage issues and keep improving through practice.'
          ]
        }
      ]
    },

    competencies: {
      eyebrow: 'Competencies',
      title: 'How I observe, create and follow through',
      intro: 'Rather than listing adjectives, here is how I work across AI product experience, content creation and project execution.',
      items: [
        {
          no: '01',
          title: 'AI Product Experience & User Insight',
          desc: 'A long-term user of multiple AI products. I focus on usage scenarios, conversational interaction, long-term memory and context, character consistency, generation quality, interaction stability and why users keep returning.',
          detail: 'I proactively spot issues such as memory loss, character drift and logical inconsistency, and try to improve the experience through feedback and adjustment, aiming to turn observations into structured analysis and suggestions.',
          note: 'This is personal product experience practice — not professional product testing work, nor AI product development.'
        },
        {
          no: '02',
          title: 'AI Tool Application & Self-directed Learning',
          desc: 'I actively explore AI tools and choose them by task, applying AI to information organization, content ideas, copywriting, image and video generation, script and storyboard planning, personal projects and website development assistance.',
          detail: 'I am willing to explore new tools on my own and gradually understand their capabilities and limits through hands-on use.'
        },
        {
          no: '03',
          title: 'Content Planning & Digital Content Creation',
          desc: 'With personal account experience, I can independently handle positioning, topic and song selection, content planning, filming and recording, basic audio/video editing, cover and copywriting, publishing and basic data observation.',
          detail: 'I also have an AI mini-drama experiment covering script, character and scene design, storyboard, image and video generation, and editing.'
        },
        {
          no: '04',
          title: 'User Perspective & Content Sensitivity',
          desc: 'I care whether content meets user needs, valuing readability, emotional value and interaction. I observe reactions from real use and feedback to understand why people use a product or engage with certain content.',
          detail: 'With cross-platform content experience, I understand the different expressions of short video and social platforms.'
        },
        {
          no: '05',
          title: 'Creative Execution & Cross-domain Integration',
          desc: 'My music background brings aesthetic sense, expression, rhythm and artistic understanding, letting me combine music, text and visuals with AI tools in content creation and digital production.',
          detail: 'I have practiced show planning, personal content creation, video production and AI mini-drama experiments.'
        },
        {
          no: '06',
          title: 'Self-directed Learning & Project Execution',
          desc: 'I set personal goals, learn new tools and apply them in concrete projects: organizing issues from long-term AI use, running content experiments with AI tools, and independently building my portfolio site.',
          detail: 'I use GitHub for code and Netlify for deployment, and keep refining the site based on real mobile browsing — a process from learning to practice and from finding problems to iterating.'
        }
      ]
    },

    skills: {
      eyebrow: 'Tools & Skills',
      title: 'Tools serve the task, not a checklist',
      intro: 'Grouped by purpose, with honest levels. "Assistive / basic / in practice" means I am still learning and accumulating experience.',
      groups: [
        {
          title: 'AI Conversation & Research',
          tools: ['ChatGPT', 'DeepSeek', 'Gemini', 'Grok', 'Doubao', 'Qianwen'],
          usage: 'Information organization, content assistance, problem analysis, idea generation, product experience'
        },
        {
          title: 'AI Content Production',
          tools: ['ChatGPT', 'Doubao', 'Jimeng', 'CapCut'],
          usage: 'Script planning, character design, image generation, video generation, video editing'
        },
        {
          title: 'AI Coding Assistance',
          tools: ['Claude Code', 'Codex', 'WorkBuddy'],
          usage: 'Assisting with code understanding, page edits, requirement organizing and website iteration (assistive, not professional development)'
        },
        {
          title: 'Web & Code Management',
          tools: ['GitHub', 'Netlify', 'HTML', 'CSS', 'JavaScript'],
          usage: 'Site structure design, GitHub for code, Netlify for deployment; HTML/CSS/JavaScript are basic application and learning practice in site building, not professional front-end development'
        },
        {
          title: 'Other Content Production',
          tools: ['CapCut (basic editing)', 'Audio recording & basic processing', 'Short video production'],
          usage: 'Personal short videos and course group video practice'
        }
      ],
      note: 'Note: I am not yet proficient in Photoshop, Excel or PPT; English and Korean have no formal certification, so no levels are claimed.'
    },

    resume: {
      eyebrow: 'Résumé overview',
      title: 'Experience & skills at a glance',
      note: 'The full PDF résumé is to be uploaded; unconfirmed contact details are not published.',
      sections: [
        {
          heading: 'Education',
          items: [
            { title: 'Jishou University Zhangjiajie College', sub: 'Musicology · BA · Class of 2027', time: '—', desc: 'Foundation: vocal music, music theory; guzheng and piano study.' }
          ]
        },
        {
          heading: 'Featured Projects',
          items: [
            { title: 'AI Product Experience & Needs Analysis', sub: 'Personal experience analysis', time: 'Ongoing', desc: 'Documenting issues, scenarios and impacts across models; organizing experience observations.' },
            { title: 'AIGC Mini-Drama Experiment', sub: 'Personal unpublished experiment', time: 'Personal project', desc: 'Multi-tool creation of a one-minute-plus episode: script, storyboard, assets and editing.' },
            { title: 'Personal Douyin Music Account', sub: '0 to 1', time: 'Ongoing', desc: '28 posts, 89 followers; handled positioning, production, publishing and data observation.' },
            { title: 'Personal Portfolio Website', sub: 'Personal digital project', time: 'Recent', desc: 'GitHub for code, Netlify for deployment, AI-assisted, continuously iterated.' }
          ]
        },
        {
          heading: 'Additional Experience',
          items: [
            { title: 'Threads / Coffee Reselling / Livestream / Show Planning', sub: '', time: '', desc: 'Cross-platform content, basic sales and customer communication, live expression, show planning and rehearsal coordination.' }
          ]
        }
      ]
    },

    categories: [
      { key: 'ai-product', no: '01', name: 'AI Product Experience & Research', en: 'AI Product Experience & Research', desc: 'Observations of product features, user needs and usability from a long-term user perspective.' },
      { key: 'aigc', no: '02', name: 'AIGC Content Creation', en: 'AIGC Content Creation', desc: 'Content experiments and creative workflows built with multiple AI tools.' },
      { key: 'content-social', no: '03', name: 'Content & Social Media Operations', en: 'Content & Social Media Operations', desc: 'Personal account practice from positioning and production to publishing and data observation.' },
      { key: 'website', no: '04', name: 'Digital Project Practice', en: 'Digital Project Practice', desc: 'Planning, building, deploying and iterating my portfolio website.' },
      { key: 'creative', no: '05', name: 'Creative Planning & Execution', en: 'Creative Planning & Execution', desc: 'Hands-on experience in sales, livestream and show arrangement.' }
    ],

    projects: [
      {
        id: 'ai-product-experience',
        category: 'ai-product',
        no: '01',
        featured: true,
        badge: ['Personal experience analysis', 'Ongoing'],
        title: 'AI Product Experience & Needs Analysis',
        subtitle: 'Observing usability issues, user impact and improvements through long-term real use.',
        cover: '',
        stats: null,
        sections: [
          { heading: 'Background', body: [
            'Long-term experience with AI interactive text games, AI conversation products and general AI assistants, focusing on real-use performance. Tools used include ChatGPT, DeepSeek, Gemini and Grok.'
          ]},
          { heading: 'Key observations', body: [
            'Memory loss in long conversations; weak character consistency; disjointed context and plot logic; unstable generation quality; users needing repeated corrections to get expected results.'
          ]},
          { heading: 'Practice', body: [
            'Recording issues in real use, observing when they occur and analyzing their impact; trying to improve the experience through added context and adjusted interaction, and considering possible product-level improvements.'
          ]},
          { heading: 'Result & presentation', body: [
            'A continuous record of observations and issue categories — personal experience analysis, not a formal commercial project or product development.',
            'This is being developed into a structured experience report, with a suggested structure: user scenario → issue reproduction → issue categories → user impact → improvement suggestions.'
          ]}
        ],
        evidence: [],
        evidenceNote: 'Planned: product screenshots, issue logs, experience report, improvement suggestions.',
        disclaimer: 'Note: This is personal product experience analysis — not professional product testing work, nor AI product development.'
      },
      {
        id: 'aigc-mini-drama',
        category: 'aigc',
        no: '02',
        featured: true,
        badge: ['Personal experiment', 'Multi-tool'],
        title: 'AIGC Mini-Drama Experiment',
        subtitle: 'Coordinating multiple AI tools to attempt a short drama episode of just over a minute.',
        cover: '',
        stats: null,
        sections: [
          { heading: 'Background & tools', body: [
            'An attempt to produce a one-minute-plus mini-drama with AI tools. ChatGPT for script, character design, storyboard and images; Doubao for video; CapCut for editing.'
          ]},
          { heading: 'Practice', body: [
            'Script planning and writing, character design, scene design, storyboard, image generation, video generation, editing and integration, with attempts at character and scene consistency.'
          ]},
          { heading: 'Status', body: [
            'A personal experimental work, not yet published. The focus is on AI tool application, content production workflow and multi-tool collaboration.'
          ]}
        ],
        evidence: [],
        evidenceNote: 'Suggested display: script excerpt, character sheets, scene images, storyboard, key frames, final video. Pending confirmation before publishing.',
        disclaimer: 'Note: This is a personal AIGC experiment, unpublished — not a commercial or client project.'
      },
      {
        id: 'douyin-music-account',
        category: 'content-social',
        no: '03',
        featured: true,
        badge: ['Personal account', '0 to 1'],
        title: 'Personal Douyin Music Account',
        subtitle: 'Independently completing a music account from positioning and production to publishing and data observation.',
        cover: '',
        stats: [
          { value: '28', label: 'Posts' },
          { value: '89', label: 'Followers' },
          { value: '9,897', label: 'Top views' },
          { value: '471', label: 'Top likes' }
        ],
        statsNote: 'Top views and top likes are from the same post.',
        sections: [
          { heading: 'Positioning', body: [
            'A personal content account built from zero to one. Content includes Chinese, English and Korean covers, a cappella, backed performances and one-take videos.'
          ]},
          { heading: 'Specific work', body: [
            'Account positioning, song selection, song learning, recording, audio track adjustment, cover design, copywriting, publishing and basic data observation.'
          ]},
          { heading: 'Reflection', body: [
            'Song selection needs stronger alignment with platform trends; video length and completion rate deserve further study; singing and content quality have room to improve; different filming and production methods need more data to verify.'
          ]}
        ],
        evidence: [],
        evidenceNote: 'Suggested display: account homepage screenshot, 3–5 representative works, data screenshots, production process. Pending confirmation.',
        disclaimer: 'Note: This is a personal account practice — not a mature commercial account, and no growth results are exaggerated.'
      },
      {
        id: 'portfolio-website',
        category: 'website',
        no: '04',
        featured: true,
        badge: ['Personal project', 'AI-assisted'],
        title: 'Personal Portfolio Website',
        subtitle: 'Independently building my portfolio site from positioning and structure to deployment and iteration.',
        cover: '',
        stats: null,
        sections: [
          { heading: 'Background', body: [
            'To present my experience, skills and projects for job applications, I independently built a portfolio site using WorkBuddy, GitHub, Netlify, AI coding tools, plus HTML, CSS and JavaScript.'
          ]},
          { heading: 'Practice', body: [
            'Defined the site positioning and information structure; planned home, about, résumé, portfolio and contact; took part in layout and visual design; used GitHub for the repository and Netlify for deployment; used AI coding tools to assist edits; iterated based on real mobile browsing.'
          ]},
          { heading: 'Current status', body: [
            'The basic site is built and deployed online; I am now refining page design, personal information, contact details and project material.'
          ]}
        ],
        evidence: [],
        evidenceNote: 'Suggested display: homepage / mobile / desktop screenshots, GitHub repo and Netlify deployment screenshots, iteration process.',
        disclaimer: 'Note: This is a personal practice project — not a commercial web development project, nor professional software engineering experience.'
      },

      {
        id: 'threads-account',
        category: 'content-social',
        no: '05',
        featured: false,
        badge: ['Additional', 'Cross-platform'],
        title: 'Threads Content Operations',
        subtitle: 'Months of consistent posting and interaction, observing feedback across expressions.',
        cover: '',
        stats: [
          { value: '8,000+', label: 'Cumulative views' },
          { value: '5', label: 'Followers' }
        ],
        statsNote: 'These are cumulative views, not last-30-days data.',
        sections: [
          { heading: 'Content & work', body: [
            'Ran a Threads account for several months with Chinese life reflections, emotional expression and interest-based content. Observed feedback through posting and active interaction, building basic cross-platform content operations experience.'
          ]}
        ],
        evidence: [],
        evidenceNote: '',
        disclaimer: 'Data note: 8,000+ cumulative views, not last-30-days data.'
      },
      {
        id: 'coffee-microbusiness',
        category: 'creative',
        no: '06',
        featured: false,
        badge: ['Additional', 'During school'],
        title: 'Coffee Reselling Practice',
        subtitle: 'A small sales practice from promotion to after-sales.',
        cover: '',
        stats: null,
        sections: [
          { heading: 'Background & practice', body: [
            'During my freshman winter break I took part in reselling a small coffee brand for about 2–3 months, promoting and communicating with customers through Douyin, Xiaohongshu and Kuaishou, and taking part in acquisition, sales, order processing, packing, shipping and after-sales.'
          ]},
          { heading: 'Focus', body: [
            'The focus is self-directed execution, customer communication and basic sales practice.'
          ]}
        ],
        evidence: [],
        evidenceNote: '',
        disclaimer: ''
      },
      {
        id: 'talent-livestream',
        category: 'creative',
        no: '07',
        featured: false,
        badge: ['Additional', 'Live expression'],
        title: 'Talent Livestream Practice',
        subtitle: 'A singing-focused livestream practice that built expression and real-time interaction.',
        cover: '',
        stats: null,
        sections: [
          { heading: 'Background & practice', body: [
            'During my sophomore summer break I ran a talent livestream for about a month, mainly singing with occasional chat, building experience in live expression, content presentation and real-time interaction.'
          ]}
        ],
        evidence: [],
        evidenceNote: '',
        disclaimer: ''
      },
      {
        id: 'new-year-show-director',
        category: 'creative',
        no: '08',
        featured: false,
        badge: ['Additional', 'Organization'],
        title: 'Show Planning & Execution',
        subtitle: 'Twice involved in planning and organizing a single gala performance.',
        cover: '',
        stats: null,
        sections: [
          { heading: 'Background & practice', body: [
            'In high school I twice took part in planning and organizing a New Year gala performance, handling the creation and adaptation of a single piece and coordinating rehearsals, building basic planning, communication and execution experience.'
          ]},
          { heading: 'Scope', body: [
            'My responsibility was a single performance — not the director of the entire gala.'
          ]}
        ],
        evidence: [],
        evidenceNote: '',
        disclaimer: 'Note: This is planning and rehearsal coordination for a single performance, not the whole gala.'
      }
    ],

    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk',
      intro: 'The details below appear only once confirmed as publishable. Fields without information will not be shown.',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
      resumePdf: '',
      labels: {
        email: 'Email',
        phone: 'Phone',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        resume: 'Résumé PDF'
      },
      privacyNote: 'Unconfirmed contact details and private information are not published; the résumé download appears only after the PDF is uploaded.'
    },

    footer: {
      tagline: 'AI Product Operations · Content Creator',
      note: 'All content is based on information I have confirmed; missing material is shown as placeholders.',
      backToTop: 'Back to top'
    }
  }
};
