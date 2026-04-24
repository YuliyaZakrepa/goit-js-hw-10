const formData = {
  email: '',
  message: '',
};
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');
const btn = form.querySelector('button');

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
keepData();

function handleInput(event) {
  const elements = event.currentTarget.elements;
  formData.email = elements.email.value.trim();
  formData.message = elements.message.value.trim();
  //console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function keepData() {
  const obj = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(obj);

  if (obj) {
    formData.email = obj.email ?? '';
    formData.message = obj.message ?? '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  if (
    elements.email.value.length === 0 ||
    elements.message.value.length === 0
  ) {
    return alert('Fill please all fields');
  }
  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  console.log(formData);
  form.reset();
}
