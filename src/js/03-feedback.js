import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';
const data = {};

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

checkData();

function onFormInput(event) {
  data[event.target.name] = event.target.value;
  localStorage.setItem(KEY, JSON.stringify(data));
}

function onFormSubmit(event) {
  console.log(JSON.parse(localStorage.getItem(KEY)));
  event.preventDefault();
  formEl.reset();
  localStorage.removeItem(KEY);
}

function checkData() {
  let storageData = localStorage.getItem(KEY);
  if (storageData) {
    storageData = JSON.parse(storageData);
    Object.entries(storageData).forEach(([name, value]) => {
      data[name] = value;
      formEl.elements[name].value = value;
    });
  }
}

// const formEl = document.querySelector('.feedback-form');
// formEl.addEventListener('input', throttle(onFormInput, 500));
// formEl.addEventListener('submit', onFormSubmit);
// const KEY = 'feedback-form-state';
// const inputEl = formEl[0];
// const messageEl = formEl[1];
// const data = {
//   email: '',
//   message: '',
// };
// checkStatus();
// function onFormInput(event) {
//   data.email = inputEl.value;
//   data.message = messageEl.value;
//   localStorage.setItem(KEY, JSON.stringify(data));
// }

// function onFormSubmit(event) {
//   event.preventDefault();
//   formEl.reset();
//   console.log(JSON.parse(localStorage.getItem(KEY)));
//   localStorage.removeItem(KEY);
//   formEl.removeEventListener('input', throttle(onFormInput, 500));
// }

// function checkStatus() {
//   if (localStorage.getItem(KEY)) {
//     const { email, message } = JSON.parse(localStorage.getItem(KEY));
//     inputEl.value = email;
//     messageEl.value = message;
//   }
// }
