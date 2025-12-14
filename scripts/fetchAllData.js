async function fetchAllData() {
  const port = 8000;
  const backendURLBase = `http://localhost:${port}`;
  const backendRoute = "home";
  const searchParams = "";
  const routes = [];

  try {
    const dataResponse = await fetch(`${backendURLBase}/${backendRoute}`);
    const dataJson = dataResponse.json();

    return dataJson;
  } catch (err) {
    console.log(`Ocorreu um erro de fetch: ${err.message}`);
  }
}
