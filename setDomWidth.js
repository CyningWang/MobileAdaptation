/*
 * document.body.clientWidth
 * 默认：980px，除了iPad Pro，凡是 > 980px的，都显示PC端的
 * 设置方式：通过meta元素设置viewport理想视口
 * 常规：<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
 */
 
 // 动态设置document.body.clientWidth
 (function (doc, win) {
    var html = win.document.documentElement;   // html
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var dpr = win.devicePixelRatio;
    var scale = 1 / dpr;
    
    // 动态改写viewport
    html.setAttribute('data-dpr', dpr);
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale' + scale + ',minimum-scale=' + scale + ', user-scalable=no');
        html.firstElementChild.appendChild(metaEl);
    } else {
        metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale' + scale + ',minimum-scale=' + scale + ', user-scalable=no');
    }
})(document, window);
