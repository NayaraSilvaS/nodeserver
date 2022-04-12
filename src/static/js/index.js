import paginate from "./paginate.js";
import handlerShowModalUsuario from "./handlerShowModalUsuario.js";

handlerShowModalUsuario();

const buscar = document.querySelector(".buscar");
buscar.addEventListener("click", paginate);

const limpar = document.querySelector(".limpar");
limpar.addEventListener("click", function () {
  document.getElementById("pesquisa").reset();
});
