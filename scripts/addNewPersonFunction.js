function addNewPerson(name, email, cpf, signature) {
  const nameElementValue = document.createElement("h2");
  const emailElementValue = document.createElement("span");
  const cpfElementValue = document.createElement("span");
  const imageElementValue = document.createElement("img");
  const liContainer = document.createElement("li");

  const listContainer = document.querySelector(".data-list-container");

  liContainer.className = "data-info-container";

  nameElementValue.innerText = name;
  nameElementValue.className = "person-name";
  emailElementValue.innerText = email;
  emailElementValue.className = "person-email";
  cpfElementValue.innerText = cpf;
  cpfElementValue.className = "person-cpf";
  imageElementValue.alt = "signature-img";
  imageElementValue.src = signature;
  imageElementValue.className = "signature-img";

  listContainer.appendChild(liContainer);

  liContainer.appendChild(nameElementValue);
  liContainer.appendChild(emailElementValue);
  liContainer.appendChild(cpfElementValue);
  liContainer.appendChild(imageElementValue);
}

export default addNewPerson;
