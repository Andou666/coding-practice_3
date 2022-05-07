{
$(function () {

    //ページ内スクロール
    $('a[href^="#"]').on('click', function () {
      console.log("click");
      const speed = 300;
      const href = $(this).attr("href");
      const target = $(href == "#" || href == "" ? 'html' : href);
      const position = target.offset().top;
      $("html, body").animate({
        scrollTop: position
      }, speed, "swing");
      console.log(target);
      return false;
    });

    //ページトップへ戻る
    const $pageTop = $('.page-top');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $pageTop.fadeIn();
      } else {
        $pageTop.fadeOut();
      }
    });
    $pageTop.on('click', function () {
      $('body,html').animate({
        scrollTop: 0
      }, 300);
      return false;
    });


});
}