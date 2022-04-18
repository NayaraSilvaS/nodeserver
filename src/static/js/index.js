import paginate from "./paginate.js";
import handlerShowModalUsuario from "./handlerShowModalUsuario.js";
import salvarUsuario from "./salvarUsuario.js";
import historico from "./historico.js";
import excluir from "./excluir.js";

handlerShowModalUsuario();

const buscar = document.querySelector(".buscar");
buscar.addEventListener("click", paginate);

const limpar = document.querySelector(".limpar");
limpar.addEventListener("click", function () {
  document.getElementById("pesquisa").reset();
});

const salvar = document.getElementById("salvarUsuario");
salvar.addEventListener("click", salvarUsuario);

const novoUsuario = document.getElementById("btn-novoUsuario");
novoUsuario.addEventListener("click", function () {
  document.getElementById("usuarioForm").reset();
  document.getElementById("inputId").value = "";
  document.getElementById("btn-historico").classList.add("visually-hidden");
  document.getElementById("btn-modalExcluir").classList.add("visually-hidden");
});

const btnHistorico = document.getElementById("btn-historico");
btnHistorico.addEventListener("click", historico);

const btnModalExcluir = document.getElementById("btn-modalExcluir");
btnModalExcluir.addEventListener("click", function () {
  document.getElementById("nomeExcluido").innerText =
    document.getElementById("inputNome").value;
  document.getElementById("excluirInputId").value =
    document.getElementById("inputId").value;
  document.getElementById("btn-excluir").classList.remove("visually-hidden");
  document.getElementById("voltarExcluir").classList.remove("visually-hidden");
  document.getElementById("fecharExcluir").classList.add("visually-hidden");
});

const btnExcluir = document.getElementById("btn-excluir");
btnExcluir.addEventListener("click", excluir);
