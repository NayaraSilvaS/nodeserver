export default function excluir() {
  const id = document.getElementById("excluirInputId").value;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");

  const myRequest = new Request(`http://0.0.0.0:3000/usuarios/${id}`, {
    method: "DELETE",
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
          handlerToastSuccess(resultado.msg);
          break;
        default:
          handlerToastError("Houve um erro");
      }

      document.getElementById("btn-excluir").classList.add("visually-hidden");
      document.getElementById("voltarExcluir").classList.add("visually-hidden");
      document
        .getElementById("fecharExcluir")
        .classList.remove("visually-hidden");
    })
    .catch(function (error) {
      "There has been a problem with your fetch operation: " + error.message;
    });
}

function handlerToastError(error) {
  const usuarioToastError = document.getElementById("modalExcluirToastError");
  usuarioToastError.querySelector(".toast-body").textContent = error;
  const toast = new window.bootstrap.Toast(usuarioToastError);
  toast.show();
}

function handlerToastSuccess(mensagem) {
  const toastSuccess = document.getElementById("modalExcluirToastSuccess");
  toastSuccess.querySelector(".toast-body").textContent = mensagem;
  const toast = new window.bootstrap.Toast(toastSuccess);
  toast.show();
}
