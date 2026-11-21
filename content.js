/*
 * Rae（张楠）求职作品集 — 唯一内容源文件
 * ---------------------------------------------------------------
 * 本文件是整站唯一需要修改的内容文件。所有文字都在这里，中英文各一套。
 * 修改任何介绍、项目、数据后，刷新页面即可生效。
 * 真实性红线：所有内容以本人确认的事实为准；缺失素材一律使用占位，
 * 不虚构数据、不夸大熟练度、不把个人实验包装成商业交付。
 */

window.SITE_DATA = {
  /* ============================================================
   * 中文
   * ============================================================ */
  zh: {
    langLabel: '中',
    siteName: 'Rae · 张楠',
    seoTitle: 'Rae 张楠 — Content Creator & AI Enthusiast｜求职作品集',
    seoDesc: '张楠（Rae）的个人求职作品集：AI 产品运营 / AI 运营方向，涵盖 AI 产品体验分析、AIGC 内容创作、内容与社媒运营、创意策划与执行。',

    nav: [
      { id: 'home', label: '首页' },
      { id: 'about', label: '关于' },
      { id: 'resume', label: '简历' },
      { id: 'portfolio', label: '作品集' },
      { id: 'contact', label: '联系' }
    ],

    ui: {
      viewAll: '查看全部作品',
      readMore: '查看项目详情',
      backHome: '返回首页',
      prevProject: '上一个项目',
      nextProject: '下一个项目',
      downloadResume: '下载简历',
      contactMe: '联系我',
      viewPortfolio: '查看作品集',
      placeholder: '素材待补充',
      personalNote: '个人记录',
      inProgress: '进行中',
      comingSoon: '待完成 · 预留位置'
    },

    hero: {
      eyebrow: '个人求职作品集 · 2027 届',
      name: '张楠',
      nameEn: 'Rae',
      role: 'Content Creator & AI Enthusiast',
      intro: '音乐学背景的内容创作者，长期探索 AI 工具与内容生产的结合，习惯从真实使用中观察产品细节与用户需求。',
      seekingLabel: '求职方向',
      seeking: ['AI 产品运营', 'AI 运营', 'AI 内容运营'],
      location: '苏州优先 · 也接受上海 / 杭州 / 深圳 / 北京 / 广州 / 长沙',
      availability: '接受实习、校招及全职岗位',
      photoPlaceholder: '本人正面照片待上传',
      photoHint: '此处预留个人证件照位置，未上传前使用中性占位'
    },

    about: {
      eyebrow: '关于我',
      title: '在内容创作与 AI 工具之间，找到自己的位置',
      paragraphs: [
        '我是张楠（Rae），吉首大学张家界学院音乐学专业本科在读，2027 届毕业生。专业基础包括声乐、音乐理论，以及古筝、钢琴的学习经历。',
        '我独立运营个人抖音音乐账号，从账号定位、选歌、录制到发布与数据观察，走完了从 0 到 1 的完整流程；同时是一名长期的 AI 产品用户，习惯在实际使用中记录体验问题、归纳需求并提出改进想法。',
        '我正在把内容创作经验与 AI 工具探索结合起来，面向 AI 产品运营 / AI 运营方向发展。我重视真实的用户视角、主动学习与持续复盘，不回避自己仍在成长的部分。'
      ],
      facts: [
        { k: '现居 / 意向城市', v: '苏州优先；接受上海、杭州、深圳、北京、广州、长沙' },
        { k: '求职类型', v: '实习 / 校招 / 全职' },
        { k: '教育背景', v: '吉首大学张家界学院 · 音乐学本科 · 2023.09—2027.06' }
      ]
    },

    resume: {
      eyebrow: '简历概览',
      title: '经历与能力一览',
      note: '完整 PDF 简历待放入本网站；未确认的手机号、邮箱不予公开。',
      sections: [
        {
          heading: '教育背景',
          items: [
            { title: '吉首大学张家界学院', sub: '音乐学 · 本科', time: '2023.09 — 2027.06', desc: '2027 届毕业生。专业基础：声乐、音乐理论；古筝、钢琴学习背景。' }
          ]
        },
        {
          heading: '项目与实践',
          items: [
            { title: 'AI 互动产品体验与需求分析', sub: '长期个人体验观察 · 非产品开发', time: '长期进行', desc: '多模型角色扮演与剧情互动，记录记忆、角色一致性、剧情逻辑等体验问题。' },
            { title: 'AI 漫剧个人实验', sub: '个人 AIGC 实验 · 未发布', time: '个人项目', desc: 'ChatGPT 生图 + 豆包生成视频 + 剪映剪辑，完成一集一分多钟短片。' },
            { title: '个人抖音音乐账号', sub: '独立运营 · 从 0 到 1', time: '持续运营', desc: '28 条作品，粉丝 89 人；独立完成定位、选歌、制作、发布与数据观察。' },
            { title: '咖啡微商代理 / 才艺直播 / 节目编导', sub: '创意策划与执行实践', time: '校园时期', desc: '获客销售、现场表达与互动、节目编排与排练协调等执行经历。' }
          ]
        },
        {
          heading: '技能与工具',
          items: [
            { title: '常用 AI 工具', sub: '', time: '', desc: 'ChatGPT、DeepSeek、豆包、Gemini' },
            { title: '偶尔使用', sub: '', time: '', desc: '即梦、Grok、千问、Chatbox' },
            { title: '内容与剪辑', sub: '', time: '', desc: '剪映（基础剪辑）；AI 图片与视频生成（个人实践）；拍摄经验来自个人短视频及课程小组视频' },
            { title: 'API 实践', sub: '', time: '', desc: '有 DeepSeek API 调用实践，具体操作过程与可展示内容待本人补充后呈现' }
          ]
        },
        {
          heading: '语言能力',
          items: [
            { title: '中文', sub: '母语', time: '', desc: '' },
            { title: '英语', sub: '按真实水平填写', time: '', desc: '待本人确认后如实描述，不夸大' }
          ]
        }
      ],
      skillNote: '说明：Photoshop、Excel、PPT 等尚不熟练；Agent、OpenClaw、Claude、Codex 等仅有有限了解或未充分实践，不标注为精通。'
    },

    categories: [
      { key: 'ai-product', no: '01', name: 'AI 产品体验与分析', en: 'AI Product Experience & Research', desc: '作为长期用户，对产品功能、用户需求与体验问题的观察与思考。' },
      { key: 'aigc', no: '02', name: 'AIGC 内容创作', en: 'AIGC Content Creation', desc: '使用多款 AI 工具协同完成的内容实验与创作流程。' },
      { key: 'content-social', no: '03', name: '内容与社媒运营', en: 'Content & Social Media Operations', desc: '个人账号从定位、制作到发布与数据观察的运营实践。' },
      { key: 'creative', no: '04', name: '创意策划与执行', en: 'Creative Projects & Business Execution', desc: '获客销售、直播互动、节目编排等落地执行经历。' }
    ],

    projects: [
      {
        id: 'ai-product-experience',
        category: 'ai-product',
        no: '01',
        featured: true,
        badge: ['长期个人体验观察', '非产品开发'],
        title: 'AI 互动产品体验与需求分析',
        subtitle: '从长期真实使用中，观察 AI 互动产品的问题、需求与改进方向。',
        cover: null,
        stats: null,
        sections: [
          { heading: '项目背景与目标', body: [
            '作为一名长期的 AI 产品用户，我持续体验 AI 互动文字游戏 / 模拟器，使用过 ChatGPT、DeepSeek、Grok、Gemini 等模型。我希望从真实用户的角度，观察产品功能、用户需求与体验问题。'
          ]},
          { heading: '我的职责', body: [
            '以用户视角记录问题、提出修正要求并归纳需求。这是个人用户体验与需求观察，并非产品团队角色，也不涉及产品开发。'
          ]},
          { heading: '行动与方法', body: [
            '在多款模型中反复进行角色扮演与剧情互动；在使用中主动指出问题并要求 AI 修正；同时关注情绪价值、恋爱 / 剧情互动需求，以及用户愿意持续使用的原因。'
          ]},
          { heading: '观察与发现', body: [
            '记忆能力不足；角色设定与人物性格容易偏离；剧情逻辑混乱；长期互动的一致性不足。'
          ]},
          { heading: '结果与证据', body: [
            '形成长期、连续的用户体验观察与问题归类，属于个人观察记录，不是商业成果或产品交付。'
          ]},
          { heading: '问题、反思与下一步', body: [
            'ChatGPT 通用 AI 助手深度体验报告尚待完成，此处预留位置；完成后可展示功能体验、典型任务测试、问题归类、竞品观察与优化建议。',
            '若在此呈现任何商业构想，均标注为个人构想、尚未开发、未经市场验证。'
          ]}
        ],
        evidence: [],
        evidenceNote: '体验记录、对话截图与问题归类素材待补充。',
        disclaimer: '重要说明：本项目为长期用户体验与需求观察，不是我开发了产品，也不是我设计或搭建了多模型 Agent 系统。'
      },
      {
        id: 'aigc-mini-drama',
        category: 'aigc',
        no: '02',
        featured: true,
        badge: ['个人 AIGC 实验', '未发布', '完成度自评 3/10'],
        title: 'AI 漫剧个人实验',
        subtitle: '用多款 AI 工具协同，尝试完成一集有完整流程的漫剧短片。',
        cover: null,
        stats: null,
        sections: [
          { heading: '项目背景与目标', body: [
            '我想探索 AI 工具协同能否完成一段漫剧短片，并尝试解决人物一致性与场景一致性这两个常见难题。'
          ]},
          { heading: '我的职责', body: [
            '独立完成剧本、分镜、人物设定、素材生成与剪辑，全部由 AI 工具辅助完成。'
          ]},
          { heading: '行动与方法', body: [
            '使用 ChatGPT 生成图片、豆包生成视频、剪映进行剪辑；在多工具之间协同，围绕人物与场景一致性反复生成与迭代。'
          ]},
          { heading: '成果', body: [
            '完成一集成片，时长一分多钟，包含完整剧本、人物设定图、场景图、分镜图与视频成片。'
          ]},
          { heading: '结果与证据', body: [
            '这是个人实验作品，完成度自评约 3/10。因效果未达预期且生成额度有限，尚未发布。关键帧、剧本、人物设定、场景图与分镜图素材待补充。'
          ]},
          { heading: '问题、反思与下一步', body: [
            '人物与场景的一致性较难保持稳定，生成额度与效果也构成限制。',
            '若成片不适合公开，将重点展示创作流程、关键帧、剧本与分镜。'
          ]}
        ],
        evidence: [],
        evidenceNote: '成片、剧本、人物设定图、场景图与分镜图待本人确认是否公开后补充。',
        disclaimer: '重要说明：这是个人 AIGC 实验 / 未发布作品，重点在创作流程、多工具协同、生成迭代与遇到的问题，不是商业交付或客户项目。'
      },
      {
        id: 'douyin-music-account',
        category: 'content-social',
        no: '03',
        featured: true,
        badge: ['个人账号', '独立运营', '从 0 到 1'],
        title: '个人抖音音乐账号',
        subtitle: '独立完成一个音乐账号从内容定位、制作到发布运营的全过程。',
        cover: null,
        stats: [
          { value: '28', label: '发布作品' },
          { value: '89', label: '粉丝' },
          { value: '9,897', label: '最高播放量' },
          { value: '471', label: '最高点赞' }
        ],
        statsNote: '最高播放量与最高点赞来自同一条作品。',
        sections: [
          { heading: '项目背景与目标', body: [
            '我独立运营个人抖音音乐账号，目标是完成从内容定位、制作到发布与运营的全流程实践。'
          ]},
          { heading: '我的职责', body: [
            '独立完成账号定位、选歌、竞品观察、歌曲学习、录制、音轨调整、封面与文案、发布及基础数据观察。'
          ]},
          { heading: '行动与方法', body: [
            '内容以歌曲翻唱为主，包含中文、英文和韩文歌曲，形式包括清唱、伴奏及一镜到底。曾尝试素颜直录与较精致妆造 / 后期处理，个别作品表现有差异。'
          ]},
          { heading: '结果与证据', body: [
            '共发布 28 条作品，粉丝 89 人；最高播放量 9,897，最高点赞 471，两项数据来自同一条作品。我持续关注播放量、点赞、评论与涨粉情况。代表作品与数据截图待补充。'
          ]},
          { heading: '问题、反思与下一步', body: [
            '选歌与趋势结合不足；视频时长可能影响完播；内容质量与演唱表现仍有提升空间。',
            '目前没有足够数据证明某种形式稳定优于其他形式，个别作品差异不能写成经过验证的普遍结论。后续将继续测试与观察，积累可验证的经验。'
          ]}
        ],
        evidence: [],
        evidenceNote: '代表作品 3—5 条及可用后台数据截图待本人确认后补充。',
        disclaimer: '重要说明：这是个人账号从 0 到 1 的内容定位、制作与运营实践，不是成熟商业账号或成功增长案例。'
      },
      {
        id: 'threads-account',
        category: 'content-social',
        no: '04',
        featured: false,
        badge: ['辅助经历', '海外社媒'],
        title: 'Threads 账号运营',
        subtitle: '数月持续发布与互动，观察什么样的内容更容易被看见。',
        cover: null,
        stats: [
          { value: '8,000+', label: '累计浏览量' },
          { value: '5', label: '粉丝' }
        ],
        statsNote: '以上为累计浏览量，不是近 30 天数据。',
        sections: [
          { heading: '背景与内容', body: [
            '运营 Threads 账号数月，内容以中文生活感悟、情绪表达和兴趣内容为主。'
          ]},
          { heading: '我的职责与行动', body: [
            '独立完成内容撰写与发布，并主动与其他创作者互动。'
          ]},
          { heading: '观察与结果', body: [
            '观察到有共鸣感、对读者有价值的内容更容易获得浏览或互动。运营数月，粉丝 5 人，累计浏览量 8,000+。'
          ]}
        ],
        evidence: [],
        evidenceNote: '账号与内容截图待本人确认后补充。',
        disclaimer: '数据口径：累计浏览量 8,000+，非近 30 天数据；不作为成熟的海外社媒运营案例。'
      },
      {
        id: 'coffee-microbusiness',
        category: 'creative',
        no: '05',
        featured: false,
        badge: ['辅助实践', '校园时期'],
        title: '咖啡微商代理',
        subtitle: '从引流到售后，独立跑通一次小型销售实践。',
        cover: null,
        stats: [
          { value: '2—3 个月', label: '经营时长' },
          { value: '十余盒', label: '销售数量' }
        ],
        statsNote: '无可用成交记录，营收、转化率与客户规模均不虚构。',
        sections: [
          { heading: '背景与目标', body: [
            '大一寒假期间经营约 2—3 个月，代理小品牌咖啡，尝试独立完成一次小型销售实践。'
          ]},
          { heading: '我的职责与行动', body: [
            '通过抖音、小红书、快手自行引流；独立完成获客、销售沟通、客服、订单处理、打包发货及售后。'
          ]},
          { heading: '结果', body: [
            '销售十余盒。'
          ]}
        ],
        evidence: [],
        evidenceNote: '无可用成交记录；如后续找到可展示记录，将在此补充。',
        disclaimer: '无可用成交记录，不编造营收、转化率或客户规模。'
      },
      {
        id: 'talent-livestream',
        category: 'creative',
        no: '06',
        featured: false,
        badge: ['辅助实践', '现场表达'],
        title: '才艺直播',
        subtitle: '以唱歌为主的直播实践，锻炼现场表达与节奏控制。',
        cover: null,
        stats: [
          { value: '约 1 个月', label: '持续时间' },
          { value: '约 4 小时', label: '每日时长' },
          { value: '≤ 10 人', label: '平均在线' },
          { value: '300 多元', label: '收入' }
        ],
        statsNote: '平均在线人数 10 人以内；不使用未经确认的场次或最高在线人数。',
        sections: [
          { heading: '背景与目标', body: [
            '大三暑假期间进行约一个月的才艺直播，每天约 4 小时，以唱歌为主、偶尔聊天。'
          ]},
          { heading: '我的职责与行动', body: [
            '独立完成内容安排、现场表达、与观众互动和节奏控制。'
          ]},
          { heading: '结果', body: [
            '平均在线人数 10 人以内，收入约 300 多元。'
          ]}
        ],
        evidence: [],
        evidenceNote: '如后续找到可展示的直播记录，将在此补充。',
        disclaimer: '不使用未经确认的场次或最高在线人数。'
      },
      {
        id: 'new-year-show-director',
        category: 'creative',
        no: '07',
        featured: false,
        badge: ['辅助经历', '组织协调'],
        title: '高中元旦晚会节目编导',
        subtitle: '两次负责单个节目的创作与排练协调。',
        cover: null,
        stats: null,
        sections: [
          { heading: '背景与目标', body: [
            '高中期间两次负责元旦晚会单个节目的原创 / 改编与排练协调。'
          ]},
          { heading: '我的职责与行动', body: [
            '负责申请排练时间、沟通协调、制定排练计划，并统筹节目执行。'
          ]},
          { heading: '范围说明', body: [
            '职责范围是单个节目，不是整场晚会的总导演。'
          ]}
        ],
        evidence: [],
        evidenceNote: '参与人数如需呈现，应先核实口径。',
        disclaimer: '这是单个节目的编导与排练协调，不是整场晚会总导演。'
      }
    ],

    contact: {
      eyebrow: '联系我',
      title: '期待与你聊聊',
      intro: '以下联系方式待本人确认可公开后填入。在此之前，请通过占位信息了解需要补充的字段。',
      channels: [
        { label: '邮箱', value: '待确认后公开', href: null },
        { label: '抖音', value: '待确认后公开', href: null },
        { label: 'Threads', value: '待确认后公开', href: null },
        { label: '领英 / 其他', value: '待确认后公开', href: null }
      ],
      privacyNote: '未确认的手机号、邮箱与社交链接不会公开；此处均使用占位符，发布前需替换为本人确认可公开的信息。'
    },

    footer: {
      tagline: 'Content Creator & AI Enthusiast',
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
    seoTitle: 'Rae — Content Creator & AI Enthusiast | Portfolio',
    seoDesc: 'Portfolio of Rae (Zhang Nan), seeking AI Product Operations / AI Operations roles. AI product experience research, AIGC content creation, content & social media operations.',

    nav: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'resume', label: 'Résumé' },
      { id: 'portfolio', label: 'Portfolio' },
      { id: 'contact', label: 'Contact' }
    ],

    ui: {
      viewAll: 'View all work',
      readMore: 'View project',
      backHome: 'Back to home',
      prevProject: 'Previous project',
      nextProject: 'Next project',
      downloadResume: 'Download résumé',
      contactMe: 'Contact me',
      viewPortfolio: 'View portfolio',
      placeholder: 'Visual pending',
      personalNote: 'Personal record',
      inProgress: 'In progress',
      comingSoon: 'To be completed · placeholder'
    },

    hero: {
      eyebrow: 'Personal Portfolio · Class of 2027',
      name: 'Zhang Nan',
      nameEn: 'Rae',
      role: 'Content Creator & AI Enthusiast',
      intro: 'A content creator with a music background, exploring how AI tools meet content production, and observing product details and user needs through real use.',
      seekingLabel: 'Seeking roles in',
      seeking: ['AI Product Operations', 'AI Operations', 'AI Content Operations'],
      location: 'Suzhou preferred · also open to Shanghai / Hangzhou / Shenzhen / Beijing / Guangzhou / Changsha',
      availability: 'Open to internships, campus hiring and full-time roles',
      photoPlaceholder: 'Portrait photo to be added',
      photoHint: 'Space reserved for a personal portrait; a neutral placeholder is shown until uploaded'
    },

    about: {
      eyebrow: 'About me',
      title: 'Finding my place between content creation and AI tools',
      paragraphs: [
        'I am Zhang Nan (Rae), an undergraduate in Musicology at Jishou University Zhangjiajie College, class of 2027. My foundation includes vocal music, music theory, and the study of guzheng and piano.',
        'I independently run a personal Douyin music account, completing the full 0-to-1 process from positioning and song selection to recording, publishing and data observation. I am also a long-term AI product user who records usability issues, organizes needs and suggests improvements through real use.',
        'I am now combining my content creation experience with AI tool exploration, growing toward AI Product Operations / AI Operations. I value a genuine user perspective, active learning and continuous reflection — and I am honest about the areas where I am still growing.'
      ],
      facts: [
        { k: 'Based / target cities', v: 'Suzhou preferred; open to Shanghai, Hangzhou, Shenzhen, Beijing, Guangzhou, Changsha' },
        { k: 'Open to', v: 'Internships / campus hiring / full-time' },
        { k: 'Education', v: 'Jishou University Zhangjiajie College · BA Musicology · 2023.09—2027.06' }
      ]
    },

    resume: {
      eyebrow: 'Résumé overview',
      title: 'Experience & skills at a glance',
      note: 'The full PDF résumé is to be added to this site; unconfirmed phone numbers and emails will not be published.',
      sections: [
        {
          heading: 'Education',
          items: [
            { title: 'Jishou University Zhangjiajie College', sub: 'Musicology · BA', time: '2023.09 — 2027.06', desc: 'Class of 2027. Foundation: vocal music, music theory; guzheng and piano background.' }
          ]
        },
        {
          heading: 'Projects & practice',
          items: [
            { title: 'AI Interactive Product Experience & Needs Analysis', sub: 'Long-term personal observation · not product development', time: 'Ongoing', desc: 'Multi-model role-play and story interaction; documenting memory, character consistency and plot logic issues.' },
            { title: 'AIGC Mini-Drama Experiment', sub: 'Personal AIGC experiment · unpublished', time: 'Personal project', desc: 'ChatGPT images + Doubao video + CapCut editing; one short episode of just over a minute.' },
            { title: 'Personal Douyin Music Account', sub: 'Independently run · 0 to 1', time: 'Ongoing', desc: '28 posts, 89 followers; handled positioning, song selection, production, publishing and data observation.' },
            { title: 'Coffee Reselling / Talent Livestream / Show Direction', sub: 'Creative planning & execution', time: 'During school', desc: 'Customer acquisition and sales, live expression and interaction, show arrangement and rehearsal coordination.' }
          ]
        },
        {
          heading: 'Skills & tools',
          items: [
            { title: 'Regularly used AI tools', sub: '', time: '', desc: 'ChatGPT, DeepSeek, Doubao, Gemini' },
            { title: 'Occasionally used', sub: '', time: '', desc: 'Jimeng, Grok, Qianwen, Chatbox' },
            { title: 'Content & editing', sub: '', time: '', desc: 'CapCut (basic editing); AI image and video generation (personal practice); filming from personal short videos and course group videos' },
            { title: 'API practice', sub: '', time: '', desc: 'Some DeepSeek API calling practice; specific workflow and presentable material to be added by me' }
          ]
        },
        {
          heading: 'Languages',
          items: [
            { title: 'Chinese', sub: 'Native', time: '', desc: '' },
            { title: 'English', sub: 'To be filled in at true level', time: '', desc: 'To be described accurately after my confirmation; no exaggeration' }
          ]
        }
      ],
      skillNote: 'Note: I am not yet proficient in Photoshop, Excel or PPT; I have only limited or insufficient exposure to Agent, OpenClaw, Claude and Codex — none are labeled as proficient.'
    },

    categories: [
      { key: 'ai-product', no: '01', name: 'AI Product Experience & Research', en: 'AI Product Experience & Research', desc: 'Observations of product features, user needs and usability issues from a long-term user perspective.' },
      { key: 'aigc', no: '02', name: 'AIGC Content Creation', en: 'AIGC Content Creation', desc: 'Content experiments and creative workflows built with multiple AI tools.' },
      { key: 'content-social', no: '03', name: 'Content & Social Media Operations', en: 'Content & Social Media Operations', desc: 'Personal account practice from positioning and production to publishing and data observation.' },
      { key: 'creative', no: '04', name: 'Creative Projects & Business Execution', en: 'Creative Projects & Business Execution', desc: 'Hands-on experience in sales, livestream interaction and show arrangement.' }
    ],

    projects: [
      {
        id: 'ai-product-experience',
        category: 'ai-product',
        no: '01',
        featured: true,
        badge: ['Long-term personal observation', 'Not product development'],
        title: 'AI Interactive Product Experience & Needs Analysis',
        subtitle: 'Observing the issues, needs and improvements of AI interactive products through long-term real use.',
        cover: null,
        stats: null,
        sections: [
          { heading: 'Background & goal', body: [
            'As a long-term AI product user, I have continuously experienced AI interactive text games / simulators, using models such as ChatGPT, DeepSeek, Grok and Gemini. I wanted to observe product features, user needs and usability issues from a genuine user perspective.'
          ]},
          { heading: 'My role', body: [
            'Recording issues, requesting corrections and organizing needs from a user perspective. This is personal user experience and needs observation — not a product team role, and not product development.'
          ]},
          { heading: 'Actions & method', body: [
            'Repeatedly ran role-play and story interactions across multiple models; proactively pointed out problems and asked the AI to correct them; and paid attention to emotional value, romance / story interaction needs, and why users keep coming back.'
          ]},
          { heading: 'Observations & findings', body: [
            'Weak memory; character settings and personalities drifting off; inconsistent plot logic; insufficient long-term interaction consistency.'
          ]},
          { heading: 'Result & evidence', body: [
            'A long, continuous record of user experience observations and issue categorization — personal observation, not a commercial outcome or product deliverable.'
          ]},
          { heading: 'Problems, reflection & next steps', body: [
            'An in-depth ChatGPT experience report is still to be completed; space is reserved here. Once done, it can cover feature experience, typical task tests, issue categorization, competitor observations and improvement suggestions.',
            'Any business idea shown here is explicitly labeled a personal idea, not developed and not market-validated.'
          ]}
        ],
        evidence: [],
        evidenceNote: 'Experience logs, conversation screenshots and issue categorization are pending.',
        disclaimer: 'Important: This project is long-term user experience and needs observation. I did not develop the product, nor did I design or build a multi-model Agent system.'
      },
      {
        id: 'aigc-mini-drama',
        category: 'aigc',
        no: '02',
        featured: true,
        badge: ['Personal AIGC experiment', 'Unpublished', 'Self-rated 3/10'],
        title: 'AIGC Mini-Drama Experiment',
        subtitle: 'Coordinating multiple AI tools to attempt a short drama episode with a complete workflow.',
        cover: null,
        stats: null,
        sections: [
          { heading: 'Background & goal', body: [
            'I wanted to explore whether AI tools could work together to produce a short drama episode, and to tackle two common challenges: character consistency and scene consistency.'
          ]},
          { heading: 'My role', body: [
            'Independently handled the script, storyboard, character design, asset generation and editing — all assisted by AI tools.'
          ]},
          { heading: 'Actions & method', body: [
            'Used ChatGPT to generate images, Doubao to generate video, and CapCut to edit; coordinated across tools with repeated generation and iteration around character and scene consistency.'
          ]},
          { heading: 'Deliverable', body: [
            'One finished episode of just over a minute, with a complete script, character sheets, scene images, storyboard and final video.'
          ]},
          { heading: 'Result & evidence', body: [
            'This is a personal experiment, self-rated around 3/10. Due to unsatisfying results and limited generation quota, it has not been published. Key frames, script, character and scene images, and storyboard are pending.'
          ]},
          { heading: 'Problems, reflection & next steps', body: [
            'Character and scene consistency was hard to keep stable; generation quota and output quality were also limiting.',
            'If the final video is not suitable to publish, I will focus on the workflow, key frames, script and storyboard.'
          ]}
        ],
        evidence: [],
        evidenceNote: 'Final video, script, character sheets, scene images and storyboard to be added after I confirm what can be published.',
        disclaimer: 'Important: This is a personal AIGC experiment / unpublished work. The focus is the creative workflow, multi-tool coordination, generation iteration and problems encountered — not a commercial or client project.'
      },
      {
        id: 'douyin-music-account',
        category: 'content-social',
        no: '03',
        featured: true,
        badge: ['Personal account', 'Independently run', '0 to 1'],
        title: 'Personal Douyin Music Account',
        subtitle: 'Independently completing a music account from content positioning and production to publishing and operations.',
        cover: null,
        stats: [
          { value: '28', label: 'Posts' },
          { value: '89', label: 'Followers' },
          { value: '9,897', label: 'Top views' },
          { value: '471', label: 'Top likes' }
        ],
        statsNote: 'Top views and top likes are from the same post.',
        sections: [
          { heading: 'Background & goal', body: [
            'I independently run a personal Douyin music account, aiming to complete the full process from content positioning and production to publishing and operations.'
          ]},
          { heading: 'My role', body: [
            'Independently handled account positioning, song selection, competitor observation, song learning, recording, audio track adjustment, cover and copywriting, publishing and basic data observation.'
          ]},
          { heading: 'Actions & method', body: [
            'Content is mainly song covers, including Chinese, English and Korean songs, in formats such as a cappella, with backing tracks and one-take performances. I tried both no-makeup direct recording and more polished styling / post-processing; a few posts performed differently.'
          ]},
          { heading: 'Result & evidence', body: [
            '28 posts published, 89 followers; top views 9,897 and top likes 471, both from the same post. I track views, likes, comments and follower growth. Representative posts and data screenshots are pending.'
          ]},
          { heading: 'Problems, reflection & next steps', body: [
            'Song selection was not well connected to trends; video length may affect completion rate; content quality and singing still have room to improve.',
            'There is not yet enough data to prove one format is consistently better; differences in individual posts cannot be written as validated general conclusions. I will keep testing and observing.'
          ]}
        ],
        evidence: [],
        evidenceNote: 'Three to five representative posts and usable backend data screenshots to be added after my confirmation.',
        disclaimer: 'Important: This is a personal account built from 0 to 1 — not a mature commercial account or a proven growth case.'
      },
      {
        id: 'threads-account',
        category: 'content-social',
        no: '04',
        featured: false,
        badge: ['Supporting experience', 'Overseas social'],
        title: 'Threads Account Operations',
        subtitle: 'Months of consistent posting and interaction, observing what content gets seen.',
        cover: null,
        stats: [
          { value: '8,000+', label: 'Cumulative views' },
          { value: '5', label: 'Followers' }
        ],
        statsNote: 'These are cumulative views, not last-30-days data.',
        sections: [
          { heading: 'Background & content', body: [
            'I ran a Threads account for several months, posting Chinese-language life reflections, emotional expressions and interest-based content.'
          ]},
          { heading: 'My role & actions', body: [
            'Independently wrote and published content, and proactively interacted with other creators.'
          ]},
          { heading: 'Observations & result', body: [
            'I noticed that relatable, reader-valuable content tended to earn more views or interaction. Over several months, the account reached 5 followers and 8,000+ cumulative views.'
          ]}
        ],
        evidence: [],
        evidenceNote: 'Account and content screenshots to be added after my confirmation.',
        disclaimer: 'Data note: 8,000+ cumulative views, not last-30-days data; not presented as a mature overseas social operations case.'
      },
      {
        id: 'coffee-microbusiness',
        category: 'creative',
        no: '05',
        featured: false,
        badge: ['Supporting practice', 'During school'],
        title: 'Coffee Reselling',
        subtitle: 'Running a small sales practice end-to-end, from acquisition to after-sales.',
        cover: null,
        stats: [
          { value: '2–3 months', label: 'Duration' },
          { value: '10+ boxes', label: 'Sold' }
        ],
        statsNote: 'No usable transaction records; revenue, conversion and customer scale are not fabricated.',
        sections: [
          { heading: 'Background & goal', body: [
            'During my freshman winter break I ran a small reselling practice for about 2–3 months, selling a small-brand coffee.'
          ]},
          { heading: 'My role & actions', body: [
            'Drove traffic myself through Douyin, Xiaohongshu and Kuaishou; independently handled customer acquisition, sales communication, customer service, order processing, packing and shipping, and after-sales.'
          ]},
          { heading: 'Result', body: [
            'Sold more than ten boxes.'
          ]}
        ],
        evidence: [],
        evidenceNote: 'No usable transaction records; to be added here only if presentable records are found.',
        disclaimer: 'No usable transaction records; no fabricated revenue, conversion rate or customer scale.'
      },
      {
        id: 'talent-livestream',
        category: 'creative',
        no: '06',
        featured: false,
        badge: ['Supporting practice', 'Live expression'],
        title: 'Talent Livestream',
        subtitle: 'A singing-focused livestream practice that built live expression and pacing control.',
        cover: null,
        stats: [
          { value: '~1 month', label: 'Duration' },
          { value: '~4 hours', label: 'Daily' },
          { value: '≤ 10', label: 'Avg. online' },
          { value: '¥300+', label: 'Income' }
        ],
        statsNote: 'Average online viewers within 10; unconfirmed session counts or peak viewers are not used.',
        sections: [
          { heading: 'Background & goal', body: [
            'During my sophomore summer break I ran a talent livestream for about a month, around four hours a day, mainly singing with occasional chat.'
          ]},
          { heading: 'My role & actions', body: [
            'Independently handled content planning, live expression, audience interaction and pacing control.'
          ]},
          { heading: 'Result', body: [
            'Average online viewers within 10; income of around ¥300+.'
          ]}
        ],
        evidence: [],
        evidenceNote: 'To be added here if presentable livestream records are found.',
        disclaimer: 'Unconfirmed session counts or peak viewer numbers are not used.'
      },
      {
        id: 'new-year-show-director',
        category: 'creative',
        no: '07',
        featured: false,
        badge: ['Supporting experience', 'Organization'],
        title: 'New Year Gala Show Direction',
        subtitle: 'Twice responsible for the creation and rehearsal of a single performance.',
        cover: null,
        stats: null,
        sections: [
          { heading: 'Background & goal', body: [
            'In high school I twice directed a single performance for the New Year gala, handling original creation / adaptation and rehearsal coordination.'
          ]},
          { heading: 'My role & actions', body: [
            'Requested rehearsal time, coordinated communication, set rehearsal plans and oversaw the execution of the performance.'
          ]},
          { heading: 'Scope note', body: [
            'My responsibility was a single performance — I was not the director of the entire gala.'
          ]}
        ],
        evidence: [],
        evidenceNote: 'Participant numbers, if shown, should be verified first.',
        disclaimer: 'This was direction and rehearsal coordination for a single performance, not the whole gala.'
      }
    ],

    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk',
      intro: 'The channels below are placeholders until I confirm what can be published. Until then, they show which fields need to be filled in.',
      channels: [
        { label: 'Email', value: 'To be published after confirmation', href: null },
        { label: 'Douyin', value: 'To be published after confirmation', href: null },
        { label: 'Threads', value: 'To be published after confirmation', href: null },
        { label: 'LinkedIn / Other', value: 'To be published after confirmation', href: null }
      ],
      privacyNote: 'Unconfirmed phone numbers, emails and social links will not be published; placeholders are used here and must be replaced with confirmed information before launch.'
    },

    footer: {
      tagline: 'Content Creator & AI Enthusiast',
      note: 'All content is based on information I have confirmed; missing material is shown as placeholders.',
      backToTop: 'Back to top'
    }
  }
};
