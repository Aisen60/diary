# diary

### 一个使用 nuxtjs 写的博客
仓库地址:[https://github.com/Aisen60/diary](https://github.com/Aisen60/diary)

### 为什么要重写？
- 因为之前的那个blog啊，做的不好，很丑，数据请求也很慢（当然国内访问github api 确实会有影响）。
- 不利于seo搜索，
- 想玩一玩nuxt，但是没有项目练手，只能拿这个blog来练手。

### diary做了哪些东西？
后来我就想到了，把 github 的所有的issues都放到gitee上把，然后就迁移过来了，接口请求的数据也还挺快的。

改了布局，相对来说会好看了很多，也加了响应性，文章加上了图片，都是一些我用过的桌面背景，这个图片也是放大gitee上的，压缩过，相对来说已经小了很多了。

修改了 about 页面，把什么介绍什么的都去掉了，就留下了一个微信号，用了base64加密，不想给seo。

这个项目用到了 github actions 来自动化部署，这又是一个我接触到学习到的地方，感觉还挺好用的，而且上网搜索资料，也找到了关于如何缓存yarn、node_module的方法。

当然做出来了，心理也是挺满足的，因为基本上学会了nuxtjs，也就那样子。

演示地址：[https://diary.vercel.app](https://diary.vercel.app)