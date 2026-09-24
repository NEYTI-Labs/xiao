import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import $ from 'jquery';

import "./sass/_app.scss";

import '@fancyapps/fancybox/dist/jquery.fancybox';
import '@fancyapps/fancybox/dist/jquery.fancybox.css';



$('[data-fancybox]').fancybox({
  buttons: ['close'],
  transitionEffect: 'fade',
  transitionDuration: 366,
  animationEffect: 'zoom',
  animationDuration: 366,

  thumbs: {
    autoStart: true,   
    hideOnClose: true,
    axis: 'x' 
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