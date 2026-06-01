const root = document.documentElement;
const body = document.body;
const cursor = document.querySelector(".cursor");
const progressBar = document.querySelector(".progress span");
const copyDomain = document.querySelector("#copyDomain");
const bootButton = document.querySelector("#bootButton");

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

loadPhotoFrames();
updateProgress();
