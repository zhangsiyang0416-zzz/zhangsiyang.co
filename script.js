const root = document.documentElement;
const body = document.body;
const cursor = document.querySelector(".cursor");
const progressBar = document.querySelector(".progress span");
const copyDomain = document.querySelector("#copyDomain");
const bootButton = document.querySelector("#bootButton");
const bootScreen = document.querySelector("#bootScreen");
const bootProgress = document.querySelector("#bootProgress");
const bootStatus = document.querySelector("#bootStatus");
const enterSite = document.querySelector("#enterSite");
const viewPanels = [...document.querySelectorAll("[data-view-panel]")];
const viewLinks = [...document.querySelectorAll("[data-view-link]")];
const languageButtons = [...document.querySelectorAll("[data-lang-switch]")];
const designerTabs = [...document.querySelectorAll(".designer-tab")];
const designerImage = document.querySelector("#designerImage");
const designerTitle = document.querySelector("#designerTitle");
const designerSubtitle = document.querySelector("#designerSubtitle");
const designerWorkCount = document.querySelector("#designerWorkCount");
const designerPageCount = document.querySelector("#designerPageCount");
const designerPrevPage = document.querySelector("#designerPrevPage");
const designerNextPage = document.querySelector("#designerNextPage");
const designerOpenLightbox = document.querySelector("#designerOpenLightbox");
const designerLightbox = document.querySelector("#designerLightbox");
const designerLightboxImage = document.querySelector("#designerLightboxImage");
const designerLightboxTitle = document.querySelector("#designerLightboxTitle");
const designerLightboxPage = document.querySelector("#designerLightboxPage");
const designerCloseLightbox = document.querySelector("#designerCloseLightbox");
const helloSlides = [...document.querySelectorAll(".hello-slide")];
const helloSvgs = [...document.querySelectorAll(".hello-svg")];
const helloSequence = [
  { label: "English", status: "English / Apple-style path writing", hold: 4300 },
  { label: "中文", status: "中文 / 正在写入个人世界", hold: 3200 },
  { label: "Español", status: "Español / trazando hola", hold: 5200 },
  { label: "日本語", status: "日本語 / こんにちはを書いています", hold: 3400 },
  { label: "한국어", status: "한국어 / 안녕하세요 쓰는 중", hold: 3300 }
];
const designerWorks = [
  {
    title: { en: "Pop Art Poster", zh: "Pop Art Poster" },
    subtitle: { en: "Pop Art Poster", zh: "Pop Art Poster" },
    pages: workPages("pop-art-poster", 1)
  },
  {
    title: { en: "Sanxuejie Historic District Youth Hostel Design", zh: "三学街历史文化街区青旅设计" },
    subtitle: { en: "三学街历史文化街区青旅设计", zh: "Sanxuejie Historic District Youth Hostel Design" },
    pages: workPages("sanxuejie-youth-hostel", 3)
  },
  {
    title: { en: "Xianyang Historic District Pan-Museum Renewal", zh: "咸阳历史文化街区泛博物馆拼接改造" },
    subtitle: { en: "咸阳历史文化街区泛博物馆拼接改造", zh: "Xianyang Historic District Pan-Museum Renewal" },
    pages: workPages("xianyang-pan-museum", 7)
  },
  {
    title: { en: "Architectural Technology Design", zh: "建筑技术设计" },
    subtitle: { en: "建筑技术设计", zh: "Architectural Technology Design" },
    pages: workPages("architectural-technology-design", 6)
  },
  {
    title: { en: "Wetland Architecture Design", zh: "湿地建筑设计" },
    subtitle: { en: "湿地建筑设计", zh: "Wetland Architecture Design" },
    pages: workPages("wetland-architecture-design", 2)
  },
  {
    title: { en: "Steel Structure Stair Design", zh: "钢结构楼梯设计" },
    subtitle: { en: "钢结构楼梯设计", zh: "Steel Structure Stair Design" },
    pages: workPages("steel-stair-design", 2)
  }
];

