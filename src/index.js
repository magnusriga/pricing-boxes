import './main.scss';
import startShaking from './util/shake-btn';

document.addEventListener('DOMContentLoaded', () => {
  const buttonsToShake = document.querySelectorAll('#shake');

  const arr = Array.prototype.slice.call(buttonsToShake);
  arr.forEach(btn => {
    startShaking(btn, 'shake', 1000, 3000);
  });

  // if (process.env.NODE_ENV === 'development') {
  //   console.log('Looks like we are in development mode!');
  // }

  // if (process.env.NODE_ENV === 'production') {
  //   console.log('HEREE');
  //   console.log('Looks like we are in production mode!');
  // }
});
