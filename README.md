# Gatsby-Tutorials-All-In-One

> cnblogs 迁移项目

https://cnblogs.xgqfrms.xyz/

## CLI

```sh
# create `static-website`
$ npm init gatsby
# 1. 交互式, 问答确认, ts & project-name

# 使用 `&&` 串行执行多个 Linux Shell 命令
$ cd static-website && gatsby develop

$ gatsby build

$ gatsby serve

```

> CLI `flags`

```sh
# ts version
$ npm init gatsby -y -ts my-site-name
# 2. 命令式, -y 无需交互问答确认, 直接指定 ts & project-name


```

https://github.com/gatsbyjs/gatsby-starter-minimal

https://github.com/gatsbyjs/gatsby-starter-minimal-ts

## demos

1. `/static/CNAME` ✅ 
2. custom domain

![](https://img2022.cnblogs.com/blog/740516/202208/740516-20220801021140400-1187664298.png)


https://gatsby-react-app.xgqfrms.xyz/

~~https://abc.xgqfrms.xyz/gatsby-react-app/~~

<!-- https://cnblogs.xgqfrms.xyz/

https://github.com/xgqfrms/cnblogs/blob/gh-pages/docs/CNAME -->


<img width="981" alt="image" src="https://user-images.githubusercontent.com/7291672/182037819-e44d4827-0e0f-40b9-9568-9f68b027ea2c.png">


## CI/CD 自动化构建部署流程

1. 手动复制 readme 到 static 文件夹

2. gatsby build 会自动把 static 文件夹下的文件复制到 构建出来的 public 文件下

3. 所以 Action 只要指定 CI/CD 发布部署的根目录 folder 为 public 即可

```js
  "scripts": {
    "copy": "cp ./README.md ./static/",
    "deploy": "npm run copy && gatsby build",
  },
```

```yml
# ...
      - name: Deploy to gh-pages 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: public
          # The folder the action should deploy.
          token: ${{ secrets.ACCESS_TOKEN }}
```

[deploy-gh-pages.yml](.github/workflows/deploy-gh-pages.yml)

## refs

https://www.gatsbyjs.com/docs/

https://www.gatsbyjs.com/docs/tutorial/

<!-- 

gatsby videos

https://egghead.io/q?access_state=free&q=gatsby


https://egghead.io/lessons/gatsby-use-gatsby-image-with-an-image-from-a-relative-path

 -->

