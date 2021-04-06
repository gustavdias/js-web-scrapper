// async function loadCnpj()

const loadCnpj = async () => {
  const response = await fetch("https://reqres.in/api/users");
  const cnpj = await response.json();
  console.log("response: ", response, "cnpj: ", cnpj);

  return cnpj;
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const data = await loadCnpj();
  } catch (error) {
    console.log("error ", error);
  }
//   console.log(cnpj);
});


// http://cnpj.info/10604782000121