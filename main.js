import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

import $ from 'jquery';

import '@fancyapps/fancybox';

import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';

import "./sass/_app.scss";

$('[data-fancybox]').fancybox({
  buttons: ['close'],
  transitionEffect: 'fade',
  transitionDuration: 366,
  animationEffect: 'zoom',
  animationDuration: 366,

  thumbs: {
    autoStart: true,   // показывать сразу, не по клику на кнопку
    hideOnClose: true,
    axis: 'x'          // 'x' — горизонтальная полоса снизу, 'y' — вертикальная сбоку
  },

  afterShow: function (instance, current) {
    const isVideo = current.type === 'video' || current.type === 'html5video';
    instance.$refs.container.toggleClass('is-video', isVideo);

    if (isVideo) {
      const videoEl = current.$content.is('video')
        ? current.$content.get(0)
        : current.$content.find('video').get(0);
      if (videoEl) videoEl.removeAttribute('controls');
    }
  },

  clickContent: function (current, event) {
    if (current.type === 'image') return 'zoom';

    if (current.type === 'video' || current.type === 'html5video') {
      const videoEl = current.$content.is('video')
        ? current.$content.get(0)
        : current.$content.find('video').get(0);
      if (videoEl) videoEl.paused ? videoEl.play() : videoEl.pause();
      return false;
    }
    return false;
  }
});