const translations = {
  en: {
    "boot.enter": "Enter zhangsiyang.co",
    "boot.progress": "Boot progress",
    "boot.ready": "Hello, welcome to zhangsiyang.co",
    "wordmark.aria": "Back to home",
    "nav.aria": "Main navigation",
    "nav.home": "Home",
    "nav.story": "Explorer",
    "nav.work": "Designer",
    "nav.atlas": "Photos",
    "nav.thinker": "Thinker",
    "nav.resume": "Resume",
    "nav.contact": "Contact",
    "language.aria": "Language switcher",
    "ticker.aria": "Site keywords",
    "hero.kicker": "Designer / Explorer / Thinker",
    "identity.aria": "Chinese name identity",
    "identity.label": "Chinese name / identity root",
    "identity.meaning": "Si: thinking. Yang: open and inclusive like the ocean.",
    "hero.lead": "Architecture dual-degree student across XJTU and Politecnico di Milano, mapping public space, sustainable cities, and 30-country field notes into one living archive.",
    "hero.education.label": "Education",
    "hero.education.title": "Architecture dual degree",
    "hero.education.detail": "Xi'an Jiaotong University / Politecnico di Milano",
    "hero.focus.label": "Focus",
    "hero.focus.detail": "Urban renewal / Public space / Sustainable design",
    "hero.explorer.label": "Explorer",
    "hero.explorer.detail": "30 countries and counting",
    "hero.motto": "Keep Thinking, Keep Designing, Keep Exploring.",
    "hero.boot": "Boot Explorer",
    "hero.photos": "Open Photo Atlas",
    "desktop.live": "LIVE",
    "terminal.title": "BOOT_SEQUENCE.log",
    "terminal.story": "> loading story modules...",
    "terminal.designer": "> mounting designer archive...",
    "terminal.photos": "> scanning explorer photos...",
    "terminal.profile": "> profile kernel: architecture / XJTU / Politecnico di Milano",
    "terminal.exchange": "> summer exchange: UC Berkeley / sustainable cities",
    "terminal.travel": "> travel log: 30 countries indexed",
    "terminal.thinker": "> opening thinker notes...",
    "terminal.ready": "ready: zhangsiyang.co",
    "profileKernel.aria": "Profile kernel",
    "profileKernel.label": "PROFILE_KERNEL",
    "profileKernel.title": "Designer. Explorer. Thinker.",
    "profileKernel.body": "Studying architecture across Xi'an Jiaotong University and Politecnico di Milano, extending design research through UC Berkeley summer exchange work, and collecting the world through 30 countries of travel.",
    "app.aria": "Site modules",
    "app.story": "Explorer",
    "app.work": "Designer",
    "app.atlas": "Photos",
    "app.thinker": "Thinker",
    "app.resume": "Resume",
    "story.kicker": "01 / I am an Explorer",
    "story.title": "Experience is a map. Photos are coordinates.",
    "story.body": "This interface collects my education, travel, living archive, and the world I keep building through design.",
    "story.fact.mode.label": "Current mode",
    "story.fact.mode.value": "Explorer",
    "story.fact.goal.label": "Website goal",
    "story.fact.goal.value": "Know me in 60 seconds",
    "story.fact.archive.label": "Archive",
    "story.fact.archive.value": "Experience / Projects / Photos / Life",
    "timeline.kicker": "02 / Timeline",
    "timeline.title": "Life is not a table. It is an expandable line.",
    "timeline.site.title": "zhangsiyang.co goes live",
    "timeline.site.body": "The first version builds the entrance, structure, and visual system. Real stories, works, and photos keep moving in.",
    "timeline.project.title": "Experience and project nodes",
    "timeline.project.body": "A place for study, work, studio projects, competitions, courses, and the turns worth remembering.",
    "timeline.travel.title": "Travel and life archive",
    "timeline.travel.body": "Turning a large photo collection into a visual story with rhythm, not a storage dump.",
    "work.kicker": "03 / I am a Designer",
    "work.title": "Personal Projects",
    "work.menu.aria": "Works directory",
    "work.tabs.aria": "Designer works",
    "work.prev": "Previous page",
    "work.next": "Next page",
    "work.zoom": "Zoom view",
    "work.close": "Close",
    "atlas.kicker": "04 / I am an Explorer",
    "atlas.title": "Photo Atlas",
    "atlas.travel": "TRAVEL / cover",
    "atlas.life": "LIFE / moments",
    "atlas.city": "CITY / map",
    "atlas.food": "TABLE / food",
    "atlas.people": "PEOPLE / friends",
    "thinker.kicker": "05 / I am a Thinker",
    "thinker.title": "Life Notes",
    "thinker.signature.label": "Keep Thinking / Chinese name",
    "thinker.signature.meaning": "Si: thinking. Yang: open and inclusive like the ocean.",
    "thinker.body": "Architecture, cities, travel, learning, and life reflections will be archived here as the system grows.",
    "resume.kicker": "06 / Resume",
    "resume.title": "Resume interface, ready to expand.",
    "resume.body": "This will become my resume system: education, work experience, projects, skills, awards, certificates, and a downloadable version.",
    "resume.button": "Open resume material slot",
    "resume.education.label": "Education",
    "resume.education": "To fill: schools, major, time, highlights",
    "resume.experience.label": "Experience",
    "resume.experience": "To fill: studios, roles, contribution, outcomes",
    "resume.skills.label": "Skills",
    "resume.skills": "To fill: languages, tools, AI collaboration, work links",
    "contact.kicker": "07 / Contact",
    "contact.title": "Contact signal, always open.",
    "contact.body": "For collaborations, portfolio conversations, travel/design notes, or new ideas, reach me here.",
    "contact.email.label": "Email",
    "contact.email.note": "Primary inbox",
    "contact.phone.label": "Phone",
    "contact.phone.note": "China mainland number",
    "contact.wechat.label": "WeChat",
    "contact.wechat.note": "Add by phone number",
    "contact.copy": "Copy domain",
    "footer.built": "Built for zhangsiyang.co",
    "toast.boot": "Explorer interface online",
    "toast.domain": "Domain copied",
    "toast.online": "ZS_OS online"
  },
  zh: {
    "boot.enter": "进入 zhangsiyang.co",
    "boot.progress": "启动进度",
    "boot.ready": "你好，欢迎进入 zhangsiyang.co",
    "wordmark.aria": "回到首页",
    "nav.aria": "主导航",
    "nav.home": "主页",
    "nav.story": "经历",
    "nav.work": "项目",
    "nav.atlas": "照片",
    "nav.thinker": "思考",
    "nav.resume": "简历",
    "nav.contact": "联系",
    "language.aria": "语言切换",
    "ticker.aria": "网站关键词",
    "hero.kicker": "设计者 / 探索者 / 思考者",
    "identity.aria": "中文名身份标记",
    "identity.label": "中文名 / 身份坐标",
    "identity.meaning": "思是思考，洋是如海洋般开放与包容。",
    "hero.lead": "建筑双学位学生，学习经历横跨西安交通大学与米兰理工大学，把公共空间、可持续城市和 30 国旅行观察整理成一个持续生长的个人档案。",
    "hero.education.label": "教育",
    "hero.education.title": "建筑双学位",
    "hero.education.detail": "西安交通大学 / 米兰理工大学",
    "hero.focus.label": "方向",
    "hero.focus.detail": "城市更新 / 公共空间 / 可持续设计",
    "hero.explorer.label": "探索",
    "hero.explorer.detail": "走过 30 个国家，并且还在继续",
    "hero.motto": "保持思考，保持设计，保持探索。",
    "hero.boot": "开机进入",
    "hero.photos": "先看照片墙",
    "desktop.live": "在线",
    "terminal.title": "启动序列.log",
    "terminal.story": "> 正在载入经历模块...",
    "terminal.designer": "> 正在挂载设计作品档案...",
    "terminal.photos": "> 正在扫描旅行照片...",
    "terminal.profile": "> 个人内核：建筑 / 西安交大 / 米兰理工",
    "terminal.exchange": "> 暑期交流：UC Berkeley / 可持续城市",
    "terminal.travel": "> 旅行日志：30 个国家已索引",
    "terminal.thinker": "> 正在打开思考笔记...",
    "terminal.ready": "就绪：zhangsiyang.co",
    "profileKernel.aria": "个人内核",
    "profileKernel.label": "个人内核",
    "profileKernel.title": "设计者。探索者。思考者。",
    "profileKernel.body": "我在西安交通大学与米兰理工大学学习建筑，通过 UC Berkeley 暑期交流延伸对可持续城市的研究，也把走过 30 个国家的旅行观察持续收进这个个人世界。",
    "app.aria": "网站模块",
    "app.story": "经历",
    "app.work": "项目",
    "app.atlas": "照片",
    "app.thinker": "思考",
    "app.resume": "简历",
    "story.kicker": "01 / 我是探索者",
    "story.title": "经历是地图，照片是坐标。",
    "story.body": "这里收集我的就读经历、旅行、生活档案，以及我通过设计不断展开的世界。",
    "story.fact.mode.label": "当前模式",
    "story.fact.mode.value": "探索者",
    "story.fact.goal.label": "网站目标",
    "story.fact.goal.value": "60 秒认识我",
    "story.fact.archive.label": "档案",
    "story.fact.archive.value": "经历 / 项目 / 照片 / 生活",
    "timeline.kicker": "02 / 时间线",
    "timeline.title": "人生不是一张表，是一条可展开的线。",
    "timeline.site.title": "zhangsiyang.co 上线",
    "timeline.site.body": "第一版先把入口、结构和风格打好，真实经历、作品和照片会继续装进来。",
    "timeline.project.title": "经历与项目节点",
    "timeline.project.body": "这里会放学习、工作、项目、课程、竞赛，以及任何值得被看到的转折。",
    "timeline.travel.title": "旅行和生活档案",
    "timeline.travel.body": "把大量照片变成有节奏的视觉故事，而不是普通网盘相册。",
    "work.kicker": "03 / 我是设计者",
    "work.title": "个人项目",
    "work.menu.aria": "作品目录",
    "work.tabs.aria": "设计作品",
    "work.prev": "上一页",
    "work.next": "下一页",
    "work.zoom": "放大浏览",
    "work.close": "关闭",
    "atlas.kicker": "04 / 我是探索者",
    "atlas.title": "照片地图",
    "atlas.travel": "旅行 / 封面",
    "atlas.life": "生活 / 片段",
    "atlas.city": "城市 / 地图",
    "atlas.food": "餐桌 / 食物",
    "atlas.people": "朋友 / 人物",
    "thinker.kicker": "05 / 我是思考者",
    "thinker.title": "个人思考 / Life Notes",
    "thinker.signature.label": "Keep Thinking / 中文名",
    "thinker.signature.meaning": "思是思考，洋是如海洋般开放与包容。",
    "thinker.body": "建筑、城市、旅行、学习、人生分享，都会慢慢归档到这里。",
    "resume.kicker": "06 / 简历",
    "resume.title": "简历界面，先搭好。",
    "resume.body": "这里会变成我的简历系统：教育背景、工作经历、项目经历、技能、奖项、证书和下载入口。",
    "resume.button": "查看简历素材位",
    "resume.education.label": "教育",
    "resume.education": "待填：学校、专业、时间、亮点",
    "resume.experience.label": "经历",
    "resume.experience": "待填：公司/项目、职位、贡献、结果",
    "resume.skills.label": "技能",
    "resume.skills": "待填：语言、工具、AI 协作能力、作品链接",
    "contact.kicker": "07 / 联系",
    "contact.title": "联系",
    "contact.body": "如果想聊合作、作品集、旅行、设计笔记或新的想法，可以通过这里联系我。",
    "contact.email.label": "邮箱",
    "contact.email.note": "主要邮箱",
    "contact.phone.label": "电话",
    "contact.phone.note": "中国大陆号码",
    "contact.wechat.label": "微信",
    "contact.wechat.note": "可通过手机号添加",
    "contact.copy": "复制域名",
    "footer.built": "为 zhangsiyang.co 搭建",
    "toast.boot": "经历界面已启动",
    "toast.domain": "域名已复制",
    "toast.online": "ZS_OS 已启动"
  }
};

