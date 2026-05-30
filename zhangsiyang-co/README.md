# zhangsiyang.co

这是 Zhang Siyang 的个人网站第一版框架，目标是发布到 GitHub Pages 并绑定 `zhangsiyang.co`。

## 文件结构

- `index.html`：网页主体内容
- `styles.css`：视觉风格、响应式布局、动效
- `script.js`：滚动进度、鼠标光效、照片自动加载、复制域名
- `CNAME`：GitHub Pages 自定义域名文件，内容是 `zhangsiyang.co`
- `.nojekyll`：让 GitHub Pages 按普通静态文件发布
- `assets/photos/`：放旅行、生活、人像照片
- `assets/resume/`：放 PDF 简历或简历素材
- `content/`：放经历、简历、照片说明等原始资料

## 下一步怎么填内容

1. 把你的照片放到 `assets/photos/`。
2. 优先准备这些文件名：
   - `hero.jpg`
   - `city.jpg`
   - `life.jpg`
   - `travel-01.jpg`
   - `life-01.jpg`
   - `city-01.jpg`
   - `food-01.jpg`
   - `friends-01.jpg`
3. 把你的简历 PDF 放到 `assets/resume/`。
4. 把经历材料写进 `content/profile.md` 和 `content/resume.md`。
5. 让 Codex 继续把占位内容改成真实内容。

## 给 Codex 的下一句提示词

```text
请继续完善 zhangsiyang.co。
我已经把照片放进 assets/photos，把简历资料放进 content。
请读取这些内容，把网页里的占位文字改成真实版本，并用浏览器检查桌面和手机效果。
```
