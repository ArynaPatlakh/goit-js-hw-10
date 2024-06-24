import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('button'),
  input: document.querySelector('input'),
  state: document.querySelector('fieldset'),
};

refs.btn.addEventListener('submit', e => {
  e.preventDefault();
  let delay = refs.input.value.trim();
  console.log(delay);
  //     setTimeout(() => {

  //     const promis = new Promise(value);
  // //     function resolve() {
  // //       console.log(delay);
  // //       return `✅ Fulfilled promise in ${delay}ms`;
  // //     }
  // //     function reject() {
  // //       return `❌ Rejected promise in ${delay}ms`;
  // //     }
  //   }, delay);
});
