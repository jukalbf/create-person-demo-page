import handleRegisterPerson from "./handleRegisterPersonFunction.js";
import addNewPerson from "./addNewPersonFunction.js";

// const fakeData = [
//   { name: "Maria", email: "maria@email.com", cpf: "863.567.321-87" },
//   { name: "João", email: "joao@email.com", cpf: "093.345.743-12" },
//   { name: "Ricardo", email: "ricardo@email.com", cpf: "153.642.865-12" },
// ];

const dataFetched = fetchAllData();

dataFetched.forEach((userValue) => {
  addNewPerson(userValue.name, userValue.email, userValue.cpf);
});

const buttonRegister = document.querySelector(".register-button");

buttonRegister.addEventListener("submit", handleRegisterPerson);

