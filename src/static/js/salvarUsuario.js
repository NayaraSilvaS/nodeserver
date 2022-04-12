export default function salvarUsuario() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  const id = document.getElementById("inputId").value;
  let url = "http://0.0.0.0:3000/usuarios";
  let method = "POST";

  if (id) {
    url = `${url}/${id}`;
    method = "PUT";
  }

  console.log("id::", document.getElementById("inputId").value);

  const myRequest = new Request(url, {
    method: method,
    headers: myHeaders,
    body: JSON.stringify({
      nome: document.getElementById("inputNome").value,
      sobrenome: document.getElementById("inputSobrenome").value,
      email: document.getElementById("inputEmail").value,
    }),
  });

  fetch(myRequest)
    .then(async function (response) {
      const resultado = await response.json();
      if (response.status == 200) {
        document.getElementById("inputId").value = resultado.id;
        console.log(resultado);
      }
    })
    .catch(function (error) {
      console.log(
        "There has been a problem with your fetch operation: " + error.message
      );
    });
}
