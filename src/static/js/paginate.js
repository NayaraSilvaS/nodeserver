import excluir from "./excluir.js";
import procurarUsuario from "./procurarUsuario.js";

export default function paginate() {
  const itemClicado = this;
  let pagina = 1;
  if (itemClicado.innerText == "Buscar") {
    pagina = 1;
  }
  if (itemClicado.innerText == "Proximo") {
    pagina = Number(document.querySelector(".active").innerText) + 1;
  }
  if (itemClicado.innerText == "Anterior") {
    pagina = Number(document.querySelector(".active").innerText) - 1;
  }

  if (!isNaN(Number(itemClicado.innerText))) {
    pagina = itemClicado.innerText;
  }

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");

  const myRequest = new Request("http://0.0.0.0:3000/usuarios/paginate", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      nome: document.getElementById("exampleInputNome").value,
      sobrenome: document.getElementById("exampleInputSobrenome").value,
      email: document.getElementById("exampleInputEmail").value,
      pagina: pagina,
    }),
  });

  fetch(myRequest)
    .then(async function (response) {
      const resultado = await response.json();
      if (response.status == 200) {
        document.querySelector(".lista").innerHTML = resultado.itens
          .map((usuario) => {
            return `<tr id="${usuario.id}">
                <td>
                  <div class="d-flex justify-content-between">
                    <i
                      class="fa-solid fa-pencil editarUsuario"
                      title="Editar Usuário"
                      data-bs-toggle="modal"
                      data-bs-target="#usuario"
                      data-bs-whatever="Editar Usuário"></i>
                    <i
                      class="fa-solid fa-trash text-danger excluirUsuario"
                      title="Excluir Usuário"
                      data-bs-toggle="modal"
                      data-bs-target="#modalExcluir"
                      data-bs-whatever="Excluir Usuário"
                      ></i>
                  </div>
                </td>
                <td class="nomeUsuario">${usuario.nome}</td>
                <td>${usuario.sobrenome}</td>
                <td>${usuario.email}</td>
            </tr>`;
          })
          .join("");

        handlerPaginate(resultado);

        document
          .querySelectorAll(".pagination > li.page-item")
          .forEach((item) => {
            item.addEventListener("click", paginate);
          });

        document.querySelectorAll(".editarUsuario").forEach((item) => {
          item.addEventListener("click", procurarUsuario);
        });

        document.querySelectorAll(".excluirUsuario").forEach((item) =>
          item.addEventListener("click", function () {
            const linha = this.parentElement.parentElement.parentElement;
            document.getElementById("excluirInputId").value =
              linha.getAttribute("id");
            document.getElementById("nomeExcluido").innerText =
              linha.querySelector(".nomeUsuario").innerText;

            document
              .getElementById("btn-excluir")
              .classList.remove("visually-hidden");
            document
              .getElementById("voltarExcluir")
              .classList.add("visually-hidden");
            document
              .getElementById("fecharExcluir")
              .classList.remove("visually-hidden");
          })
        );
      }
    })
    .catch(function (error) {
      "There has been a problem with your fetch operation: " + error.message;
    });
}

function handlerPaginate(dados) {
  const listaLinks = [];
  listaLinks.push(
    `<li class="page-item disabled">
        <a class="page-link list-group-item-dark" href="#">
        Mostrando ${dados.primeiroItem} - ${dados.ultimoItem} de ${dados.total} registros
        </a>
    </li>`
  );
  const disabledAnterior = dados.paginaAtual == 1 ? "disabled" : "";
  listaLinks.push(
    `<li class="page-item anterior ${disabledAnterior}"><a class="page-link list-group-item-dark" href="#">Anterior</a></li>`
  );

  for (let p = 1; p <= dados.ultimaPagina; p++) {
    let active = "";
    if (p == dados.paginaAtual) {
      active = "active";
    }
    listaLinks.push(
      `<li class="page-item ${active}"><a class="page-link list-group-item-dark" href="#">${p}</a></li>`
    );
  }

  const disabledProximo =
    dados.paginaAtual == dados.ultimaPagina ? "disabled" : "";
  listaLinks.push(
    `<li class="page-item ${disabledProximo}"><a class="page-link list-group-item-dark" href="#">Proximo</a></li>`
  );
  document.querySelector(".pagination").innerHTML = listaLinks.join("");
}
