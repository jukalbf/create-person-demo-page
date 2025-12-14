async function fetchAllData() {
  const backendURLBase = "";
  const backendRoute = "";

  try {
    const dataResponse = await fetch(`${backendURLBase}/${backendRoute}`);
    const dataJson = dataResponse.json();

    return dataJson;
  } catch (err) {
    console.log(`Ocorreu um erro de fetch: ${err.message}`);
  }
}
