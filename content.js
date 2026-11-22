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
    seoDesc: '张楠（Rae）个人求职作品集：AI 产品运营 / AI 运营 / AI 内容运营方向，涵盖 AI 产品体验研究、AIGC 内容创作、个人内容账号运营与作品集网站搭建。',

    nav: [
      { id: 'home', label: '首页' },
      { id: 'about', label: '关于我' },
      { id: 'portfolio', label: '作品' },
      { id: 'contact', label: '联系' }
    ],

    ui: {
      viewWork: '查看作品',
      aboutMe: '了解我',
      downloadResume: '下载简历',
      contactMe: '联系我',
      readMore: '查看详情',
      backHome: '返回首页',
      prevProject: '上一个项目',
      nextProject: '下一个项目',
      placeholder: '素材待补充',
      featured: '重点项目',
      additional: '补充经历',
      situation: 'Situation · 情景',
      task: 'Task · 任务',
      action: 'Action · 行动',
      result: 'Result · 结果',
      oneLine: '一句话总结',
      materials: '素材需求',
      seeking: '求职方向',
      location: '求职城市',
      availability: '求职类型',
      projectType: '项目类型'
    },

    hero: {
      eyebrow: '个人求职作品集 · 2027 届',
      name: '张楠',
      nameEn: 'Rae',
      tagline: '在内容创作与 AI 工具之间，探索产品与人的连接。',
      role: 'AI 产品运营 / AI 运营 / AI 内容运营',
      intro: '音乐学背景的内容创作者，长期探索 AI 产品体验、数字内容创作与 AI 工具应用。\n关注真实用户需求，习惯从实际使用场景中发现问题、整理体验，并思考产品和内容可以如何改进。',
      seeking: ['AI 产品运营', 'AI 运营', 'AI 内容运营'],
      location: '苏州优先 · 也考虑上海 / 杭州 / 深圳 / 北京 / 广州 / 长沙',
      availability: '实习 / 校招 / 全职',
      photo: 'portrait.jpg',
      photoPlaceholder: '正面证件照位置',
      photoHint: '照片待上传'
    },

    about: {
      eyebrow: '关于我',
      title: '在内容创作与 AI 工具之间，找到自己的位置',
      introTitle: '个人介绍',
      intro: [
        '我叫张楠（Rae），是一名音乐学专业的本科毕业生。',
        '音乐学习让我对声音、节奏、情绪表达和视觉呈现保持敏感，也让我逐渐意识到，内容不仅是信息的传递，也是一种连接人与人的方式。',
        '过去一段时间，我持续接触不同类型的 AI 产品，并尝试将 AI 工具应用于内容创作、图片生成、视频制作和个人项目。',
        '相比单纯关注工具能够生成什么，我更感兴趣的是：用户为什么需要它？在实际使用中遇到了什么问题？怎样的产品体验才能让用户愿意持续使用？',
        '我也通过个人音乐账号、AI 漫剧实验和个人网站搭建，将这些兴趣转化为具体实践。',
        '目前，我希望向 AI 产品运营、AI 运营和 AI 内容运营方向发展，将内容理解能力、用户视角与 AI 工具应用结合起来。'
      ],
      experienceTitle: '实践经历',
      experiences: [
        {
          title: '个人音乐账号运营',
          paragraphs: [
            '独立运营个人抖音音乐账号，从账号定位、选歌、歌曲学习到录制、后期处理、封面文案和内容发布，参与完整的内容生产流程。',
            '在持续更新的过程中，我开始关注不同歌曲、演唱方式和视频呈现形式带来的反馈，也逐渐意识到内容创作不仅需要表达，还需要理解平台和受众。'
          ]
        },
        {
          title: 'AI 产品体验',
          paragraphs: [
            '长期使用 ChatGPT、DeepSeek、Gemini、Grok 等 AI 产品，尤其关注长期对话中的记忆、上下文衔接、内容生成质量和交互体验。',
            '在实际使用中，我会主动留意产品的问题，并思考这些问题对用户体验的影响，以及可能的改进方式。'
          ]
        },
        {
          title: 'AI 内容创作实验',
          paragraphs: [
            '尝试使用 ChatGPT、豆包和剪映完成 AI 漫剧创作，从剧本、人物设定、场景设计到分镜、图片生成和视频剪辑，探索不同 AI 工具在数字内容生产中的协作方式。'
          ]
        },
        {
          title: '个人网站搭建',
          paragraphs: [
            '为展示个人项目与求职能力，独立推进个人作品集网站搭建。',
            '使用 GitHub 管理代码，通过 Netlify 部署网站，并借助 AI 编程工具辅助开发、调整页面结构和优化用户体验。'
          ]
        }
      ]
    },

    competencies: {
      eyebrow: '个人优势',
      title: '我如何观察、创作与推进',
      intro: '相比罗列形容词，这里用具体的实践方式说明我的能力。',
      items: [
        {
          no: '01',
          title: 'AI 产品体验与用户洞察',
          enTitle: 'AI Product Experience & User Insight',
          desc: '长期使用多种 AI 产品，能够从真实使用场景出发观察产品表现。关注用户需求、交互逻辑、长期记忆、上下文衔接和内容生成质量，习惯记录使用问题，并思考其对用户体验的影响。'
        },
        {
          no: '02',
          title: 'AI 工具应用与自主学习',
          enTitle: 'AI Tool Application & Self-directed Learning',
          desc: '主动探索不同 AI 工具的功能和适用场景，并将其应用于信息整理、创意构思、文案辅助、图片生成、视频制作和网站搭建。'
        },
        {
          no: '03',
          title: '内容策划与创作',
          enTitle: 'Content Planning & Creation',
          desc: '具备个人账号运营和数字内容创作实践，能够参与选题、内容定位、脚本构思、录制、剪辑、视觉呈现和发布等环节。'
        },
        {
          no: '04',
          title: '用户视角与内容敏感度',
          enTitle: 'User Perspective & Content Sensitivity',
          desc: '关注用户对内容和产品的真实反应，重视内容表达、情绪价值、互动体验和信息传递效果。'
        },
        {
          no: '05',
          title: '创意表达与跨领域整合',
          enTitle: 'Creative Thinking & Cross-disciplinary Integration',
          desc: '音乐专业背景带来审美、节奏、声音和表达方面的训练。能够将音乐、文字、视觉内容与 AI 工具结合，探索不同形式的数字内容表达。'
        },
        {
          no: '06',
          title: '项目推进与执行',
          enTitle: 'Project Ownership & Execution',
          desc: '能够围绕个人目标主动学习新工具，并将学习转化为具体项目实践。从内容创作实验到个人网站搭建，具有自主推进、发现问题和持续迭代的经验。'
        }
      ]
    },

    skills: {
      eyebrow: '工具与技能',
      title: '工具服务于任务',
      intro: '按用途分类，如实描述使用程度；标注为辅助或基础的是仍在积累中的能力。',
      groups: [
        {
          title: 'AI 对话与研究',
          tools: ['ChatGPT', 'DeepSeek', 'Gemini', 'Grok', '豆包', '通义千问'],
          usage: '信息整理、内容辅助、问题分析、创意构思与产品体验'
        },
        {
          title: 'AI 内容生产',
          tools: ['ChatGPT', '豆包', '即梦', '剪映'],
          usage: '剧本构思、人物设定、图片生成、视频生成与剪辑'
        },
        {
          title: 'AI 编程与开发辅助',
          tools: ['WorkBuddy', 'Claude Code', 'Codex'],
          usage: '辅助理解代码、修改网页、整理需求与推进网站迭代（辅助性质，非专业开发）'
        },
        {
          title: '网站搭建与代码管理',
          tools: ['GitHub', 'Netlify', 'HTML', 'CSS', 'JavaScript'],
          usage: '用 GitHub 管理代码、用 Netlify 部署网站；HTML / CSS / JavaScript 为网站搭建中的基础应用与学习实践，非专业前端开发能力'
        }
      ],
      note: '说明：PS、Excel、PPT 等工具目前不熟练；英语、韩语无正式成绩支持，不标注等级或熟练程度。'
    },

    categories: [
      { key: 'ai-product', no: '01', name: 'AI 产品体验与研究', en: 'AI Product Experience & Research', desc: '作为长期用户，对产品功能、用户需求与体验问题的观察。' },
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
        type: '个人体验研究 / 产品观察',
        badge: ['个人体验研究', '产品观察'],
        title: 'AI 产品体验与用户需求分析',
        subtitle: '从长期真实使用出发，将 AI 产品体验转化为可观察的问题与优化思考。',
        oneLine: '从长期真实使用出发，将 AI 产品体验转化为可观察的问题与优化思考。',
        cover: '',
        sections: [
          { key: 'situation', body: [
            '长期使用 AI 互动文字游戏和通用 AI 助手，在持续使用过程中，我发现部分 AI 产品在长对话场景下容易出现记忆丢失、上下文衔接不稳定和内容逻辑混乱等问题。'
          ]},
          { key: 'task', body: [
            '希望从真实用户的角度记录这些问题，理解它们对使用体验的影响，并探索可能的产品优化方向。'
          ]},
          { key: 'action', body: [
            '长期体验 ChatGPT、DeepSeek、Gemini、Grok 等产品。',
            '观察不同产品的交互方式与内容生成表现。',
            '记录记忆丢失、角色偏离和逻辑不一致等问题。',
            '在实际使用中尝试修正问题。',
            '从用户需求出发思考可能的优化方式。'
          ]},
          { key: 'result', body: [
            '形成了对 AI 产品长期使用体验的持续观察，积累了关于记忆能力、交互一致性和用户持续使用需求的具体问题记录。',
            '目前正在进一步整理为结构化的产品体验分析报告。'
          ]}
        ],
        materials: 'AI 产品界面截图、真实问题记录、产品体验分析报告、优化建议。',
        evidence: [],
        evidenceNote: '素材待本人确认后可公开，不使用 AI 生成的假截图冒充真实产品界面。',
        disclaimer: '说明：本项目为个人体验研究 / 产品观察，不是正式商业产品测试或产品开发项目。'
      },
      {
        id: 'aigc-mini-drama',
        category: 'aigc',
        no: '02',
        featured: true,
        type: 'AIGC 内容创作 / 多工具协作',
        badge: ['AIGC 创作', '多工具协作'],
        title: 'AI 漫剧创作实验',
        subtitle: '通过多种 AI 工具协作，完成从创意构思到视频成片的内容生产实验。',
        oneLine: '通过多种 AI 工具协作，完成从创意构思到视频成片的内容生产实验。',
        cover: 'comic-storyboard.jpg',
        evidence: [
          { type: 'video', src: 'comic-episode.mp4', poster: 'comic-cover.jpg', caption: 'AI 漫剧成片片段（约 1 分钟，个人实验作品）' },
          { type: 'image', src: 'comic-storyboard.jpg', caption: '角色人物设定与场景分镜图' }
        ],
        sections: [
          { key: 'situation', body: [
            '希望探索 AI 工具在数字内容生产中的应用，尝试通过多个 AI 工具完成一集完整的短篇漫剧。'
          ]},
          { key: 'task', body: [
            '尝试完成从剧本构思到人物设定、场景设计、分镜、图片生成和视频剪辑的完整创作流程。'
          ]},
          { key: 'action', body: [
            '使用 ChatGPT 辅助剧本、人物设定和分镜制作。',
            '使用 ChatGPT 生成图片素材。',
            '使用豆包生成视频片段。',
            '使用剪映进行后期剪辑。',
            '尝试解决人物形象与场景一致性问题。',
            '整合不同工具的输出，形成完整视频。'
          ]},
          { key: 'result', body: [
            '完成一集一分多钟的 AI 漫剧实验作品，形成了剧本、人物设定、场景、分镜和视频等完整创作素材。',
            '作品尚未公开发布，仍有较大优化空间。'
          ]}
        ],
        materials: '完整剧本、人物设定图、场景图、分镜图、关键帧、视频成片。',
        evidenceNote: '此处展示成片片段与角色设定/场景分镜图；作品尚未在公开平台发布，剧本、场景图、关键帧等素材待补充。',
        disclaimer: '说明：这是个人 AIGC 创作实验，尚未公开发布，不是商业交付或客户项目。'
      },
      {
        id: 'douyin-music-account',
        category: 'content-social',
        no: '03',
        featured: true,
        type: '个人账号运营 / 数字内容创作',
        badge: ['个人账号', '数字内容创作'],
        title: '个人抖音音乐账号运营',
        subtitle: '独立完成个人音乐账号从定位、制作到发布的完整内容运营流程。',
        oneLine: '独立完成个人音乐账号从定位、制作到发布的完整内容运营流程。',
        cover: 'douyin-qr.jpg',
        evidence: [
          { type: 'image', src: 'douyin-qr.jpg', caption: '抖音账号主页二维码（@Raela，抖音号 28661267486）' }
        ],
        stats: [
          { value: '28', label: '发布作品' },
          { value: '89', label: '粉丝' },
          { value: '9,897', label: '单条最高播放' },
          { value: '471', label: '单条最高点赞' }
        ],
        statsNote: '最高播放与最高点赞来自同一条作品。',
        sections: [
          { key: 'situation', body: [
            '出于对音乐和内容创作的兴趣，开始独立运营个人抖音音乐账号，希望通过持续发布翻唱作品探索个人表达和内容呈现方式。'
          ]},
          { key: 'task', body: [
            '独立完成账号从定位到内容发布的完整流程，并通过持续观察内容反馈了解作品表现。'
          ]},
          { key: 'action', body: [
            '确定账号内容方向。',
            '选择中文、英文和韩文歌曲。',
            '学习歌曲并准备演唱。',
            '完成清唱、伴奏及一镜到底等形式的录制。',
            '进行基础音轨调整和后期处理。',
            '制作封面与发布文案。',
            '发布作品并观察基础数据。'
          ]},
          { key: 'result', body: [
            '截至目前，累计发布 28 条作品，账号粉丝 89 人。',
            '单条最高播放量为 9,897，单条最高点赞量为 471，两项数据来自同一条作品。',
            '通过持续创作，积累了独立内容生产、账号维护和基础数据观察经验。'
          ]}
        ],
        materials: '账号主页截图、3—5 条代表性作品、作品数据截图、录制和制作过程照片。',
        evidenceNote: '此处展示账号主页二维码，扫码可查看账号与代表作品；数据截图等素材待补充，不使用假截图冒充真实数据。',
        disclaimer: '说明：这是个人账号实践，不包装成成熟商业账号，也不夸大增长成绩。'
      },
      {
        id: 'portfolio-website',
        category: 'website',
        no: '04',
        featured: true,
        type: '个人数字项目 / AI 辅助开发',
        badge: ['个人数字项目', 'AI 辅助开发'],
        title: '个人作品集网站搭建',
        subtitle: '将个人求职需求转化为实际数字项目，完成网站搭建、代码管理与线上部署。',
        oneLine: '将个人求职需求转化为实际数字项目，完成网站搭建、代码管理与线上部署。',
        cover: '',
        sections: [
          { key: 'situation', body: [
            '为了更系统地展示个人经历、项目成果和求职能力，希望建立一个可以持续更新的个人作品集网站。'
          ]},
          { key: 'task', body: [
            '从网站结构、内容规划到页面搭建和线上部署，完成个人作品集网站的基础建设。'
          ]},
          { key: 'action', body: [
            '梳理个人网站的定位与展示需求。',
            '规划首页、About、Portfolio、Contact 等页面。',
            '参与页面视觉风格与信息层级设计。',
            '使用 GitHub 管理代码仓库。',
            '使用 Netlify 部署网站。',
            '借助 AI 编程工具辅助代码修改。',
            '根据实际浏览效果持续调整页面布局与内容。'
          ]},
          { key: 'result', body: [
            '已完成个人作品集网站的基础搭建，并成功部署线上版本。',
            '目前正在持续完善个人介绍、项目素材、联系方式及移动端视觉体验。'
          ]}
        ],
        materials: '网站首页截图、手机端与桌面端页面截图、GitHub 仓库截图、Netlify 部署截图、网站迭代过程。',
        evidence: [],
        evidenceNote: '素材待补充后可展示。',
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
        sections: [
          { key: 'result', body: [
            '独立运营 Threads 账号数月，发布中文生活感悟、情绪表达及兴趣相关内容，累计浏览量 8,000+。',
            '通过持续发布和主动互动，观察不同内容表达方式的反馈，积累基础跨平台内容运营经验。'
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
        sections: [
          { key: 'result', body: [
            '大学期间参与小品牌咖啡代理，通过抖音、小红书和快手进行产品推广，参与客户沟通、订单处理、打包发货和售后服务。'
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
        title: '才艺直播',
        subtitle: '以唱歌为主的直播实践，锻炼现场表达与实时互动。',
        cover: '',
        sections: [
          { key: 'result', body: [
            '曾进行约一个月的才艺直播，以唱歌为主要内容，积累直播表达、内容呈现和实时互动经验。'
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
        sections: [
          { key: 'result', body: [
            '高中期间两次参与元旦晚会单个节目的策划与排练协调，负责节目创意、改编和排练执行。'
          ]}
        ],
        evidence: [],
        evidenceNote: '',
        disclaimer: '说明：这是单个节目的策划与排练协调，不是整场晚会总导演。'
      }
    ],

    contact: {
      eyebrow: '联系我',
      title: '期待与你交流。',
      intro: '无论是工作机会、项目合作，还是 AI 产品与内容创作方面的交流，都欢迎联系我。',
      email: '1604894945@qq.com',
      phone: '',
      github: 'https://github.com/rae20130806-source/rae',
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
      { id: 'portfolio', label: 'Work' },
      { id: 'contact', label: 'Contact' }
    ],

    ui: {
      viewWork: 'Explore My Work',
      aboutMe: 'About Me',
      downloadResume: 'Download Resume',
      contactMe: 'Contact Me',
      readMore: 'View project',
      backHome: 'Back to home',
      prevProject: 'Previous',
      nextProject: 'Next',
      placeholder: 'Visual pending',
      featured: 'Featured projects',
      additional: 'Additional experience',
      situation: 'Situation',
      task: 'Task',
      action: 'Action',
      result: 'Result',
      oneLine: 'In one line',
      materials: 'Material to include',
      seeking: 'Seeking',
      location: 'Location',
      availability: 'Open to',
      projectType: 'Project type'
    },

    hero: {
      eyebrow: 'Personal Portfolio · Class of 2027',
      name: 'Zhang Nan',
      nameEn: 'Rae',
      tagline: 'Exploring the connection between people, products, and AI through content creation.',
      role: 'AI Product Operations / AI Operations / AI Content Operations',
      intro: 'A content creator with a background in music, exploring AI product experiences, digital content creation, and practical AI applications.\nInterested in real user needs, I observe products through hands-on experience, identify usability issues, and explore ways to improve products and content.',
      seeking: ['AI Product Operations', 'AI Operations', 'AI Content Operations'],
      location: 'Suzhou preferred · also open to Shanghai / Hangzhou / Shenzhen / Beijing / Guangzhou / Changsha',
      availability: 'Internships / campus hiring / full-time',
      photo: 'portrait.jpg',
      photoPlaceholder: 'Portrait photo space',
      photoHint: 'Photo to be added'
    },

    about: {
      eyebrow: 'About me',
      title: 'Finding my place between content creation and AI tools',
      introTitle: 'Personal Introduction',
      intro: [
        'My name is Rae Zhang, and I have an academic background in music.',
        'Studying music has developed my sensitivity to sound, rhythm, emotional expression, and visual presentation. It has also shaped my understanding of content as more than information delivery — it is a way to connect with people.',
        'Over time, I have explored different AI products and experimented with applying AI tools to content creation, image generation, video production, and personal projects.',
        'Beyond what these tools can generate, I am particularly interested in why people use them, what challenges they encounter, and what makes a product experience valuable enough for users to return.',
        'I have turned these interests into practical experiments through my personal music account, an AI-generated comic project, and the development of my own portfolio website.',
        'I am now looking to develop my career in AI Product Operations, AI Operations, and AI Content Operations, combining content understanding, user perspectives, and practical AI applications.'
      ],
      experienceTitle: 'Experience',
      experiences: [
        {
          title: 'Personal Music Content Account',
          paragraphs: [
            'Independently managed a personal music account on Douyin, covering account positioning, song selection, practice, recording, basic audio editing, cover design, copywriting, and publishing.',
            'Through continuous content creation, I began observing how different songs, performance styles, and presentation formats received feedback. This experience helped me understand that content creation requires not only expression, but also an awareness of platforms and audiences.'
          ]
        },
        {
          title: 'AI Product Experience',
          paragraphs: [
            'A long-term user of AI products such as ChatGPT, DeepSeek, Gemini, and Grok, with particular interest in conversational memory, contextual continuity, content quality, and interaction design.',
            'Through hands-on use, I observe product limitations, consider their impact on user experience, and explore potential improvements.'
          ]
        },
        {
          title: 'AI Content Creation Experiment',
          paragraphs: [
            'Experimented with AI-assisted comic production using ChatGPT, Doubao, and CapCut, exploring the workflow from scriptwriting and character design to scene creation, storyboarding, image generation, and video editing.'
          ]
        },
        {
          title: 'Personal Website Development',
          paragraphs: [
            'Independently developed a personal portfolio website to present my projects and professional capabilities.',
            'Used GitHub for code management and Netlify for deployment, while exploring AI-assisted coding tools to refine the website structure, layout, and user experience.'
          ]
        }
      ]
    },

    competencies: {
      eyebrow: 'Core Strengths',
      title: 'How I observe, create and follow through',
      intro: 'Rather than listing adjectives, here is how I work in concrete terms.',
      items: [
        {
          no: '01',
          title: 'AI Product Experience & User Insight',
          enTitle: '',
          desc: 'Long-term experience with multiple AI products, with the ability to observe product performance through real usage scenarios. Interested in user needs, interaction logic, conversational memory, contextual continuity, and content quality. Able to identify usability issues and consider their impact on the user experience.'
        },
        {
          no: '02',
          title: 'AI Tool Application & Self-directed Learning',
          enTitle: '',
          desc: 'Proactively explore AI tools and their practical applications, using them for information organization, ideation, copywriting assistance, image generation, video production, and website development.'
        },
        {
          no: '03',
          title: 'Content Planning & Creation',
          enTitle: '',
          desc: 'Hands-on experience in personal content management and digital content creation, covering topic selection, content positioning, scripting, recording, editing, visual presentation, and publishing.'
        },
        {
          no: '04',
          title: 'User Perspective & Content Sensitivity',
          enTitle: '',
          desc: 'Pay attention to how users respond to content and products, with an interest in communication, emotional value, interaction, and the effectiveness of information delivery.'
        },
        {
          no: '05',
          title: 'Creative Thinking & Cross-disciplinary Integration',
          enTitle: '',
          desc: 'A background in music provides training in aesthetics, rhythm, sound, and expression. Able to combine music, writing, visual content, and AI tools to explore different forms of digital storytelling.'
        },
        {
          no: '06',
          title: 'Project Ownership & Execution',
          enTitle: '',
          desc: 'Able to independently learn new tools and turn that learning into practical projects. Experience in driving personal initiatives, identifying problems, and continuously improving outcomes through projects ranging from content experiments to website development.'
        }
      ]
    },

    skills: {
      eyebrow: 'Tools & Skills',
      title: 'Tools serve the task',
      intro: 'Grouped by purpose, with honest levels; items marked assistive or basic are still being developed.',
      groups: [
        {
          title: 'AI Conversation & Research',
          tools: ['ChatGPT', 'DeepSeek', 'Gemini', 'Grok', 'Doubao', 'Qianwen'],
          usage: 'Information organization, content assistance, problem analysis, ideation, and product experience'
        },
        {
          title: 'AI Content Production',
          tools: ['ChatGPT', 'Doubao', 'Jimeng', 'CapCut'],
          usage: 'Script planning, character design, image generation, video generation, and editing'
        },
        {
          title: 'AI Coding & Development Assistance',
          tools: ['WorkBuddy', 'Claude Code', 'Codex'],
          usage: 'Assisting with code understanding, page edits, requirement organizing and website iteration (assistive, not professional development)'
        },
        {
          title: 'Web Development & Code Management',
          tools: ['GitHub', 'Netlify', 'HTML', 'CSS', 'JavaScript'],
          usage: 'GitHub for code, Netlify for deployment; HTML/CSS/JavaScript are basic application and learning practice in site building, not professional front-end development'
        }
      ],
      note: 'Note: I am not yet proficient in Photoshop, Excel or PPT; English and Korean have no formal certification, so no levels are claimed.'
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
        type: 'Personal experience research / product observation',
        badge: ['Experience research', 'Product observation'],
        title: 'AI Product Experience & User Insight',
        subtitle: 'Turning real-world AI usage into actionable product observations and improvement ideas.',
        oneLine: 'Turning real-world AI usage into actionable product observations and improvement ideas.',
        cover: '',
        sections: [
          { key: 'situation', body: [
            'Through long-term use of AI interactive storytelling products and general-purpose AI assistants, I noticed recurring issues in extended conversations, including memory loss, inconsistent contextual continuity, and logical inconsistencies.'
          ]},
          { key: 'task', body: [
            'The goal was to document these issues from a real user’s perspective, understand their impact on the experience, and explore potential product improvements.'
          ]},
          { key: 'action', body: [
            'Used products including ChatGPT, DeepSeek, Gemini, and Grok.',
            'Observed differences in interaction and content generation.',
            'Identified issues involving memory loss, character inconsistency, and logical continuity.',
            'Tried different ways to correct issues during actual use.',
            'Considered potential improvements from the user’s perspective.'
          ]},
          { key: 'result', body: [
            'Developed an ongoing record of AI product experiences and accumulated observations concerning memory, interaction consistency, and long-term user needs.',
            'The observations are being developed into a structured product experience analysis report.'
          ]}
        ],
        materials: 'AI product interface screenshots, real issue logs, experience analysis report, and improvement suggestions.',
        evidence: [],
        evidenceNote: 'Material pending confirmation before publishing; no AI-generated fake screenshots will stand in for real product interfaces.',
        disclaimer: 'Note: This is personal experience research and product observation — not formal commercial product testing or product development.'
      },
      {
        id: 'aigc-mini-drama',
        category: 'aigc',
        no: '02',
        featured: true,
        type: 'AIGC content creation / multi-tool collaboration',
        badge: ['AIGC creation', 'Multi-tool'],
        title: 'AI-generated Comic Production Experiment',
        subtitle: 'An experiment in end-to-end digital content production through multi-tool AI collaboration.',
        oneLine: 'An experiment in end-to-end digital content production through multi-tool AI collaboration.',
        cover: 'comic-storyboard.jpg',
        evidence: [
          { type: 'video', src: 'comic-episode.mp4', poster: 'comic-cover.jpg', caption: 'AI comic episode excerpt (~1 min, personal experiment)' },
          { type: 'image', src: 'comic-storyboard.jpg', caption: 'Character design and scene storyboard sheets' }
        ],
        sections: [
          { key: 'situation', body: [
            'To explore the potential of AI in digital content production, I experimented with creating a short comic episode using multiple AI tools.'
          ]},
          { key: 'task', body: [
            'The goal was to experiment with the full creative workflow, from scriptwriting and character design to scene development, storyboarding, image generation, and video editing.'
          ]},
          { key: 'action', body: [
            'Used ChatGPT to assist with scriptwriting, character design, and storyboarding.',
            'Generated visual assets with ChatGPT.',
            'Created video clips using Doubao.',
            'Edited the footage with CapCut.',
            'Experimented with character and scene consistency.',
            'Combined outputs from different tools into a complete video.'
          ]},
          { key: 'result', body: [
            'Completed a short AI-generated comic episode lasting just over one minute, along with its script, character designs, scene assets, storyboards, and video.',
            'The project has not been publicly released and still has significant room for improvement.'
          ]}
        ],
        materials: 'Full script, character design sheets, scene images, storyboards, key frames, and final video.',
        evidenceNote: 'Shown here: an episode excerpt and the character design / scene storyboard sheets. The work has not been released publicly; script, scene images and key frames are still to be added.',
        disclaimer: 'Note: This is a personal AIGC experiment, not yet publicly released — not a commercial or client project.'
      },
      {
        id: 'douyin-music-account',
        category: 'content-social',
        no: '03',
        featured: true,
        type: 'Personal account operations / digital content creation',
        badge: ['Personal account', 'Digital content'],
        title: 'Personal Music Content Account',
        subtitle: 'Independently managed the full content workflow of a personal music account, from positioning to production and publishing.',
        oneLine: 'Independently managed the full content workflow of a personal music account, from positioning to production and publishing.',
        cover: 'douyin-qr.jpg',
        evidence: [
          { type: 'image', src: 'douyin-qr.jpg', caption: 'Douyin account QR code (@Raela, ID 28661267486)' }
        ],
        stats: [
          { value: '28', label: 'Published videos' },
          { value: '89', label: 'Followers' },
          { value: '9,897', label: 'Highest video views' },
          { value: '471', label: 'Highest likes' }
        ],
        statsNote: 'Top views and top likes are from the same video.',
        sections: [
          { key: 'situation', body: [
            'Driven by an interest in music and content creation, I started independently managing a personal Douyin music account to explore creative expression and different content formats through cover performances.'
          ]},
          { key: 'task', body: [
            'The goal was to independently manage the account from positioning to publishing and observe audience responses through ongoing content creation.'
          ]},
          { key: 'action', body: [
            'Defined the account’s content direction.',
            'Selected Chinese, English, and Korean songs.',
            'Practiced and prepared performances.',
            'Recorded a variety of formats, including a cappella, instrumental covers, and one-take videos.',
            'Performed basic audio adjustments and post-production.',
            'Created covers and publishing copy.',
            'Published content and monitored basic performance metrics.'
          ]},
          { key: 'result', body: [
            'To date, the account has published 28 videos and gained 89 followers.',
            'The highest-performing video received 9,897 views and 471 likes.',
            'Through consistent content creation, I gained hands-on experience in independent production, account management, and basic performance analysis.'
          ]}
        ],
        materials: 'Account homepage screenshot, 3–5 representative works, performance data screenshots, and production process photos.',
        evidenceNote: 'Shown here: the account homepage QR code — scan to view the account and featured videos. Data screenshots are to be added; no fake screenshots stand in for real data.',
        disclaimer: 'Note: This is a personal account practice — not a mature commercial account, and no growth results are exaggerated.'
      },
      {
        id: 'portfolio-website',
        category: 'website',
        no: '04',
        featured: true,
        type: 'Personal digital project / AI-assisted development',
        badge: ['Digital project', 'AI-assisted'],
        title: 'Personal Portfolio Website Development',
        subtitle: 'Turned a personal career goal into a practical digital project through website development, code management, and deployment.',
        oneLine: 'Turned a personal career goal into a practical digital project through website development, code management, and deployment.',
        cover: '',
        sections: [
          { key: 'situation', body: [
            'To present my background, projects, and professional capabilities in a more structured way, I decided to build a personal portfolio website that could evolve over time.'
          ]},
          { key: 'task', body: [
            'The goal was to establish a personal portfolio website, covering information architecture, content planning, page development, and online deployment.'
          ]},
          { key: 'action', body: [
            'Defined the website’s purpose and presentation requirements.',
            'Planned the Home, About, Portfolio, and Contact sections.',
            'Contributed to the visual direction and information hierarchy.',
            'Used GitHub for code repository management.',
            'Used Netlify for deployment.',
            'Explored AI coding tools to assist with code modifications.',
            'Iteratively improved the layout and content based on actual browsing experience.'
          ]},
          { key: 'result', body: [
            'Successfully established and deployed the initial version of a personal portfolio website.',
            'The website is currently being improved through updates to personal information, project materials, contact details, and mobile user experience.'
          ]}
        ],
        materials: 'Homepage screenshot, mobile and desktop page screenshots, GitHub repository screenshot, Netlify deployment screenshot, and iteration process.',
        evidence: [],
        evidenceNote: 'Material to be added as it becomes available.',
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
        sections: [
          { key: 'result', body: [
            'Independently managed a Threads account for several months, publishing Chinese-language reflections, personal thoughts, and interest-related content, with over 8,000 cumulative views.',
            'Through regular publishing and interaction, I observed audience responses to different content styles and gained basic cross-platform content experience.'
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
        sections: [
          { key: 'result', body: [
            'Participated in a small coffee brand’s distribution initiative during university, promoting products through Douyin, Xiaohongshu, and Kuaishou, while handling customer communication, order processing, packaging, shipping, and after-sales support.'
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
        title: 'Talent Livestream',
        subtitle: 'A singing-focused livestream practice that built expression and real-time interaction.',
        cover: '',
        sections: [
          { key: 'result', body: [
            'Conducted approximately one month of talent livestreaming, primarily featuring singing performances, gaining experience in live presentation and real-time audience interaction.'
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
        sections: [
          { key: 'result', body: [
            'Participated twice in planning and coordinating individual performances for high school New Year’s celebrations, contributing to creative concepts, adaptations, and rehearsals.'
          ]}
        ],
        evidence: [],
        evidenceNote: '',
        disclaimer: 'Note: This is planning and rehearsal coordination for a single performance, not the whole gala.'
      }
    ],

    contact: {
      eyebrow: 'Contact',
      title: 'Let’s Connect.',
      intro: 'Whether it’s a career opportunity, a project collaboration, or a conversation about AI products and content creation, I’d be happy to connect.',
      email: '1604894945@qq.com',
      phone: '',
      github: 'https://github.com/rae20130806-source/rae',
      linkedin: '',
      resumePdf: '',
      labels: {
        email: 'Email',
        phone: 'Phone',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        resume: 'Resume PDF'
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
