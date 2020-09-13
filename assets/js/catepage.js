"use strict";

let userAgent = window.navigator.userAgent;
let browserBackEvent = 0;
let currentWorkId = ''
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

// anime2d
countdown:'0111/02/index',
emoji:'0468/01/emoji',
rain:'0332/01/index',
clock:'0398/02/index',
firework:'0379/02/index',
snow:'0515/01/index',
moya:'0475/01/index',

// anime3d
solarsystem:'0111/01/index',
explosion:'0468/02/explosion',
wave:'0468/03/rainbowCube',

// drawing
makeart:'0067/01/index',
drawart:'0138/02/index',
drawing:'0480/資料/まとめサイト/01/index(お絵描き)'
}

// ウィンドウサイズが768px以上のときアニメーション適用
if (matchMedia('(min-width: 768px)').matches) {

// モーダルウィンドウ調整
$(".modal-body").wrapInner('<div class="row"></div>')

// ブラウザがEdge以外のとき
if(userAgent.indexOf('Edge') == -1) {
  //読み込み時にcardが落ちてくるアニメーションを付与するクラスを作品全体に設定
  $("#workContainer").addClass("animate__animated animate__slideInDown animate__slow");

  // モーダルウィンドウサイズ調整
  $('#modal').children('.modal-dialog').addClass("modal-lg")

  //アニメーション終了後、作品の説明テキストがスライド表示されるように
  setTimeout(function(){
    $('.slideIn').slideToggle();
    $('.moimg').removeClass('border-bottom');
    $('header').addClass('sticky-top');
  },2000)

} else{
    // Microsoft Edgeのときデザイン調整
    $('header').addClass('sticky-top');
    $('#lgTitle').removeClass('d-lg-block');
    $('#mdsmTitle').removeClass('d-lg-none');
    $('#wrap').removeClass('col-lg-5');
    $('#wrap').addClass('col-lg-12');
    $('#descriptionWrap').removeClass('col-lg-7');
    $('#descriptionWrap').addClass('col-lg-12');
    $('.card-text').css('border-bottom', '1px solid #fff');
  }
} else{
  $('header').addClass('sticky-top');
}


$('.navbar-toggler').on('click', function() {
$('.nav-link').addClass("animate__animated animate__fadeInUp");
});




$('.work-wrapper').on('click', function() {
let currentWorkId = $(this).attr('id').replace(/\s/g,'');
let modalTitle = $("#"+currentWorkId).find('.card-title')[0].textContent;
let modalText = $("#"+currentWorkId).find('.card-text')[0].textContent;
let currentPath = pathObj[currentWorkId];
let currentHandlename = $("#"+currentWorkId).find('.text-muted')[0].outerText;

$("#modalGif").attr('src','assets/img/' + currentWorkId + '.gif');
$(".modal-body-title")[0].textContent = modalTitle;
$(".modal-body-title")[1].textContent = modalTitle;
$("#modalDescription")[0].textContent = modalText;
$("#handlename")[0].textContent = currentHandlename;

$("#show-detail").attr('href','work/' + currentPath + '.html');
});
