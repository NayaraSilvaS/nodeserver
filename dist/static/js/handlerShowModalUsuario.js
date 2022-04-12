const modal = document.getElementById("usuario");

export default function handlerShowModalUsuario() {
  modal.addEventListener("show.bs.modal", function (event) {
    handlerTitulo(event);
  });
}

function handlerTitulo(e) {
  const button = e.relatedTarget;
  const recipient = button.getAttribute("data-bs-whatever");
  const modalTitle = modal.querySelector(".modal-title");

  modalTitle.textContent = recipient;
}
