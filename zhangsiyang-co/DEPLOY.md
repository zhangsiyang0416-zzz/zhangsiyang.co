# 发布到 GitHub Pages + 绑定 zhangsiyang.co

你的域名当前没有指向 GitHub Pages。检查结果显示，`zhangsiyang.co` 和 `www.zhangsiyang.co` 目前都指向 `185.53.179.146`。网站文件已经准备好，接下来要做两件事：GitHub 发布、域名 DNS 指向。

## 1. 在 GitHub 新建仓库

推荐仓库名：

```text
zhangsiyang.co
```

如果你想用用户主页仓库，也可以叫：

```text
你的GitHub用户名.github.io
```

新手建议先用 `zhangsiyang.co`，因为目标明确。

## 2. 上传这些文件

把整个 `zhangsiyang-co` 文件夹里的内容上传到仓库根目录。根目录里必须能看到：

- `index.html`
- `styles.css`
- `script.js`
- `CNAME`
- `.nojekyll`
- `assets/`
- `content/`

## 3. 打开 GitHub Pages

在仓库页面：

1. 进入 `Settings`
2. 左侧点 `Pages`
3. Source 选择 `Deploy from a branch`
4. Branch 选择 `main` 和 `/root`
5. 保存

等 GitHub 显示站点地址后，先确认 GitHub Pages 临时地址能打开。

## 4. 域名 DNS 设置

在你购买 `zhangsiyang.co` 的域名商后台，找到 DNS 管理。

根域名 `zhangsiyang.co` 添加 4 条 A 记录：

| 类型 | 主机名 | 值 |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

如果你还想让 `www.zhangsiyang.co` 也能访问：

| 类型 | 主机名 | 值 |
| --- | --- | --- |
| CNAME | www | 你的GitHub用户名.github.io |

## 5. GitHub Pages 自定义域名

在 GitHub 仓库：

1. 进入 `Settings`
2. 点 `Pages`
3. Custom domain 填：

```text
zhangsiyang.co
```

4. 保存
5. DNS 生效后勾选 `Enforce HTTPS`

## 6. 注意

- DNS 生效可能几分钟，也可能最长 24 小时左右。
- 密码、验证码、付款、域名后台登录必须你自己操作。
- 不要删除 `CNAME` 文件，它告诉 GitHub 这个站绑定 `zhangsiyang.co`。

## 官方参考

- GitHub Pages Quickstart: https://docs.github.com/en/pages/quickstart
- Managing a custom domain for GitHub Pages: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
