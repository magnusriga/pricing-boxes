// namespaced
// ensures animation only runs every few seconds

// use:
// startShaking('#shake-btn', 'shake', 1000, 3000);

import './shake.scss';

export default function startShaking(btn, animName, duration, delay) {
  let timer;
  const shakingBtn = btn;

  const animDur = `${duration / 1000}s`;

  function addClass() {
    shakingBtn.classList.add(animName);
    shakingBtn.style['animation-duration'] = animDur;
  }

  function removeClass() {
    shakingBtn.classList.remove(animName);
  }

  setInterval(() => {
    // in case duration is longer than delay
    // we don't want it to suddenly stop in
    // the middle of next duration.
    // Thus, clear previous setTimeout() on each start
    clearTimeout(timer);
    addClass();
    timer = setTimeout(() => removeClass(), duration);
  }, duration + delay);
}
