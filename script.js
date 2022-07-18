const form = document.getElementById("form");
const username = document.getElementById("username");
const cpf = document.getElementById("cpf");
const email = document.getElementById("email");
const data = document.getElementById("data");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const cpfValue = cpf.value;
  const emailValue = email.value;
  const dataValue = data.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome é obrigatorio.");
  } else {
    setSuccessFor(username);
  }

  if (cpfValue === "") {
    setErrorFor(cpf, "O CPF é obrigatorio.");
  } else if (cpfValue.length < 11) {
    setErrorFor(cpf, "O CPF tem que ter 11 numeros");
  } else if ($("#cpf").mask("999.999.999-99")) {
    setSuccessFor(cpf);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 6) {
    setErrorFor(password, "A senha precisa ter no mínimo 6 caracteres. ");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(" .form-control");
  const submit = form.querySelector("#submit");
  const reset = form.querySelector("#reset");
  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  submit.addEventListener("click", function () {
    if (formIsValid) {
      alert("O formulário foi nenviado");
    }
  });
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
