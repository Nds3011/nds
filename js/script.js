'use strict';

$(function () {

  // __________________________________________________ LIGHTSLIDER
  $(".light-slider").lightSlider({
    item: 5,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 10,

    addClass: '',
    mode: "slide",
    useCSS: true,
    cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: 'linear', //'for jquery animation',////

    speed: 400, //ms'
    auto: true,
    pauseOnHover: true,
    loop: true,
    slideEndAnimation: true,
    pause: 3000,

    keyPress: true,
    controls: true,
    prevHtml: '',
    nextHtml: '',

    rtl: false,
    adaptiveHeight: false,

    vertical: false,
    verticalHeight: 500,
    vThumbWidth: 100,

    thumbItem: 10,
    pager: true,
    gallery: false,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: 'middle',

    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 40,

    responsive: [{
        breakpoint: 800,
        settings: {
          item: 3,
          slideMove: 1,
          slideMargin: 6,
        }
      },
      {
        breakpoint: 480,
        settings: {
          item: 2,
          slideMove: 1
        }
      }
    ],

    onBeforeStart: function (el) {},
    onSliderLoad: function (el) {
      $('.lSSlideOuter .lSPager.lSpg > li.active a').css({
        'background-color': `#${randomColor}`
      });
    },
    onBeforeSlide: function (el) {},
    onAfterSlide: function (el) {
      $('.lSSlideOuter .lSPager.lSpg > li a').css({
        'background-color': '#222'
      });
      $('.lSSlideOuter .lSPager.lSpg > li.active a').css({
        'background-color': `#${randomColor}`
      });
    },
    onBeforeNextSlide: function (el) {},
    onBeforePrevSlide: function (el) {}
  });

  // __________________________________________________ RANDOM COLOR
  let colors = ["afd180", "74c9dd", "df1c1c"];
  let random = Math.floor((Math.random() * 3) + 0);
  let randomColor = colors[random];
  console.log(randomColor);

  $('button').css({
    'border-color': `#${randomColor}`
  });

  $('a').css('color', `#${randomColor}`);

  $('input[type=submit]').css({
    'background-color': `#${randomColor}`,
    'border-color': `#${randomColor}`
  });

  $('.ndscode span.code').css('color', `#${randomColor}`);
  
  // __________________________________________________ COLOR in nav
  $('.active').css("border-bottom-color", `#${randomColor}`);
  $('#mainnav li a').mouseover(function () {
    $(this).css('border-bottom-color', `#${randomColor}`);
  });
  $('#mainnav li a').mouseout(function () {
    $(this).css('border-bottom-color', `#fff`);
    $('#mainnav .active').css("border-bottom-color", `#${randomColor}`);
  });

  // __________________________________________________ COLOR in title
  switch (randomColor) {
    case 'afd180':
      $('h3').addClass('bColor1');
      break;
    case '74c9dd':
      $('h3').addClass('bColor2');
      break;
    case 'df1c1c':
      $('h3').addClass('bColor3');
      break;
  }

  // __________________________________________________ COLOR in button

  $('button').css("background", `#${randomColor}`);

  // __________________________________________________ SEARCH
  $('#search-btn').click(function () {
    if ($('#search').hasClass('s-none')) {
      $('#search').removeClass('s-none');
      $('#search').addClass('s-flex');
      $('#searchInput').focus();
    }
  });
  $('#search').click(function () {
    if ($('#searchInput').is(":focus")) {

    } else if ($('#search').hasClass('s-flex')) {
      $('#search').removeClass('s-flex');
      $('#search').addClass('s-none');
    }
  });

  // __________________________________________________ TYPING ANIMATION
  let heading = $('#banner h3');
  let data = ["Welcome to Next Digital Studio"];
  let j = 0;
  let i = 0;
  let k;

  function typing() {
    // if (heading.html().length === data[j].length) {
    //   k = 0;
    //   setTimeout(del, 1200);
    // }
    if (i < data[j].length) {
      heading.append(data[j].charAt(i));
      i++;
      setTimeout(typing, 50);
    } else {
      j++;
      i = 0;
      k = 0;
      setTimeout(typing, 3000);
    }
    // if (j === data.length) {
    //   j = 0;
    // }
  }
  // function del() {
  //   if (heading.html().length == 0) {
  //     clearTimeout(time);
  //   } else {
  //     heading.text(heading.text().slice(0, heading.text().length - k));
  //     k++;
  //     let time = setTimeout(del, 100);
  //   }
  // }

  typing();

  //__________________________________________________ STICKY NAV

  window.onscroll = function () {
    myFunction()
  };

  var navbar = document.getElementById("mainnav");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      $('.topNav').css('padding-bottom', '70px');
    } else {
      navbar.classList.remove("sticky");
      $('.topNav').css('padding-bottom', '15px');
    }
  }
});