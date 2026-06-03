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
const helloSlides = [...document.querySelectorAll(".hello-slide")];
const helloSequence = [
  { label: "English", status: "English / handwriting hello", hold: 2400 },
  { label: "中文", status: "中文 / 正在写入个人世界", hold: 2300 },
  { label: "Español", status: "Español / escribiendo hola", hold: 2400 },
  { label: "日本語", status: "日本語 / こんにちはを書いています", hold: 3400 },
  { label: "한국어", status: "한국어 / 안녕하세요 쓰는 중", hold: 3300 }
];

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
  bootScreen.classList.add("is-exiting");
  body.classList.remove("boot-locked", "is-starting");
  body.classList.add("is-awake");

  window.setTimeout(() => {
    bootScreen.remove();
    toast("ZS_OS 已启动");
  }, 720);
}

function runBootIntro() {
  if (!bootScreen || !enterSite) {
    body.classList.remove("boot-locked");
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let index = 0;
  let timer = 0;

  function restartHelloSlide(slide) {
    if (!slide) return;

    const animatedParts = slide.querySelectorAll(".handwritten-word");
    animatedParts.forEach((part) => {
      part.style.animation = "none";
    });
    slide.style.setProperty("--restart", Date.now());

    void slide.getBoundingClientRect();

    animatedParts.forEach((part) => {
      part.style.animation = "";
    });
    slide.classList.add("is-active");
  }

  function showHello(nextIndex) {
    const slideCount = Math.max(helloSlides.length, helloSequence.length);
    index = Math.min(nextIndex, slideCount - 1);

    helloSlides.forEach((slide) => {
      slide.classList.remove("is-active");
    });
    restartHelloSlide(helloSlides[index]);

    const progress = Math.round(((index + 1) / slideCount) * 100);
    updateBootScreen(progress);

    if (bootStatus) {
      bootStatus.textContent = helloSequence[index]?.status || "hello / handwriting sequence";
    }

    if (index === slideCount - 1) {
      window.clearTimeout(timer);
      window.setTimeout(() => {
        if (bootStatus) bootStatus.textContent = "你好，欢迎进入 zhangsiyang.co";
        enterSite.disabled = false;
        enterSite.focus({ preventScroll: true });
      }, reducedMotion ? 120 : (helloSequence[index]?.hold || 1800));
      return;
    }

    timer = window.setTimeout(
      () => showHello(index + 1),
      reducedMotion ? 180 : (helloSequence[index]?.hold || 2200)
    );
  }

  showHello(0);

  enterSite.addEventListener("click", releaseBootScreen);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !enterSite.disabled && bootScreen.isConnected) {
      releaseBootScreen();
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

document.querySelectorAll("[data-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.getAttribute("data-target"));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

bootButton?.addEventListener("click", () => {
  body.classList.remove("is-starting");
  body.classList.add("is-awake");
  bootButton.textContent = "系统已启动";
  toast("zhangsiyang.co 已启动");
  window.setTimeout(() => {
    document.querySelector("#story")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 520);
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
  toast("域名已复制");
});

runBootIntro();
loadPhotoFrames();
updateProgress();
