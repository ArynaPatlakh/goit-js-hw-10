import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btn: document.querySelector('[data-start]'),
  value: document.querySelectorAll('.value'),
};

let userDate;
let intervalID;

refs.btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    const diff = selectedDates[0] - currentDate;
    if (diff <= 0) {
      iziToast.show({
        message: 'Please choose a date in the future',
        backgroundColor: '#EF4040',
        messageColor: 'white',
        position: 'topRight',
        messageSize: '320px',
        iconColor: 'white',
      });
      // window.alert('Please choose a date in the future');
    } else {
      userDate = selectedDates[0];
      refs.btn.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

refs.btn.addEventListener('click', () => {
  intervalID = setInterval(() => {
    const currentDate = Date.now();
    const diff = userDate - currentDate;

    if (diff > 0) {
      const time = convertMs(diff);
      const interfaceDate = addLeadingZero(time);

      refs.btn.disabled = true;
      refs.input.disabled = true;

      for (let i = 0; i < interfaceDate.length; i++) {
        refs.value[i].innerHTML = interfaceDate[i];
      }
    } else {
      clearInterval(intervalID);
      refs.input.disabled = false;
    }
  }, 1000);
});

//!=============================================
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Оставшиеся минуты
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(time) {
  const arr = [];
  time.days = time.days.toString().padStart(2, 0);
  time.hours = time.hours.toString().padStart(2, 0);
  time.minutes = time.minutes.toString().padStart(2, 0);
  time.seconds = time.seconds.toString().padStart(2, 0);
  arr.push(time.days);
  arr.push(time.hours);
  arr.push(time.minutes);
  arr.push(time.seconds);

  return arr;
}

//!=============================================
