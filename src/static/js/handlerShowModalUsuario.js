import { resetFormularioError } from "./salvarUsuario.js";
const modal = document.getElementById("usuario");

export default function handlerShowModalUsuario() {
  modal.addEventListener("show.bs.modal", function (event) {
    handlerTitulo(event);
    resetFormularioError();
    handlerToastSuccess();
    handlerToastError();
  });
}

function handlerTitulo(e) {
  const button = e.relatedTarget;
  const recipient = button.getAttribute("data-bs-whatever");
  const modalTitle = modal.querySelector(".modal-title");

  modalTitle.textContent = recipient;
}

function handlerToastSuccess() {
  const toastSuccess = document.getElementById("usuarioToastSuccess");
  const toast = new window.bootstrap.Toast(toastSuccess);
  toast.hide();
}

function handlerToastError() {
  const usuarioToastError = document.getElementById("usuarioToastError");
  const toast = new window.bootstrap.Toast(usuarioToastError);
  toast.hide();
}
