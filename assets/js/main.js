const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
  
    // If we need pagination
    pagination: {
      enabled: false
    },
  
    // Navigation arrows
    navigation: {
      enabled: false
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      enabled: true,
      draggable: true
    },
    mousewheel: {
      releaseOnEdges: true,
    },
    parallax: {
        enabled: true,
    },
    on: {
        init() {
            console.log('swiper initialized');
        },
        slideChangeTransitionStart(swiper){
            $('.swiper-slide').find('.text').removeClass(['animate__animated','animate__fadeInDown']);
        },
        beforeSlideChangeStart(swiper){
            $('.swiper-slide-active').find('.text').addClass(['animate__animated','animate__fadeInDown']);
        }
    },
});


