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
var fadeslang = document.querySelectorAll(".skill__lang");
console.log(fadeConts,fadeslang);
var fadeContsRect = []; // 要素の位置を取得するための配列
var fadeContsTop = []; // 要素の位置を取得するための配列
var fadeslangRect = [];
var fadeslangTop = [];
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
    }
  }

});


// プロフィール画像
let profimg = document.querySelector(".about__img");
console.log(profimg);

window.addEventListener("load",function(){
  profimg.setAttribute("class" ,"return about__img");
});


// マウスカーソル
//準備
let cursorR = 4;  //カーソルの半径
let cousor = document.querySelector(".cursor");

//上記のdivタグをマウスに追従させる処理
document.addEventListener('mousemove', function (e) {
    cousor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

//リンクにホバー時はクラスをつける
const linkElem = document.querySelectorAll('a');
for (let i = 0; i < linkElem.length; i++) {
    linkElem[i].addEventListener('mouseover', function (e) {
        cousor.classList.add('hov_');
    });
    linkElem[i].addEventListener('mouseout', function (e) {
        cousor.classList.remove('hov_');      
    });
}
