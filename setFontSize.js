/*
 * 设置fontSize基准 
 */
 
(function (doc, win) {
  var html = win.document.documentElement;
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  /* 
   * 当设计稿宽度是750px时，一般font-size设置100px
   * 1rem = 100px
   */
   
   var refreshRem = function () {
     var clientWidth = html.clientWidth || doc.body.clientWidth;
     if (!clientWidth) return;
     var fontSize = 100 * clientWidth / 750;  // 默认设计稿iPhone6的750px
     html.style.fontSize = fontSize + 'px';
   };
   
   if (!doc.addEventListener) return;
   win.addEventListener(resizeEvt, refreshRem, false);
   doc.addEventListener('DOMContentLoaded', refreshRem, false);
   refreshRem();
})(document, window);
