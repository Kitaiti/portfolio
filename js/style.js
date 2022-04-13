$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.header__menu').addClass('active');
        } else {
            $('.header__menu').removeClass('active');
        }
    });
});

var fadeConts = document.querySelectorAll('.twitter__main'); // フェードさせる要素の取得
var fadeContsRect = []; // 要素の位置を取得するための配列
var fadeContsTop = []; // 要素の位置を取得するための配列
var windowY = window.pageYOffset; // ウィンドウのスクロール位置
var windowH = window.innerHeight; // ウィンドウの高さ
var remainder = 100; // ちょっとはみ出させる部分

// 要素の位置を取得
for (var i = 0; i < fadeConts.length; i++) {
  fadeContsRect.push(fadeConts[i].getBoundingClientRect());
}
for (var i = 0; i < fadeContsRect.length; i++) {
  fadeContsTop.push(fadeContsRect[i].top + windowY);
}

// ウィンドウがリサイズされたら、ウィンドウの高さを再取得
window.addEventListener('resize', function () {
  windowH = window.innerHeight;
  console.log(windowH);
});

// スクロールされたら
window.addEventListener('scroll', function () {
  // スクロール位置を取得
  windowY = window.pageYOffset;
  console.log(windowY);
  
  for (var i = 0; i < fadeConts.length; i++) {
    // 要素が画面の下端にかかったら
    if(windowY > fadeContsTop[i] - windowH + remainder) {
      // .showを付与
      fadeConts[i].classList.add('show');
    } else {
      // 逆に.showを削除
      fadeConts[i].classList.remove('show');
    }
  }
});
