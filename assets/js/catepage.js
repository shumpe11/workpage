"use strict";

let currentWorkId = ''
const userAgent = window.navigator.userAgent;
const pathObj = {
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
solarsystemQuiz:'0508/02/index',
sakegame:'0480/資料/まとめサイト/02/gameHP',

// anime2d
countdown:'0111/02/index',
emoji:'0468/01/emoji',
rain:'0332/01/index',
clock:'0398/02/index',
firework:'0379/02/index',
snow:'0515/01/index',
moya:'0475/01/index',
fall:'0475/02/index',

// anime3d
solarsystem:'0111/01/index',
explosion:'0468/02/explosion',
wave:'0468/03/rainbowCube',

// drawing
makeart:'0067/01/index',
drawart:'0138/02/index',
drawing:'0480/資料/まとめサイト/01/index(お絵描き)'
}

// xs以外のときアニメーション適用
if (matchMedia('(min-width: 768px)').matches) {

  // モーダルウィンドウ調整
  $(".modal-body").wrapInner('<div class="row"></div>')

  // ブラウザがEdge以外のとき
  if(userAgent.indexOf('Edge') == -1) {
    //読み込み時にcardが落ちてくるアニメーションを付与するクラスを作品全体に設定
    $(".container").addClass("animate__animated animate__slideInDown animate__slow");

    // モーダルウィンドウサイズ調整
    $('#modal').children('.modal-dialog').addClass("modal-lg")

  //アニメーション終了後、作品の説明テキストがスライド表示されるように(slideToggle)
    setTimeout(function(){
      $('.slideIn').slideToggle();
      $('.moimg').removeClass('border-bottom');
      $('header').addClass('sticky-top');
    },2000)

  } else {
    // Microsoft Edgeのときデザイン調整
    $('header').addClass('sticky-top');
    $('#lg-title').removeClass('d-lg-block');
    $('#mdsm-title').removeClass('d-lg-none');
    $('#wrap').removeClass('col-lg-5');
    $('#wrap').addClass('col-lg-12');
    $('#modal-body-description-wrap').removeClass('col-lg-7');
    $('#modal-body-description-wrap').addClass('col-lg-12');
    $('.card-text').css('border-bottom', '1px solid #fff');
  }
} else {
  // xsは固定ヘッダーのみ
  $('header').addClass('sticky-top');
}


$('.navbar-toggler').on('click', function() {
  $('.nav-link').addClass("animate__animated animate__fadeInUp");
});

if(userAgent.indexOf('Edge') == -1) {
  $('#modal').on('hidden.bs.modal', function () {
    // モーダルが閉じられたときのアニメーション
  $("#" + currentWorkId).removeClass("animate__animated animate__fadeOutUp");
  $("#" + currentWorkId).addClass("animate__animated animate__fadeInDown animate__fast");
    setTimeout(function(){
      $("#" + currentWorkId).removeClass("animate__animated animate__fadeInDown");
      $('header').addClass('sticky-top');
    },500)
  })
}


$('.work-wrapper').on('click', function() {
currentWorkId = $(this).attr('id').replace(/\s/g,'');
let modalTitle = $("#"+currentWorkId).find('.card-title')[0].textContent;
let modalText = $("#"+currentWorkId).find('.card-text')[0].textContent;
let currentPath = pathObj[currentWorkId];
let currentHandlename = $("#"+currentWorkId).find('.text-muted')[0].outerText;

if(userAgent.indexOf('Edge') == -1) {
  $('header').removeClass('sticky-top');
  $("#" + currentWorkId).addClass("animate__animated animate__fadeOutUp animate__fast");
  // $(".slideIn").slideToggle();

  $('[data-toggle=modal]').on('click', function (e) {
    let $target = $($(this).data('target'));
    $target.data('triggered',true);
    setTimeout(function() {
      if ($target.data('triggered')) {
        $target.modal('show')
        .data('triggered',false); // prevents multiple clicks from reopening
      };
    }, 500); // milliseconds
    return false;
  });
}

$("#modal-gif").attr('src','assets/img/' + currentWorkId + '.gif');
$(".modal-body-title")[0].textContent = modalTitle;
$(".modal-body-title")[1].textContent = modalTitle;
$("#modal-body-description")[0].textContent = modalText;
$("#handlename")[0].textContent = currentHandlename;

$("#show-detail").attr('href','work/' + currentPath + '.html');
});
