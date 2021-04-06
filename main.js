const getCnpj = async value => {
  const response = await fetch(`http://cnpj.info/`);
  const data = await response.json();

  console.log(data);
}

getCnpj('00264528000178')


