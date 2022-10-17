const burgerButton = document.querySelector('button[data-button="menu"]');
const burgerMenu = document.querySelector('div[data-block="hidden-menu"]');

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('header__right-menu_active')
    burgerMenu.classList.toggle('header__burger_active');
})

const swiperWhen = new Swiper(".when__slider-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: true,
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 25
        }
    },
    navigation: {
        nextEl: 'button[data-button="next"]',
        prevEl: 'button[data-button="prev"]',
    },
});
const swiperReviews = new Swiper(".swiper-reviews", {
  slidesPerView: 3,
  spaceBetween: 25,
  allowTouchMove: true,
  breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      606: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      1230: {
        slidesPerView: 3,
        spaceBetween: 25
      }
  },
  navigation: {
      nextEl: 'button[data-btn="next"]',
      prevEl: 'button[data-btn="prev"]',
  },
});

const acc = document.querySelectorAll(".faq__accordion");
const names = document.querySelectorAll('.faq__accordion-name');
const questions = document.querySelectorAll('.faq__accordion-question');

acc.forEach((accordion, index) => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('faq__accordion_active');
    const panel = accordion.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      if (panel.classList.contains('faq__panel_active')) {
        panel.classList.remove('faq__panel_active');
      }
      if (names[index].classList.contains('faq__accordion-name_active')) {
        names[index].classList.remove('faq__accordion-name_active');
      }
      if (questions[index].classList.contains('faq__accordion-question_active')) {
        questions[index].classList.remove('faq__accordion-question_active');
      }
    } else {
      panel.style.maxHeight = panel.scrollHeight + 35 + "px";
      panel.classList.add('faq__panel_active');
      names[index].classList.add('faq__accordion-name_active');
      questions[index].classList.add('faq__accordion-question_active');
    } 
  })
})
const calcWidthScroll = () => {
  let div = document.createElement('div');

      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';

      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();
      document.body.style.minWidth = (320 - scrollWidth) + 'px';
      document.querySelector('.modal').style.minWidth = (320 - scrollWidth) + 'px';
      document.querySelector('.modal__dialog').style.minWidth = (320 - scrollWidth) + 'px';
}
calcWidthScroll();

const blockBody = () => {
  const body = document.body;
  const page = document.querySelector('html');
  body.style.overflowY = 'hidden';
  page.style.overflowY = 'hidden';
  const bodyScroll = calcScroll();
  // body.style.marginRight = `${bodyScroll}px`;
  page.style.marginRight = `${bodyScroll}px`;
}

const unBlockBody = () => {
  const body = document.body;
  const page = document.querySelector('html');
  body.style.overflowY = 'auto';
  page.style.overflowY = 'auto';
  page.style.marginRight = `0`;
}

const calcScroll = () => {
  let div = document.createElement('div');
  div.style.width = '500px';
  div.style.height = '500px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}

const modalButtons = document.querySelectorAll('[data-button="modal"]');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close');
modalButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('modal_active');
      blockBody();
  })
})
close.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.toggle('modal_active');
  unBlockBody();
});
const scroll = () => {
  const buttons = document.querySelectorAll('a[scroll]');
  const menu = document.querySelector('.header__burger');
  buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
          e.preventDefault();
          const blockId = btn.getAttribute('href');
          if (menu.classList.contains('header__burger_active')) {
              menu.classList.remove('header__burger_active')
          }
          document.querySelector(blockId).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      })
  })
}
scroll();
const maskInputs = () => {
  const inputs = document.querySelectorAll('input[data-input="tel"]');
  inputs.forEach(input => {
      let im = new Inputmask({
          mask: '(+7|8) (999) 999-99-99',
          showMaskOnHover: false,
          showMaskOnFocus: false,
          jitMasking: true,
          inputmode: 'tel'
      });
      im.mask(input);
  })
}
maskInputs();