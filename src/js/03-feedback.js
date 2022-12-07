import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);
const KEY = 'feedback-form-state';
const inputEl = formEl[0];
const messageEl = formEl[1];
const data = {
  email: '',
  message: '',
};
checkStatus();
function onFormInput(event) {
  data.email = inputEl.value;
  data.message = messageEl.value;
  //   const target = event.target;

  //   if (target.name === 'email') {
  //     data.email = target.value;
  //   } else if (target.name === 'message') {
  //     data.message = target.value;
  //   }

  localStorage.setItem(KEY, JSON.stringify(data));
}

function onFormSubmit(event) {
  event.preventDefault();
  formEl.reset();
  console.log(data);
  localStorage.removeItem(KEY);
  formEl.removeEventListener('input', throttle(onFormInput, 500));
}

function checkStatus() {
  if (localStorage.getItem(KEY)) {
    const { email, message } = JSON.parse(localStorage.getItem(KEY));
    inputEl.value = email;
    messageEl.value = message;
  }
}
