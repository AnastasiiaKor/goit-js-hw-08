import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframeEl = document.querySelector('#vimeo-player');
const vimeoPlayer = new Player(iframeEl);

checkStatus();

vimeoPlayer.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  vimeoPlayer.off('timeupdate', throttle(onPlay, 1000));
}
function checkStatus() {
  if (localStorage.getItem('videoplayer-current-time')) {
    const { seconds, duration } = JSON.parse(
      localStorage.getItem('videoplayer-current-time')
    );
    if (seconds && seconds !== duration) {
      vimeoPlayer.setCurrentTime(seconds);
    }
  }
}
