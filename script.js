const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
});

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

function page4Animation() {
  const eleContainerSelector = document.querySelector('#elem-container');
  const fixed = document.querySelector('#fixedImage');

  eleContainerSelector.addEventListener(
    'mouseenter',
    () => (fixed.style.display = 'block')
  );
  eleContainerSelector.addEventListener(
    'mouseleave',
    () => (fixed.style.display = 'none')
  );

  const elems = document.querySelectorAll('.elem');
  elems.forEach((element) =>
    element.addEventListener('mouseenter', function () {
      const image = element.getAttribute('data-image');
      fixed.style.backgroundImage = `url('${image}')`;
    })
  );
}

function swiperAnimation() {}

swiperAnimation();
page4Animation();
