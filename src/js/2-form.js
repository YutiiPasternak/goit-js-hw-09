const form = document.querySelector('.feedback-form');

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
