import {
  toastErrorConfig,
  toastSignSuccess,
  toastSucessConfig,
} from "./toastConfigs.js";
import addNewPerson from "./addNewPersonFunction.js";
import postData from "./postData.js";

const buttonSign = document.querySelector(".button-signed");
const canvas = document.querySelector(".digital-signature-canvas");

const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const cpfInput = document.querySelector(".cpf-input");
var isSigned = false;
var signatureImg = null;

buttonSign.addEventListener("click", signSignature);

function handleRegisterPerson(event) {
  event.preventDefault();

  const port = 8000;
  const URL = `http://localhost:${port}`;
  const route = "home";

  if (!nameInput.value || !emailInput.value || !cpfInput.value || !isSigned) {
    Toastify(toastErrorConfig).showToast();
    return;
  }

  const newPerson = {
    name: nameInput.value,
    email: emailInput.value,
    cpf: cpfInput.value,
    dados_assinatura: btoa(signatureImg),
  };

  addNewPerson(newPerson.name, newPerson.email, newPerson.cpf, signatureImg);
  postData(URL, route, newPerson);
  console.log(signatureImg);

  Toastify(toastSucessConfig).showToast();
}

function signSignature() {
  isSigned = true;
  signatureImg = canvas.toDataURL("image/png");
  console.log(signatureImg);

  Toastify(toastSignSuccess).showToast();
}

export default handleRegisterPerson;
