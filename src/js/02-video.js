import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframeEl = document.querySelector('#vimeo-player');
const vimeoPlayer = new Player(iframeEl);

vimeoPlayer.on('timeupdate', throttle(onPlay, 1000));
setTime();

function onPlay({ seconds, duration }) {
  localStorage.setItem('videoplayer-current-time', seconds);
  if (seconds === duration) {
    localStorage.removeItem('videoplayer-current-time');
  }
}

function setTime() {
  if (localStorage.getItem('videoplayer-current-time')) {
    vimeoPlayer.setCurrentTime(
      localStorage.getItem('videoplayer-current-time')
    );
  } else {
    vimeoPlayer.setCurrentTime(0);
  }
}
