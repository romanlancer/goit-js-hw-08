import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const commentEl = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInputs, 500));

function onFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  formData.forEach((value, name) => {
    console.log('name:', name);
    console.log('value:', value);
  });

  e.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onFormInputs(e) {
  const formValuesStorage = {
    email: inputEl.value,
    message: commentEl.value,
  };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formValuesStorage));
}

function fillComment() {
  const savedFormData = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsedFormData = JSON.parse(savedFormData);

  if (parsedFormData === null) {
    return;
  }

  inputEl.value = parsedFormData.email || '';
  commentEl.value = parsedFormData.message || '';
}
fillComment();
