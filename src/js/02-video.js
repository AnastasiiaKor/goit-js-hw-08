import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframeEl = document.querySelector('#vimeo-player');
const vimeoPlayer = new Player(iframeEl);

vimeoPlayer.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds, duration }) {
  localStorage.setItem('videoplayer-current-time', seconds);
  if (seconds === duration) {
    localStorage.setItem('videoplayer-current-time', 0);
  }
}
vimeoPlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
