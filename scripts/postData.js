import { toastErrorPost } from "./toastConfigs";

async function postData(URL, route, { nome, email, cpf, dados_assinatura }) {
  try {
    const postResponse = await fetch(`${URL}/${route}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome,
        email,
        cpf,
        dados_assinatura,
      }),
    });

    if (!postResponse.ok) {
      Toastify(toastErrorPost).showToast();
      return;
    }

    Toastify(toastPostSuccess);
  } catch (err) {
    console.log(`Ocorreu um erro ao enviar dados: ${err.message}`);
  }
}

export default postData;
