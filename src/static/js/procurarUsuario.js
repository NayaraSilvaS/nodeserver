export default function procurarUsuario() {
  handlerBotaoModal();
  const id = this.parentElement.parentElement.parentElement.getAttribute("id");
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

      switch (response.status) {
        case 422:
        case 404:
          handlerToastError(resultado.error);
          break;
        case 200:
          setFormulario(resultado);
          break;
        default:
          handlerToastError("Houve um erro");
      }
    })
    .catch(function (error) {
      "There has been a problem with your fetch operation: " + error.message;
    });
}

function handlerBotaoModal() {
  document.getElementById("btn-historico").classList.remove("visually-hidden");
  document
    .getElementById("btn-modalExcluir")
    .classList.remove("visually-hidden");
}

function setFormulario(usuario) {
  document.getElementById("inputId").value = usuario.id;
  document.getElementById("inputNome").value = usuario.nome;
  document.getElementById("inputSobrenome").value = usuario.sobrenome;
  document.getElementById("inputEmail").value = usuario.email;
}

function handlerToastError(error) {
  const usuarioToastError = document.getElementById("usuarioToastError");
  usuarioToastError.querySelector(".toast-body").textContent = error;
  const toast = new window.bootstrap.Toast(usuarioToastError);
  toast.show();
}
