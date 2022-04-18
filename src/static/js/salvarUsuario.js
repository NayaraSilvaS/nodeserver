const formulario = [
  ["nome", "inputNome"],
  ["sobrenome", "inputSobrenome"],
  ["email", "inputEmail"],
];

export default function salvarUsuario() {
  resetFormularioError();

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

      switch (response.status) {
        case 422:
        case 404:
          handlerToastError(resultado.error);
          break;
        case 424:
          handlerToastError("Houve um erro");
          handlerFormularioError(resultado.errors);
          break;
        case 200:
          document.getElementById("inputId").value = resultado.id;
          handlerToastSuccess();
          handlerTitulo();
          document
            .getElementById("btn-historico")
            .classList.remove("visually-hidden");
          document
            .getElementById("btn-modalExcluir")
            .classList.remove("visually-hidden");

          break;
        default:
          handlerToastError("Houve um erro");
      }
    })
    .catch(function (error) {
      console.log(
        "There has been a problem with your fetch operation: " + error.message
      );
    });
}

function handlerTitulo() {
  const modalTitle = document
    .querySelector("#usuario")
    .querySelector(".modal-title");
  modalTitle.textContent = "Editar Usuário";
}

function handlerToastSuccess() {
  const toastSuccess = document.getElementById("usuarioToastSuccess");
  toastSuccess.querySelector(".toast-body").textContent =
    "Usuário salvo com sucesso";
  const toast = new window.bootstrap.Toast(toastSuccess);
  toast.show();
}

function handlerToastError(error) {
  const usuarioToastError = document.getElementById("usuarioToastError");
  usuarioToastError.querySelector(".toast-body").textContent = error;
  const toast = new window.bootstrap.Toast(usuarioToastError);
  toast.show();
}

export function resetFormularioError() {
  formulario.forEach((campo) => {
    document.querySelector(`.${campo[1]}`).textContent = "";
    document.getElementById(campo[1]).classList.remove("border-danger");
  });
}

function handlerFormularioError(errors) {
  formulario.forEach((campo) => {
    const errorsCampo = errors.filter((error) => {
      return error.param == campo[0];
    });
    if (errorsCampo.length > 0) {
      document.querySelector(`.${campo[1]}`).innerHTML = errorsCampo
        .map((error) => {
          return error.msg;
        })
        .join("<br>");
      document.getElementById(campo[1]).classList.add("border-danger");
    }
  });
}
