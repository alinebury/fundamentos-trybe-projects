//script.js
const buttonLogin = document.querySelector('.login');

buttonLogin.addEventListener('click', () => {
  const email = document.querySelector('.email');
  const password = document.querySelector('.password');

  if ((email.value === 'tryber@teste.com') && (password.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function habilitar() {
  if (document.getElementById('agreement').checked) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}

document.getElementById('agreement').addEventListener('click', habilitar);

function charCount(valor) {
  const quant = 500;
  const total = valor.length;
  const resto = quant - total;

  document.getElementById('counter').innerText = resto;
}

// eslint-disable-next-line sonarjs/no-use-of-empty-return-value
document.getElementById('textarea').addEventListener('input', charCount);

const botao = document.querySelector('#submit-btn');
const materias = document.querySelectorAll('.subject');
const formElement = document.querySelector('#evaluation-form');

function criaParagrafo() {
  for (let i = 0; i < 7; i += 1) {
    const para = document.createElement('p');
    formElement.appendChild(para);
  }
}

function criaMaterias() {
  let nome = [];
  for (let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked) {
      nome = `${nome} ${materias[i].value}, `;
    }
  }
  return nome;
}

function formNomes(primeiroNome, sobrenome, email, house) {
  const p = document.querySelectorAll('p');

  p[0].innerText = `Nome: ${primeiroNome} ${sobrenome}`;
  p[1].innerText = `Email: ${email}`;
  p[2].innerText = `Casa: ${house}`;
  const nome = criaMaterias();
  p[4].innerText = `Matérias: ${nome}`;
}

botao.addEventListener('click', (event) => {
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const obs = document.querySelector('#textarea').value;
  const primeiroNome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  const familia = document.querySelector('input[name="family"]:checked').value;

  formElement.innerHTML = '';
  criaParagrafo();
  formNomes(primeiroNome, sobrenome, email, house);
  const p = document.querySelectorAll('p');
  p[3].innerText = `Família: ${familia}`;
  p[5].innerText = `Avaliação: ${rate}`;
  p[6].innerHTML = `Observações: ${obs}`;
  event.preventDefault();
});
