## 前言

设计师通过临摹大师的作品，通过不断的比较，细致入微的观察，才能感受到大师的所思所想。

> good artists copy, great artist steal.

能工摹形，巧匠窃意。

目标：模仿微信朋友圈页面，从UI, 交互，到功能。

## 技术栈

vue2 + vuex + vue-router + webpack + es6 + axios + easy-mock + scss + flex

## 项目运行

注意：由于涉及大量的 es6 等新属性，node 需要 6.0 以上版本

``` javascript
git clone https://github.com/renyaxiang/Moment.git
cd Moment
npm install
npm run dev
```

## GitHub Pages

修改webpack配置文件的output改成根目录下的docs目录中，运行npm run build，编译后的产线资源都在docs目录下了，修改index.html中link,script中路径前的/去掉，最后把GitHub Pages的source选项切换为master brach/docs folder。

## 目标功能

- [x] 动态列表
- [x] 点赞
- [x] 评论

## 效果演示

[查看demo请戳这里](https://xiangrenya.github.io/moment)（请用chrome手机模式预览）

移动端扫描下方二维码

![image](screenshots/qrcode.png)

部分截图

![image](screenshots/record.gif)






