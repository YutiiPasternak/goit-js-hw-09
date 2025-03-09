const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const input = form.elements.email;
const textarea = form.elements.message;

const localStorageKey = 'storageExample';

const saved = localStorage.getItem(localStorageKey);
if (saved) {
  const { email, message } = JSON.parse(saved);
  input.value = email || '';
  textarea.value = message || '';
}

form.addEventListener('input', () => {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      email: input.value,
      message: textarea.value,
    })
  );
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log({ email: input.value, message: textarea.value });
  localStorage.removeItem(localStorageKey);
  form.reset();
});

// об'єкт для керування станом форми
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

// Заповнюємо форму з localStorage
Object.entries(formData).forEach(([key, value]) => {
  form.elements[key].value = value;
});
//  зберігаємо в `localStorage`
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Form Data:', formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = {}; // Очищаємо об'єкт
});
