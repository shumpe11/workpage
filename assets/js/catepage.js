"use strict";

let userAgent = window.navigator.userAgent;
let browserBackEvent = 0;
let currentWorkId = ''
let pathObj = {
  // game
  dodge:'0067/02/index',
  yandere:'0138/01/index',
  kingyo:'0160/01/index',
  robot:'0160/02/index',
  pingpong:'0398/01/index',
  clione:'0379/01/index',
  marubatsu:'0508/01/index',
  english:'0515/02/index',
  quiz:'0009/02/index',
  fish:'0332/02/index',
  piano:'0009/01/index',

  // anime2d
  countdown:'0111/02/index',
  emoji:'0468/01/emoji',
  rain:'0332/01/index',
  clock:'0398/02/index',
  firework:'0379/02/index',
  snow:'0515/01/index',

  // anime3d
  solarsystem:'0111/01/index',
  explosion:'0468/02/explosion',
  wave:'0468/03/rainbowCube',

  // drawing
  makeart:'0067/01/index',
  drawart:'0138/02/index',
  drawing:'0480/資料/まとめサイト/01/index(お絵描き)'
}






// jQuery(function() {
//   let appear = false;
//   let pagetop = $('#page_top');
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
//       if (appear == false) {
//         appear = true;
//         pagetop.stop().animate({
//           'bottom': '50px' //下から50pxの位置に
//         }, 300); //0.3秒かけて現れる
//       }
//     } else {
//       if (appear) {
//         appear = false;
//         pagetop.stop().animate({
//           'bottom': '-50px' //下から-50pxの位置に
//         }, 300); //0.3秒かけて隠れる
//       }
//     }
//   });
//   pagetop.click(function () {
//     $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
//     return false;
//   });
// });
//
// $(function(){
//         var amount = 200; //スクロール量（px）
//         $('#pagetop').hide();
//
//         $(window).scroll(function(){
//             var scrollPoint = $(this).scrollTop();
//             (scrollPoint > amount)?$('#pagetop').fadeIn():(scrollPoint < amount)?$('#pagetop').fadeOut():$('#pagetop').show();
//         });
//     });
//




// ウィンドウサイズが768px以上のとき
if (matchMedia('(min-width: 768px)').matches) {

  // モーダルウィンドウ調整
  $(".modal-body").wrapInner('<div class="row"></div>')

  // ブラウザがEdge以外のとき&ブラウザバックで訪れていない場合
  if(userAgent.indexOf('Edge') == -1) {

    //読み込み時にcardが落ちてくるアニメーションを付与するクラスを作品全体に設定
    $("#workContainer").addClass("animate__animated animate__slideInDown animate__slow");

    // モーダルウィンドウサイズ調整
    $('#modal').children('.modal-dialog').addClass("modal-lg")

    //アニメーション終了後、作品の説明テキストがスライド表示されるように
    setTimeout(function(){
      $('.slideIn').slideToggle();
      $('.moimg').removeClass('border-bottom');
      // $('header').addClass('shadow');
      $('header').addClass('sticky-top');
    },2000)

  } else{
    $('header').addClass('sticky-top');

  }
} else {
  $('header').addClass('sticky-top');
}

$('.navbar-toggler').on('click', function() {
  $('.nav-link').addClass("animate__animated animate__fadeInUp");
});

$(function() {
  var h = $(window).height();

  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});

$(window).on('load', function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});

//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);
});

function stopload(){
  $('#wrap').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}




$('.workWrapper').on('click', function() {
  let currentWorkId = $(this).attr('id').replace(/\s/g,'');
  let modalTitle = $("#"+currentWorkId).find('.card-title')[0].textContent;
  let modalText = $("#"+currentWorkId).find('.card-text')[0].textContent;
  let currentPath = pathObj[currentWorkId];

    $("#modalGif").attr('src','assets/img/' + currentWorkId + '.PNG');
    $("#modalGif").attr('src','assets/img/' + currentWorkId + '.gif');
    $("#modalGif").on('load', function(){$("#loading").remove(); });

    // console.log("aa")
    // $("#modalGif").attr('src','assets/img/' + currentWorkId + '.PNG');

  // $("#modalGif").attr('width','800');
  // $("#modalGif").attr('height','800');
  $(".workTitle")[0].textContent = modalTitle;
  $(".workTitle")[1].textContent = modalTitle;
  $("#modalDescription")[0].textContent = modalText;

  $("#show-detail").attr('href','work/' + currentPath + '.html');
});
