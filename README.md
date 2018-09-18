# MobileAdaptation
移动端适配

1. 绘制设计稿：选定一款手机作为设计基准，比如iPhone6，设计稿宽度取决于这款手机的dom宽度
2. 修改所选手机的默认宽度：980px，除了iPad Pro，其他都是980px
   <meta name="viewport" content="width=device-width, initial-scale={-scale-} />
>  {-scale-} = 1 / window.devicePixelRatio
3. js动态设置html的font-size属性
4. px → rem，完成适配

在这个过程中，我们不需要关注手机的分辨率，要关注的值：
* document.documentElement.clientWidth || document.body.clientWidth
* window.devicePixelRatio
* device-width: window.screen.width

### 还需要注意的一些规则：
1. 文字流式
2. 控件水平弹性
3. 图片等比缩放，2x, 3x
