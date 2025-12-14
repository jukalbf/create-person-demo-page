import { toastErrorConfig, toastSucessConfig } from "./toastConfigs.js";

const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const cpfInput = document.querySelector(".cpf-input");

function handleRegisterPerson() {
  if (!nameInput.value || !emailInput.value || !cpfInput.value) {
    Toastify(toastErrorConfig).showToast();
    return;
  }

  const newPerson = {
    name: nameInput.value,
    email: emailInput.value,
    cpf: cpfInput.value,
  };

  addNewPerson(newPerson.name, newPerson.email, newPerson.cpf);

  Toastify(toastSucessConfig).showToast();
}

export default handleRegisterPerson;