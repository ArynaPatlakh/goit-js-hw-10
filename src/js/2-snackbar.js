import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import ok from '../img/ok.svg';
import error from '../img/error.svg';
console.log(ok);

const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('button'),
  input: document.querySelector('input'),
  state: document.querySelector('fieldset'),
};

refs.form.addEventListener('submit', formSabmit);

function formSabmit(e) {
  e.preventDefault();
  let delay = refs.input.value.trim();
  let value = document.querySelector('input[type = "radio"]:checked');
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value.value == 'fulfilled') {
        return resolve(delay);
      } else {
        return reject(delay);
      }
    }, delay);
  });

  promise.then(onFulfilled).catch(onRejected);

  function onFulfilled() {
    iziToast.show({
      position: 'topRight',
      title: 'OK',
      titleColor: 'white',
      message: `✅ Fulfilled promise in ${delay}ms`,
      messageColor: 'white',
      color: '#59A10D',
      icon: 'icon-svg',
      iconURL: ok,
      iconColor: 'white',
    });
  }
  function onRejected() {
    iziToast.show({
      position: 'topRight',
      title: 'EROR',
      titleColor: 'white',
      message: `❌ Rejected promise in ${delay}ms`,
      color: '#EF4040',
      messageColor: 'white',
      iconURL: error,
      iconColor: 'white',
    });
  }
}
