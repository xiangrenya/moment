## 开发过程中遇到的问题：

Q: 在vue组件中使用scss样式库
A: 需要安装sass-loader[依赖node-sass]

Q: 元素垂直居中，对齐的问题
A: 用弹性布局取代浮动的方式

Q: 各个popover组件之间共享同一个评论组件
A: 使用vuex集中管理组件的状态，使用mutations更新共享组件的状态

Q: 在popover和评论框出现后，点击屏幕其他位置，如何让他们隐藏
A: 在父组件中绑定cancelEdit方法，利用$refs.footer取得所有footer组件，遍历更新其显示的状态

Q: 点击评论图标的时候，如何让评论框自动聚焦
A: 利用过渡组件的钩子函数enter,通过$el找到input元素绑定focus方法
