import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
import {
  validate
} from './helpers/validate';
import {
  showInputError,
  removeInputError
} from './views/form';
import {
  login
} from './services/auth.service';
import {
  notify
} from './views/notifications';
import { getNews } from './services/news.service';


const {
  form,
  inputEmail,
  inputPassword
} = UI;
const inputs = [inputEmail, inputPassword]

// Event

form.addEventListener('submit', (e) => {
  e.preventDefault();
  onSubmit();
})

inputs.forEach(el => el.addEventListener('focus', () => {
  removeInputError(el);
}))

// Handler
async function onSubmit() {
  const isValidForm = inputs.every(el => {
    const isValidInput = validate(el);

    if (!isValidInput) {
      showInputError(el);
    }

    return isValidInput;
  });

  if (!isValidForm) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    await getNews();
    form.reset();
    // show success notify
    notify({ msg: 'Login success', className: 'alert-success' });
  } catch (err) {
    // show error notify
    notify({ msg: 'Login failed', className: 'alert-danger' });
  }
}