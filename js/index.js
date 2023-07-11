
function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu_button', '.burger-menu_lines');
  let links = menu.find('.burger-menu_link');
  let overlay = menu.find('.burger-menu_overlay');

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();

  });

  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass('burger-menu_active');

    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');




var tab;
var tabContent;
var bar;

window.onload = function () {
  tabContent = document.getElementsByClassName('tabContent');
  tab = document.getElementsByClassName('tab');
  bar = document.querySelectorAll('.progress-bar');
  hideTabsContent();
  tabContent[0].classList.add('show');
  tab[0].classList.add('active');
  bar[0].style.width = '20%';
}

function hideTabsContent() {
  for (let i = 0; i < tab.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
    tab[i].classList.remove('active');
  }
}
function showTabsContent(index) {
  if (tabContent[index].classList.contains('hide')) {
    hideTabsContent();
    tabContent[index].classList.add('show');
    tabContent[index].classList.remove('hide');
    tab[index].classList.add('active');
    let progress = (index + 1) / 5 * 100;
    bar[0].style.width = progress + '%';
    bar[0].style.backgroundColor = '#4987e3';
    bar[0].style.boxShadow = 'none';
    if (index == 4) {
      bar[0].style.backgroundColor = '#4987e3';
      bar[0].style.boxShadow = '0px 0px 10px #4987e3';
    }
  }
}
document.getElementById('tabs').onclick = function (event) {
  let target = event.target;
  if (target.className == 'tab') {
    for (let i = 0; i < tab.length; i++) {
      if (target == tab[i]) {
        showTabsContent(i);
        break;
      }
    }
  }
}





setTimeout(() => {
  var text = $('.typewriter').text();

  var length = text.length;
  var timeOut;
  var character = 0;


  (function typeWriter() {
    timeOut = setTimeout(function () {
      character++;
      var type = text.substring(0, character);
      $('.typewriter').text(type);
      typeWriter();

      if (character == length) {
        clearTimeout(timeOut);
      }

    }, 100);
  }());

}, 2000);