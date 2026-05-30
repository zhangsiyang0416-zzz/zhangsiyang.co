# 下一步：让 zhangsiyang.co 真的能被别人打开

网站已经在本机做好了，但别人现在还看不到。你还需要完成 GitHub 发布和域名 DNS 设置。

## 当前状态

- 网站文件夹：`/Users/zhangsiyang/Documents/vibe coding/zhangsiyang-co`
- 绑定域名文件：`CNAME`，内容已经是 `zhangsiyang.co`
- 当前域名解析：`zhangsiyang.co` 和 `www.zhangsiyang.co` 目前都指向 `185.53.179.146`
- 这个地址不是 GitHub Pages，所以需要改 DNS

## 第一步：创建 GitHub 仓库

1. 打开 GitHub。
2. 点右上角 `+`。
3. 选 `New repository`。
4. 仓库名填：`zhangsiyang.co`
5. 选择 `Public`。
6. 点 `Create repository`。

## 第二步：上传网站文件

把 `zhangsiyang-co` 文件夹里的内容上传到仓库根目录。

根目录必须能看到：

- `index.html`
- `styles.css`
- `script.js`
- `CNAME`
- `.nojekyll`
- `assets`
- `content`

## 第三步：开启 GitHub Pages

1. 打开仓库。
2. 点 `Settings`。
3. 左边点 `Pages`。
4. Source 选 `Deploy from a branch`。
5. Branch 选 `main` 和 `/root`。
6. 保存。

## 第四步：设置域名 DNS

在你买域名的地方，找到 DNS 管理。

删除或替换现在指向 `185.53.179.146` 的记录。

添加这 4 条 A 记录：

| 类型 | 主机名 | 值 |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

再添加或修改 `www`：

| 类型 | 主机名 | 值 |
| --- | --- | --- |
| CNAME | www | 你的GitHub用户名.github.io |

## 第五步：在 GitHub Pages 填域名

1. 回到仓库 `Settings` → `Pages`。
2. Custom domain 填：`zhangsiyang.co`
3. 保存。
4. 等 DNS 生效后，勾选 `Enforce HTTPS`。

## 你可以直接对 Codex 说

```text
请用浏览器陪我发布 zhangsiyang.co。
我会自己登录 GitHub 和域名商。
遇到密码、验证码、付款、删除记录、公开发布前，请停下来让我确认。
```
