$(function () {
  // ハンバーガーボタン、マスク画面、ハンバーガーメニューの文字をクリックで切替
  $(
    ".js-burger-btn , .mask , .burger-menu-nav .burger-menu-nav-in li a , .burger-menu-nav .burger-menu-nav-out li a"
  ).on("click", function () {
    // ハンバーガーボタンの切替
    $(".burger-btn-line").toggleClass("open");
    // マスク画面の切替
    $(".mask").toggleClass("open");
    // ハンバーガーメニューの切替
    $(".burger-menu").toggleClass("open");
  });

  // ページトップボタン
  var pageTopBtn = $(".js-page-top-btn");
  // トップからのスクロール位置で発動
  $(window).scroll(function () {
    // トップからの位置が700pxを越えたら表示
    if ($(this).scrollTop() > 700) {
      pageTopBtn.addClass("fadeIn");
      // トップからの位置が700px以下だったら非表示
    } else {
      pageTopBtn.removeClass("fadeIn");
    }
  });

  pageTopBtn.on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});