let activeDesignerWork = 0;
let activeDesignerPage = 0;
let currentLanguage = "en";

function workPages(slug, count) {
  return Array.from({ length: count }, (_, index) => `assets/works/${slug}-page-${index + 1}.jpg`);
}

function t(key) {
  return translations[currentLanguage]?.[key] || translations.en[key] || key;
}

function localizedValue(value) {
  if (!value || typeof value !== "object") return value;
  return value[currentLanguage] || value.en || "";
}

function workTitle(work) {
  return localizedValue(work?.title);
}

function workSubtitle(work) {
  return localizedValue(work?.subtitle);
}

function applyLanguage(language) {
  currentLanguage = language === "zh" ? "zh" : "en";
  root.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  root.dataset.lang = currentLanguage;
  body.dataset.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", t(element.dataset.i18nTitle));
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateDesignerViewer();
}

function routeFromHash() {
  const route = window.location.hash.replace("#", "");
  return route || "home";
}

function showRevealedItems(panel) {
  panel.querySelectorAll("[data-reveal]").forEach((item) => {
    item.classList.add("is-visible");
  });
}

function restartNameHandwriting(panel) {
  const animatedParts = panel.querySelectorAll(".thinker-name-identity .name-identity-write, .thinker-name-identity .name-identity-pen");
  if (!animatedParts.length) return;

  animatedParts.forEach((part) => {
    part.style.animation = "none";
  });

  void panel.getBoundingClientRect();

  animatedParts.forEach((part) => {
    part.style.animation = "";
  });
}

