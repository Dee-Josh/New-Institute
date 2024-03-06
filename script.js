const heroSection = document.querySelector('.hero-section');

heroSection.addEventListener("drag",()=>{
    heroSection.style.cursor = 'grab'
})






// SWIPER

var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 1000,

    // Auto scroll

    autoplay: {
    delay: 5000, // Adjust the delay in milliseconds (5 seconds in this example)
    disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
    },

    // If you need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
        var customClass = ''; // Default class
        
        // Apply custom classes based on the index
        if (index === 0) {
          customClass = 'custom-style-1';
        } 
        else if (index === 1) {
          customClass = 'custom-style-2';
        }
        else if (index === 2) {
          customClass = 'custom-style-3';
        }
        else if (index === 3) {
          customClass = 'custom-style-4';
        }

        // return '<span class="' + className + ' ' + customClass + '"></span>';
        return `<span class = "${className} ${customClass}"></span>`;
      },
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
          var activeIndex = this.activeIndex;
        //   console.log('Active slide index:', activeIndex)
          if (activeIndex === 0) {
            heroSection.style.background = `linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)), url(/Img/bg-1.jpg)`
          } 
          else if (activeIndex === 1) {
            heroSection.style.background = `linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)), url(/Img/bg-2.png)`
          }
          else if (activeIndex === 2) {
            heroSection.style.background = `linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)), url(/Img/bg-3.png)`
          }
          else if (activeIndex === 3) {
            heroSection.style.background = `linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)), url(/Img/bg-4.png)`
          }
        }
    },
});