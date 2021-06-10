import 'bootstrap/dist/css/bootstrap.min.css';

const makeInputArea = () => {
  const inputEl = document.createElement('input');

  inputEl.autofocus = true;
  inputEl.required = true;
  inputEl.name = 'url';
  inputEl.ariaLabel = 'url';
  inputEl.classList.add('form-control', 'form-control-lg', 'w-100');
  inputEl.placeholder = 'ссылка RSS';

  return inputEl;
};

const makeButton = () => {
  const buttonEl = document.createElement('button');

  buttonEl.type = 'submit';
  buttonEl.ariaLabel = 'add';
  buttonEl.classList.add('btn', 'btn-lg', 'btn-primary', 'px-sm-5');
  buttonEl.textContent = 'Add';

  return buttonEl;
};

const makeForm = () => {
  const form = document.createElement('form');

  const flexFormContainer = document.createElement('div');

  const inputContainer = document.createElement('div');
  const buttonContainer = document.createElement('div');

  const inputEl = makeInputArea();
  const buttonEl = makeButton();

  inputContainer.classList.add('col');
  inputContainer.append(inputEl);

  buttonContainer.classList.add('col-auto');
  buttonContainer.append(buttonEl);

  flexFormContainer.classList.add('row');
  flexFormContainer.append(inputContainer, buttonContainer);

  form.action = true;
  form.classList.add('rss-form');
  form.append(flexFormContainer);

  return form;
};

const makeHeader = () => {
  const rowDiv = document.createElement('div');
  const contentContainer = document.createElement('div');

  const h1El = document.createElement('h1');
  const pEl = document.createElement('p');
  const form = makeForm();
  const pHiddenEl = document.createElement('p');
  const divFeedback = document.createElement('div');

  h1El.classList.add('display-3');
  h1El.textContent = 'RSS агрегатор';

  pEl.classList.add('lead');
  pEl.textContent = 'Начните читать сегодня! Это легко, это красиво.';

  pHiddenEl.classList.add('text-muted', 'my-1');
  pHiddenEl.textContent = 'Пример: https://ru.hexlet.io/lessons.rss';

  divFeedback.classList.add('feedback');

  contentContainer.classList.add('col-md-10', 'col-lg-8', 'mx-auto', 'text-white');
  contentContainer.append(h1El, pEl, form, pHiddenEl, divFeedback);

  rowDiv.classList.add('row');
  rowDiv.append(contentContainer);
  return rowDiv;
};

const makeFooter = () => {
  const container = document.createElement('div');
  const textContainer = document.createElement('div');
  const aEl = document.createElement('a');

  aEl.href = 'https://github.com/looleeluu/frontend-project-lvl3';
  aEl.target = '_blank';
  aEl.classList.add('text-decoration-none');
  aEl.textContent = 'Ilya Sinegubkin';

  textContainer.classList.add('text-center');
  textContainer.textContent = 'created by ';
  textContainer.append(aEl);

  container.classList.add('container-xl');
  container.append(textContainer);
  return container;
};

export default () => {
  const main = document.createElement('main');
  const footer = document.createElement('footer');

  const headerSection = document.createElement('section');
  const fieldSection = document.createElement('section');

  headerSection.classList.add('container-fluid', 'bg-dark', 'p-5');
  fieldSection.classList.add('container-fluid', 'p-5');

  headerSection.append(makeHeader());

  main.classList.add('flex-grow-1');
  footer.classList.add('footer', 'border-top', 'py-3', 'mt-5');
  main.append(headerSection, fieldSection);
  footer.append(makeFooter());

  document.body.classList.add('d-flex', 'flex-column', 'min-vh-100');
  document.body.append(main, footer);
};