function setActiveView(view, options = {}) {
  const viewNames = new Set(viewPanels.map((panel) => panel.dataset.viewPanel));
  const nextView = viewNames.has(view) ? view : "home";

  body.dataset.view = nextView;
  viewPanels.forEach((panel) => {
    const isActive = panel.dataset.viewPanel === nextView;
    panel.classList.toggle("is-active", isActive);
    panel.setAttribute("aria-hidden", String(!isActive));
    if (isActive) showRevealedItems(panel);
    if (isActive && nextView === "thinker") restartNameHandwriting(panel);
  });

  viewLinks.forEach((link) => {
    const isActive = link.dataset.viewLink === nextView;
    link.classList.toggle("is-active", isActive);
    if (link.tagName === "A") {
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    }
  });

  const nextHash = nextView === "home" ? "" : `#${nextView}`;
  const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`;
  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (!options.skipHistory && nextUrl !== currentUrl) {
    const method = options.replace ? "replaceState" : "pushState";
    window.history[method](null, "", nextUrl);
  }

  window.scrollTo({ top: 0, behavior: options.instant ? "auto" : "smooth" });
  updateProgress();
}

function shuffledIntroOrder(count) {
  const order = Array.from({ length: count }, (_, index) => index);

  for (let index = order.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
  }

  return order;
}

function setSpotlight(event) {
  const x = `${event.clientX}px`;
  const y = `${event.clientY}px`;
  root.style.setProperty("--mx", x);
  root.style.setProperty("--my", y);
  if (cursor) {
    cursor.style.left = x;
    cursor.style.top = y;
  }
}

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  if (progressBar) {
    progressBar.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  }
}

function toast(message) {
  const old = document.querySelector(".toast");
  if (old) old.remove();
  const element = document.createElement("div");
  element.className = "toast";
  element.textContent = message;
  document.body.appendChild(element);
  window.setTimeout(() => element.remove(), 1800);
}

function updateBootScreen(value) {
  if (bootProgress) {
    bootProgress.style.width = `${value}%`;
  }
}

function releaseBootScreen() {
  if (!bootScreen) return;
  if (!bootScreen.isConnected) return;
  bootScreen.classList.add("is-exiting");
  body.classList.remove("boot-locked", "is-starting");
  body.classList.add("is-awake");

  window.setTimeout(() => {
    bootScreen.remove();
    toast(t("toast.online"));
  }, 720);
}

function runBootIntro() {
  if (!bootScreen || !enterSite) {
    body.classList.remove("boot-locked");
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const slideCount = Math.min(helloSlides.length, helloSvgs.length, helloSequence.length);
  const helloOrder = shuffledIntroOrder(slideCount);
  let step = 0;
  let timer = 0;
  let released = false;

  if (!slideCount) {
    enterSite.disabled = false;
    return;
  }

  enterSite.disabled = false;

  function exitIntro() {
    released = true;
    window.clearTimeout(timer);
    releaseBootScreen();
  }

  function restartAnimatedParts(container) {
    if (!container) return;

    const animatedParts = container.querySelectorAll(".handwritten-word, .hand-stroke");
    animatedParts.forEach((part) => {
      part.style.animation = "none";
    });
    container.style.setProperty("--restart", Date.now());

    void container.getBoundingClientRect();

    animatedParts.forEach((part) => {
      part.style.animation = "";
    });
  }

  function restartHelloSlide(slide, svg) {
    restartAnimatedParts(slide);
    restartAnimatedParts(svg);
    slide?.classList.add("is-active");
    svg?.classList.add("is-active");
  }

  function showHello(nextStep) {
    if (released || !bootScreen.isConnected) return;
    step = Math.min(nextStep, slideCount - 1);
    const activeIndex = helloOrder[step] ?? step;
    const activeSequence = helloSequence[activeIndex];

    helloSlides.forEach((slide) => {
      slide.classList.remove("is-active");
    });
    helloSvgs.forEach((svg) => {
      svg.classList.remove("is-active");
    });
    restartHelloSlide(helloSlides[activeIndex], helloSvgs[activeIndex]);

    const progress = Math.round(((step + 1) / slideCount) * 100);
    updateBootScreen(progress);

    if (bootStatus) {
      bootStatus.textContent = activeSequence?.status || "hello / handwriting sequence";
    }

    if (step === slideCount - 1) {
      window.clearTimeout(timer);
      window.setTimeout(() => {
        if (released || !bootScreen.isConnected) return;
        if (bootStatus) bootStatus.textContent = t("boot.ready");
        enterSite.disabled = false;
        enterSite.focus({ preventScroll: true });
      }, reducedMotion ? 120 : (activeSequence?.hold || 1800));
      return;
    }

    timer = window.setTimeout(
      () => showHello(step + 1),
      reducedMotion ? 180 : (activeSequence?.hold || 2200)
    );
  }

  showHello(0);

  enterSite.addEventListener("click", exitIntro);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && bootScreen.isConnected) {
      exitIntro();
    }
  });
}

function loadPhotoFrames() {
  document.querySelectorAll("[data-src]").forEach((frame) => {
    const src = frame.getAttribute("data-src");
    const image = new Image();
    image.onload = () => {
      frame.style.backgroundImage = `linear-gradient(transparent 0 60%, rgba(0,0,0,.76)), url("${src}")`;
      frame.classList.add("has-image");
    };
    image.src = src;
  });
}

function formatNumber(value) {
  return String(value).padStart(2, "0");
}

function updateDesignerLightbox(work, pageNumber, pageTotal) {
  if (!designerLightboxImage || !designerLightboxTitle || !designerLightboxPage) return;
  const title = workTitle(work);

  designerLightboxImage.src = work.pages[activeDesignerPage];
  designerLightboxImage.alt = currentLanguage === "zh" ? `${title} 第 ${pageNumber} 页放大图` : `${title} page ${pageNumber} enlarged`;
  designerLightboxTitle.textContent = title;
  designerLightboxPage.textContent = `PAGE ${formatNumber(pageNumber)} / ${formatNumber(pageTotal)}`;
}

function preloadDesignerPage(work, pageIndex) {
  if (!work?.pages?.length) return;
  const preload = new Image();
  preload.src = work.pages[pageIndex];
}

function updateDesignerViewer() {
  const work = designerWorks[activeDesignerWork];
  if (!work || !designerImage) return;

  activeDesignerPage = Math.min(Math.max(activeDesignerPage, 0), work.pages.length - 1);
  const pageNumber = activeDesignerPage + 1;
  const pageTotal = work.pages.length;
  const title = workTitle(work);
  const subtitle = workSubtitle(work);

  designerTabs.forEach((tab, index) => {
    const isActive = index === activeDesignerWork;
    const tabWork = designerWorks[index];
    const tabTitle = workTitle(tabWork);
    const tabSubtitle = workSubtitle(tabWork);
    const titleElement = tab.querySelector("strong");
    const subtitleElement = tab.querySelector("em");

    if (titleElement) titleElement.textContent = tabTitle;
    if (subtitleElement) subtitleElement.textContent = tabSubtitle;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  designerImage.src = work.pages[activeDesignerPage];
  designerImage.alt = currentLanguage === "zh" ? `${title} 第 ${pageNumber} 页` : `${title} page ${pageNumber}`;

  if (designerTitle) designerTitle.textContent = title;
  if (designerSubtitle) designerSubtitle.textContent = subtitle;
  if (designerWorkCount) {
    designerWorkCount.textContent = `${formatNumber(activeDesignerWork + 1)} / ${formatNumber(designerWorks.length)}`;
  }
  if (designerPageCount) {
    designerPageCount.textContent = `PAGE ${formatNumber(pageNumber)} / ${formatNumber(pageTotal)}`;
  }

  updateDesignerLightbox(work, pageNumber, pageTotal);
  preloadDesignerPage(work, (activeDesignerPage + 1) % pageTotal);
}

function moveDesignerPage(direction) {
  const work = designerWorks[activeDesignerWork];
  if (!work) return;
  const pageTotal = work.pages.length;
  activeDesignerPage = (activeDesignerPage + direction + pageTotal) % pageTotal;
  updateDesignerViewer();
}

function openDesignerLightbox() {
  if (!designerLightbox) return;
  designerLightbox.hidden = false;
  body.classList.add("lightbox-locked");
  requestAnimationFrame(() => designerLightbox.classList.add("is-active"));
}

function closeDesignerLightbox() {
  if (!designerLightbox) return;
  designerLightbox.classList.remove("is-active");
  body.classList.remove("lightbox-locked");
  window.setTimeout(() => {
    designerLightbox.hidden = true;
  }, 220);
}

designerTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeDesignerWork = Number(tab.dataset.workIndex || 0);
    activeDesignerPage = 0;
    updateDesignerViewer();
  });
});

designerPrevPage?.addEventListener("click", () => moveDesignerPage(-1));
designerNextPage?.addEventListener("click", () => moveDesignerPage(1));
designerOpenLightbox?.addEventListener("click", openDesignerLightbox);
designerImage?.addEventListener("click", openDesignerLightbox);
designerCloseLightbox?.addEventListener("click", closeDesignerLightbox);
designerLightbox?.addEventListener("click", (event) => {
  if (event.target === designerLightbox) closeDesignerLightbox();
});

document.addEventListener("keydown", (event) => {
  if (!designerLightbox || designerLightbox.hidden) return;
  if (event.key === "Escape") closeDesignerLightbox();
  if (event.key === "ArrowLeft") moveDesignerPage(-1);
  if (event.key === "ArrowRight") moveDesignerPage(1);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll("[data-reveal]").forEach((item) => observer.observe(item));

document.addEventListener("pointermove", setSpotlight);
document.querySelectorAll("a, button").forEach((item) => {
  item.addEventListener("pointerenter", () => cursor?.classList.add("is-active"));
  item.addEventListener("pointerleave", () => cursor?.classList.remove("is-active"));
});

viewLinks.forEach((control) => {
  control.addEventListener("click", (event) => {
    event.preventDefault();
    const nextView = control.dataset.viewLink || "home";
    body.classList.remove("is-starting");
    body.classList.add("is-awake");
    setActiveView(nextView);
    if (control === bootButton) toast(t("toast.boot"));
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langSwitch);
  });
});

window.addEventListener("popstate", () => {
  setActiveView(routeFromHash(), { skipHistory: true, instant: true });
});

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);

copyDomain?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("https://zhangsiyang.co");
  } catch {
    const area = document.createElement("textarea");
    area.value = "https://zhangsiyang.co";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
  toast(t("toast.domain"));
});

applyLanguage("en");
setActiveView(routeFromHash(), { replace: true, instant: true });
runBootIntro();
loadPhotoFrames();
updateProgress();
