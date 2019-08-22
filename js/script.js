'use strict';

$(function() {
  // __________________________________________________ RANDOM COLOR
  let colors = ["afd180", "74c9dd", "df1c1c", "eddf1e"];
  let random = Math.floor((Math.random() * 4) + 0);
  let randomColor = colors[random];
  console.log(randomColor);
  $('button').css({
    'border-color': `#${randomColor}`
  });
  $('a').css('color',`#${randomColor}`);

  // __________________________________________________ COLOR in nav
  $('.active').css("border-bottom-color", `#${randomColor}`);
  $('#mainnav li a').mouseover(function() {
    $(this).css('border-bottom-color', `#${randomColor}`);
  });
  $('#mainnav li a').mouseout(function() {
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
    case 'eddf1e':
      $('h3').addClass('bColor4');
      break;
  }

  // __________________________________________________ COLOR in button

  $('button').css("background", `#${randomColor}`);

  // __________________________________________________ SEARCH
  $('#search-btn').click(function() {
    if ($('#search').hasClass('s-none')) {
      $('#search').removeClass('s-none');
      $('#search').addClass('s-flex');
      $('#searchInput').focus();
    }
  });
  $('#search').click(function() {
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

  window.onscroll = function() {
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
