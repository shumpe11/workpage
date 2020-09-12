"use strict";

let userAgent = window.navigator.userAgent;
let browserBackEvent = 0;
let checkTime = 0;
let previousTime;
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

    let currentTime = Date.now();
    previousTime = localStorage.getItem("previousTime");
    // 初回訪問時は1日経過と同じ
    if(previousTime == null){
      checkTime = 1;
      localStorage.setItem('previousTime', JSON.stringify(currentTime));
    } else{
      Number(previousTime);
      if (currentTime - previousTime >= 600000) {
        checkTime = 1;
      }
      localStorage.setItem('previousTime', JSON.stringify(currentTime));
    }




// ウィンドウサイズが768px以上のときアニメーション適用
if (matchMedia('(min-width: 768px)').matches) {

  // モーダルウィンドウ調整
  $(".modal-body").wrapInner('<div class="row"></div>')

  // ブラウザがEdge以外のとき&前回の訪問から10分経過
  if(userAgent.indexOf('Edge') == -1 && checkTime == 1) {

    //読み込み時にcardが落ちてくるアニメーションを付与するクラスを作品全体に設定
    $("#workContainer").addClass("animate__animated animate__slideInDown animate__slow");

    // モーダルウィンドウサイズ調整
    $('#modal').children('.modal-dialog').addClass("modal-lg")

    //アニメーション終了後、作品の説明テキストがスライド表示されるように
    setTimeout(function(){
    },2000)

  } else{
    $('header').addClass('sticky-top');
    $('.slideIn').removeClass('slideIn');
    $('.moimg').removeClass('border-bottom');

  }
} else {
  $('header').addClass('sticky-top');
}

$('.navbar-toggler').on('click', function() {
  $('.nav-link').addClass("animate__animated animate__fadeInUp");
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

  $("#modalGif").attr('src','assets/img/' + currentWorkId + '.gif');
  $(".workTitle")[0].textContent = modalTitle;
  $(".workTitle")[1].textContent = modalTitle;
  $("#modalDescription")[0].textContent = modalText;

  $("#show-detail").attr('href','work/' + currentPath + '.html');
});
