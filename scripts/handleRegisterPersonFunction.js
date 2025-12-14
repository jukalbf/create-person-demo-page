import {
  toastErrorConfig,
  toastSignSucess,
  toastSucessConfig,
} from "./toastConfigs.js";
import addNewPerson from "./addNewPersonFunction.js";

const buttonSign = document.querySelector(".button-signed");
const canvas = document.querySelector(".digital-signature-canvas");

const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const cpfInput = document.querySelector(".cpf-input");
var isSigned = false;
var signatureImg = null;

buttonSign.addEventListener("click", signSignature);

function handleRegisterPerson() {
  if (!nameInput.value || !emailInput.value || !cpfInput.value || !isSigned) {
    Toastify(toastErrorConfig).showToast();
    return;
  }

  const newPerson = {
    name: nameInput.value,
    email: emailInput.value,
    cpf: cpfInput.value,
  };

  addNewPerson(newPerson.name, newPerson.email, newPerson.cpf, signatureImg);
  console.log(signatureImg);

  Toastify(toastSucessConfig).showToast();
}

function signSignature() {
  isSigned = true;
  signatureImg = canvas.toDataURL("image/png");

  Toastify(toastSignSucess).showToast();
}

export default handleRegisterPerson;
