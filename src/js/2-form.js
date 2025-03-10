const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

// Заповнюємо форму з localStorage
Object.entries(formData).forEach(([key, value]) => {
  form.elements[key].value = value;
});

// Обробник події введення
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробник події відправлення
form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert('Будь ласка, заповніть усі поля');
    return;
  }

  console.log('Form Data:', formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = {}; // Очищаємо об'єкт
});
