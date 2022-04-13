export default function procurarUsuario() {
  const id = this.parentElement.parentElement.getAttribute("id");
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");

  const myRequest = new Request(`http://0.0.0.0:3000/usuarios/${id}`, {
    method: "GET",
    headers: myHeaders,
  });

  fetch(myRequest)
    .then(async function (response) {
      const resultado = await response.json();
      if (response.status == 200) {
        document.getElementById("inputId").value = resultado.id;
        document.getElementById("inputNome").value = resultado.nome;
        document.getElementById("inputSobrenome").value = resultado.sobrenome;
        document.getElementById("inputEmail").value = resultado.email;
      }

      console.log(resultado);
    })
    .catch(function (error) {
      "There has been a problem with your fetch operation: " + error.message;
    });
}
