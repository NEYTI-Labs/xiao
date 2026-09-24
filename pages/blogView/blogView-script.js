import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function initBlogView() {

  const GallerySlider = document.querySelector('.blogView-gallery_slider');

    if (GallerySlider) {
        const GalleryItem = GallerySlider.querySelectorAll('.blogView-gallery_item');

        const nextBtn = document.querySelector('.blogView-gallery_next');
        const prevBtn = document.querySelector('.blogView-gallery_prev');

        if (GalleryItem.length <= 1) {
            GallerySlider.classList.remove('swiper');
            GalleryItem.forEach(slide => slide.style.width = '100%');

            if (nextBtn) nextBtn.style.display = 'none';
            if (prevBtn) prevBtn.style.display = 'none';
        } else {
    new Swiper('.blogView-gallery_slider', {
        slidesPerView: 3,
        spaceBetween: 24,
    loop: false,

        navigation: {
            nextEl: '.blogView-gallery_next',
            prevEl: '.blogView-gallery_prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            320: {
                slidesPerView: 1.3,
                spaceBetween: 8,
            },
            525: {
                slidesPerView: 2,
                spaceBetween: 8,
            },
            1024: {
                slidesPerView: 1.6,
            },
            1200: {
                slidesPerView: 2.3,
            },
            1450: {
                slidesPerView: 3,
            }
        }
    });
        }
    }

new Swiper('.blogView-products', {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        320: {
            slidesPerView: 1.2,
            spaceBetween: 8,
        },
        400: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 1.6,
        },
        1200: {
            slidesPerView: 2.3,
        },
        1450: {
            slidesPerView: 3,
        }
    }
});

const filterBtn = document.querySelector('.blogView-head_mobile');
const filter = document.querySelector('.blogView-filter__wrapper');
const filterClose = document.querySelector('.blogView-filter__head button');
const overlay = document.querySelector('.blogView-filter-overlay');

function openFilter() {
  filter.classList.add('active');
  overlay.classList.add('active');
}

function closeFilter() {
  filter.classList.remove('active');
  overlay.classList.remove('active');
}

filterBtn.addEventListener('click', openFilter);
filterClose.addEventListener('click', closeFilter);
overlay.addEventListener('click', closeFilter);

filter.addEventListener('click', (e) => {
  e.stopPropagation();
});

function openFilter() {
  filter.classList.add('active');
  overlay.classList.add('active');
  document.body.classList.add('no-scroll');
}

function closeFilter() {
  filter.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
}
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBlogView);
} else {
  initBlogView();
}
