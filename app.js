/* ==========================================================================
 * Rae Portfolio — 交互逻辑
 * 从 content.js 读取内容，渲染首页与项目详情页，处理语言 / 路由 / 灯箱。
 * 除本文件顶部 RESUME_PDF 常量外，无需改动其它逻辑即可维护内容。
 * ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
   * 配置：放入真实 PDF 后，把下面改成文件路径，例如 'resume/Rae_Resume.pdf'
   * ------------------------------------------------------------------ */
  var RESUME_PDF = '';

  var DATA = window.SITE_DATA;
  var STORAGE_KEY = 'rae-portfolio-lang';
  var isProjectPage = !!document.getElementById('project-main');

  function getLang() {
    var p = new URLSearchParams(location.search).get('lang');
    if (p === 'zh' || p === 'en') return p;
    var s = null;
    try { s = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    return s === 'en' ? 'en' : 'zh';
  }

  var lang = getLang();
  var navObserver = null;

  function t() { return DATA[lang]; }

  function setLang(next) {
    lang = next;
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
    document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
    // 在 URL 中保留语言，便于分享
    try {
      var url = new URL(location.href);
      url.searchParams.set('lang', next);
      history.replaceState(null, '', url);
    } catch (e) {}
    render();
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function chatAttrs(name) {
    return ' data-i18n="' + name + '"';
  }

  function navHref(id) {
    return isProjectPage ? 'index.html#' + id : '#' + id;
  }

  function projectUrl(id) {
    return 'project.html?id=' + encodeURIComponent(id) + '&lang=' + lang;
  }

  function html(strings) {
    // 仅用于静态模板拼接，内容均已 esc 或为可信字面量
    return strings.join('');
  }

  /* ---------------- Toast ---------------- */
  function toast(msg) {
    var box = document.getElementById('toast');
    if (!box) {
      box = document.createElement('div');
      box.id = 'toast';
      box.className = 'toast';
      box.setAttribute('role', 'status');
      document.body.appendChild(box);
    }
    box.textContent = msg;
    box.classList.add('is-show');
    clearTimeout(box._timer);
    box._timer = setTimeout(function () { box.classList.remove('is-show'); }, 3600);
  }

  /* ---------------- 导航 ---------------- */
  function renderHeader() {
    var d = t();
    var links = d.nav.map(function (n) {
      return '<a href="' + navHref(n.id) + '" data-nav="' + n.id + '">' + esc(n.label) + '</a>';
    }).join('');

    document.getElementById('site-header').innerHTML =
      '<div class="wrap header-inner">' +
        '<a class="brand" href="' + (isProjectPage ? 'index.html' : '#home') + '">' +
          esc(d.siteName) + '<small>Portfolio</small>' +
        '</a>' +
        '<nav class="nav" id="primary-nav" aria-label="主导航">' + links + '</nav>' +
        '<div class="header-tools">' +
          '<div class="lang-toggle" role="group" aria-label="语言切换">' +
            '<button type="button" data-lang="zh" class="' + (lang === 'zh' ? 'is-active' : '') + '">中</button>' +
            '<button type="button" data-lang="en" class="' + (lang === 'en' ? 'is-active' : '') + '">EN</button>' +
          '</div>' +
          '<button class="menu-toggle" id="menu-toggle" type="button" aria-label="打开菜单" aria-expanded="false">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
        '</div>' +
      '</div>';

    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
    });

    var toggle = document.getElementById('menu-toggle');
    var nav = document.getElementById('primary-nav');
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function highlightNav() {
    if (isProjectPage) return;
    if (navObserver) { navObserver.disconnect(); navObserver = null; }
    var ids = ['home', 'about', 'resume', 'portfolio', 'contact'];
    var links = document.querySelectorAll('[data-nav]');
    navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) {
            a.classList.toggle('is-active', a.getAttribute('data-nav') === en.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) navObserver.observe(el);
    });
  }

  /* ---------------- 首页区块 ---------------- */
  function renderHero() {
    var d = t().hero, ui = t().ui;
    var chips = d.seeking.map(function (s) { return '<span class="chip chip--accent">' + esc(s) + '</span>'; }).join('');
    document.getElementById('home').innerHTML =
      '<div class="wrap hero-grid">' +
        '<div class="hero-copy">' +
          '<p class="eyebrow">' + esc(d.eyebrow) + '</p>' +
          '<h1 class="hero-name" id="hero-title">' + esc(d.name) + '<span class="en">' + esc(d.nameEn) + '</span></h1>' +
          '<p class="hero-role">' + esc(d.role) + '</p>' +
          '<p class="hero-intro">' + esc(d.intro) + '</p>' +
          '<div class="hero-seeking"><span class="hero-seeking__label">' + esc(d.seekingLabel) + '</span>' +
            '<div class="chip-row">' + chips + '</div></div>' +
          '<div class="hero-meta">' +
            '<div><strong>' + esc(lang === 'zh' ? '城市' : 'Location') + '：</strong>' + esc(d.location) + '</div>' +
            '<div><strong>' + esc(lang === 'zh' ? '求职类型' : 'Open to') + '：</strong>' + esc(d.availability) + '</div>' +
          '</div>' +
          '<div class="btn-row">' +
            '<a class="btn btn--solid" href="#portfolio">' + esc(ui.viewPortfolio) + '</a>' +
            '<button class="btn btn--ghost" type="button" data-resume>' + esc(ui.downloadResume) + '</button>' +
            '<a class="btn btn--ghost" href="#contact">' + esc(ui.contactMe) + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="photo-frame" role="img" aria-label="' + esc(d.photoPlaceholder) + '">' +
          '<span class="photo-frame__icon">R</span>' +
          '<span class="photo-frame__text">' + esc(d.photoPlaceholder) + '</span>' +
          '<span class="photo-frame__hint">' + esc(d.photoHint) + '</span>' +
        '</div>' +
      '</div>';
  }

  function renderAbout() {
    var d = t().about;
    var paras = d.paragraphs.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
    var facts = d.facts.map(function (f) {
      return '<div class="fact"><dt>' + esc(f.k) + '</dt><dd>' + esc(f.v) + '</dd></div>';
    }).join('');
    document.getElementById('about').innerHTML =
      '<div class="wrap about-grid">' +
        '<div><p class="eyebrow">' + esc(d.eyebrow) + '</p>' +
          '<h2 class="section-title" id="about-title">' + esc(d.title) + '</h2></div>' +
        '<div class="about-body">' + paras +
          '<dl class="fact-list">' + facts + '</dl>' +
        '</div>' +
      '</div>';
  }

  function renderResume() {
    var d = t().resume, ui = t().ui;
    var blocks = d.sections.map(function (sec) {
      var items = sec.items.map(function (it) {
        var sub = it.sub ? '<div class="resume-item__sub">' + esc(it.sub) + '</div>' : '';
        var time = it.time ? '<div class="resume-item__time">' + esc(it.time) + '</div>' : '';
        var desc = it.desc ? '<div class="resume-item__desc">' + esc(it.desc) + '</div>' : '';
        return '<div class="resume-item"><div><h4 class="resume-item__title">' + esc(it.title) + '</h4>' + sub + '</div>' + time + desc + '</div>';
      }).join('');
      return '<div class="resume-block"><h3>' + esc(sec.heading) + '</h3>' + items + '</div>';
    }).join('');

    document.getElementById('resume').innerHTML =
      '<div class="wrap">' +
        '<div class="resume-head">' +
          '<div><p class="eyebrow">' + esc(d.eyebrow) + '</p>' +
            '<h2 class="section-title" id="resume-title">' + esc(d.title) + '</h2></div>' +
          '<p class="resume-note">' + esc(d.note) + '</p>' +
        '</div>' +
        '<button class="btn btn--solid" type="button" data-resume>' + esc(ui.downloadResume) + '</button>' +
        blocks +
        '<p class="skill-note">' + esc(d.skillNote) + '</p>' +
      '</div>';
  }

  function renderCard(p) {
    var badges = p.badge.map(function (b) { return '<span class="chip">' + esc(b) + '</span>'; }).join('');
    var stats = '';
    if (p.stats && p.stats.length) {
      stats = '<div class="project-card__stats" style="display:flex;flex-wrap:wrap;gap:14px;margin-bottom:16px;font-size:13px;color:var(--ink-soft)">' +
        p.stats.map(function (s) { return '<span><strong style="color:var(--ink)">' + esc(s.value) + '</strong> ' + esc(s.label) + '</span>'; }).join('') +
        '</div>';
    }
    return '<a class="project-card" href="' + projectUrl(p.id) + '">' +
      '<div class="project-card__top"><span class="project-card__no">' + esc(p.no) + '</span>' +
        '<div class="chip-row">' + badges + '</div></div>' +
      '<div class="project-card__thumb">' + esc(t().ui.placeholder) + '</div>' +
      '<h3 class="project-card__title">' + esc(p.title) + '</h3>' +
      '<p class="project-card__sub">' + esc(p.subtitle) + '</p>' +
      stats +
      '<div class="project-card__foot"><span class="project-card__link">' + esc(t().ui.readMore) + ' →</span></div>' +
    '</a>';
  }

  function renderPortfolio() {
    var d = t();
    var cats = d.categories.map(function (c) {
      var list = d.projects.filter(function (p) { return p.category === c.key; });
      // 重点项目排在前面
      list.sort(function (a, b) { return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); });
      var cards = list.map(renderCard).join('');
      return '<div class="category">' +
        '<div class="category-head"><span class="category-no">' + esc(c.no) + '</span>' +
          '<h3>' + esc(c.name) + '</h3><span class="en">/ ' + esc(c.en) + '</span></div>' +
        '<p class="category-desc">' + esc(c.desc) + '</p>' +
        '<div class="project-grid">' + cards + '</div>' +
      '</div>';
    }).join('');

    document.getElementById('portfolio').innerHTML =
      '<div class="wrap">' +
        '<div class="cat-intro">' +
          '<div><p class="eyebrow">Portfolio</p>' +
            '<h2 class="section-title" id="portfolio-title">' +
              esc(lang === 'zh' ? '按能力分类的作品与实践' : 'Work organized by capability') +
            '</h2></div>' +
        '</div>' +
        cats +
      '</div>';
  }

  function renderContact() {
    var d = t().contact;
    var rows = d.channels.map(function (c) {
      var val = c.href
        ? '<a href="' + esc(c.href) + '" target="_blank" rel="noopener">' + esc(c.value) + '</a>'
        : esc(c.value);
      return '<div class="contact-row"><span class="contact-row__label">' + esc(c.label) + '</span>' +
        '<span class="contact-row__value">' + val + '</span></div>';
    }).join('');
    document.getElementById('contact').innerHTML =
      '<div class="wrap contact-grid">' +
        '<div><p class="eyebrow">' + esc(d.eyebrow) + '</p>' +
          '<h2 class="section-title" id="contact-title">' + esc(d.title) + '</h2>' +
          '<p class="lead">' + esc(d.intro) + '</p></div>' +
        '<div><div class="contact-list">' + rows + '</div>' +
          '<p class="privacy-note">' + esc(d.privacyNote) + '</p></div>' +
      '</div>';
  }

  function renderFooter() {
    var d = t().footer;
    document.getElementById('site-footer').innerHTML =
      '<div class="wrap footer-inner">' +
        '<div><div class="footer-brand">' + esc(t().siteName) + '</div>' +
          '<div class="footer-tag">' + esc(d.tagline) + '</div>' +
          '<p class="footer-note">' + esc(d.note) + '</p></div>' +
        '<button class="footer-top" type="button" id="back-to-top">↑ ' + esc(d.backToTop) + '</button>' +
      '</div>';
    document.getElementById('back-to-top').addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------------- 项目详情页 ---------------- */
  function renderProjectPage() {
    var d = t();
    var params = new URLSearchParams(location.search);
    var id = params.get('id');
    var idx = d.projects.findIndex(function (p) { return p.id === id; });
    var main = document.getElementById('project-main');

    if (idx === -1) {
      main.innerHTML = '<div class="wrap" style="padding-block:100px">' +
        '<p class="eyebrow">404</p><h1 class="section-title">' +
        esc(lang === 'zh' ? '未找到该项目' : 'Project not found') + '</h1>' +
        '<a class="btn btn--solid" href="' + (isProjectPage ? 'index.html' : '#home') + '">' +
        esc(d.ui.backHome) + '</a></div>';
      return;
    }

    var p = d.projects[idx];
    var cat = d.categories.find(function (c) { return c.key === p.category; });
    var badges = p.badge.map(function (b) { return '<span class="chip">' + esc(b) + '</span>'; }).join('');

    var stats = '';
    if (p.stats && p.stats.length) {
      stats = '<div class="stats">' + p.stats.map(function (s) {
        return '<div class="stat"><div class="stat__value">' + esc(s.value) + '</div>' +
          '<div class="stat__label">' + esc(s.label) + '</div></div>';
      }).join('') + '</div>' +
      (p.statsNote ? '<p class="stats-note">' + esc(p.statsNote) + '</p>' : '');
    }

    var sections = p.sections.map(function (sec, i) {
      var body = sec.body.map(function (para) { return '<p>' + esc(para) + '</p>'; }).join('');
      return '<div class="project-section"><h2><span style="color:var(--accent);font-family:var(--font-serif);font-style:italic;margin-right:10px">' +
        String(i + 1).padStart(2, '0') + '</span>' + esc(sec.heading) + '</h2>' +
        '<div class="project-section__body">' + body + '</div></div>';
    }).join('');

    var evidenceHtml = '';
    if (p.evidence && p.evidence.length) {
      var items = p.evidence.map(function (ev) {
        var inner = ev.type === 'video'
          ? '<video controls preload="metadata" poster="' + esc(ev.poster || '') + '"><source src="' + esc(ev.src) + '" type="video/mp4"></video>'
          : '<img src="' + esc(ev.src) + '" alt="' + esc(ev.caption || '') + '" data-zoom />';
        return '<div class="evidence-item">' + inner + '</div>';
      }).join('');
      evidenceHtml = '<div class="evidence"><h2>' + esc(lang === 'zh' ? '关键素材 / 证据' : 'Key material / evidence') + '</h2>' +
        '<div class="evidence-grid">' + items + '</div></div>';
    } else {
      evidenceHtml = '<div class="evidence"><h2>' + esc(lang === 'zh' ? '关键素材 / 证据' : 'Key material / evidence') + '</h2>' +
        '<div class="evidence-grid"><div class="evidence-item"><span>' + esc(d.ui.placeholder) + '</span></div>' +
        '<div class="evidence-item"><span>' + esc(d.ui.placeholder) + '</span></div></div>' +
        (p.evidenceNote ? '<p class="evidence-note">' + esc(p.evidenceNote) + '</p>' : '') + '</div>';
    }

    var prev = d.projects[idx - 1];
    var next = d.projects[idx + 1];
    var navHtml = '<div class="project-nav">' +
      (prev ? '<a href="' + projectUrl(prev.id) + '"><div class="project-nav__label">← ' + esc(d.ui.prevProject) + '</div>' +
        '<div class="project-nav__title">' + esc(prev.title) + '</div></a>' : '<span></span>') +
      (next ? '<a class="next" href="' + projectUrl(next.id) + '"><div class="project-nav__label">' + esc(d.ui.nextProject) + ' →</div>' +
        '<div class="project-nav__title">' + esc(next.title) + '</div></a>' : '<span></span>') +
      '</div>';

    document.title = p.title + ' — Rae';
    main.innerHTML =
      '<div class="wrap">' +
        '<div class="project-hero">' +
          '<a class="project-back" href="' + (isProjectPage ? 'index.html#portfolio' : '#portfolio') + '">← ' + esc(d.ui.backHome) + '</a>' +
          '<div class="project-hero__cat">' + esc(cat ? cat.name : '') + ' · ' + esc(p.no) + '</div>' +
          '<h1 class="project-hero__title">' + esc(p.title) + '</h1>' +
          '<p class="project-hero__sub">' + esc(p.subtitle) + '</p>' +
          '<div class="chip-row">' + badges + '</div>' +
          stats +
          (p.disclaimer ? '<div class="disclaimer">' + esc(p.disclaimer) + '</div>' : '') +
        '</div>' +
        '<div class="project-body">' + sections + evidenceHtml + navHtml + '</div>' +
      '</div>';
  }

  /* ---------------- 灯箱 ---------------- */
  var lightboxReady = false;
  function initLightbox() {
    var box = document.getElementById('lightbox');
    if (!box || lightboxReady) return;
    lightboxReady = true;
    var stage = box.querySelector('.lightbox__stage');
    var cap = box.querySelector('.lightbox__caption');
    var close = box.querySelector('.lightbox__close');

    document.addEventListener('click', function (e) {
      var img = e.target.closest('[data-zoom]');
      if (!img) return;
      stage.innerHTML = '';
      var clone = document.createElement('img');
      clone.src = img.src;
      clone.alt = img.alt || '';
      stage.appendChild(clone);
      cap.textContent = img.alt || '';
      box.hidden = false;
      box.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });

    function closeBox() {
      box.hidden = true;
      box.setAttribute('aria-hidden', 'true');
      stage.innerHTML = '';
      document.body.style.overflow = '';
    }
    close.addEventListener('click', closeBox);
    box.addEventListener('click', function (e) { if (e.target === box) closeBox(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeBox(); });
  }

  /* ---------------- 简历下载 ---------------- */
  function bindResume() {
    document.querySelectorAll('[data-resume]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (RESUME_PDF) {
          window.open(RESUME_PDF, '_blank');
        } else {
          toast(lang === 'zh'
            ? '简历 PDF 待放入：请将文件命名为 Rae_Resume.pdf 放进 resume/ 目录，并在 app.js 顶部填写路径后重新发布。'
            : 'Résumé PDF pending: name the file Rae_Resume.pdf, place it in the resume/ folder, set the path at the top of app.js, then republish.');
        }
      });
    });
  }

  /* ---------------- 渲染入口 ---------------- */
  function render() {
    renderHeader();
    if (isProjectPage) {
      renderProjectPage();
    } else {
      renderHero();
      renderAbout();
      renderResume();
      renderPortfolio();
      renderContact();
      highlightNav();
    }
    renderFooter();
    bindResume();
    initLightbox();
  }

  document.addEventListener('DOMContentLoaded', render);
})();
