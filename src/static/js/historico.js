export default function historico() {
  const id = document.getElementById("inputId").value;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");

  const myRequest = new Request(
    `http://0.0.0.0:3000/usuarios/${id}/historicos`,
    {
      method: "GET",
      headers: myHeaders,
    }
  );

  fetch(myRequest)
    .then(async function (response) {
      const resultado = await response.json();

      switch (response.status) {
        case 422:
        case 404:
          handlerToastError(resultado.error);
          break;
        case 200:
          handlerLinha(resultado);
          break;
        default:
          handlerToastError("Houve um erro");
      }
    })
    .catch(function (error) {
      "There has been a problem with your fetch operation: " + error.message;
    });
}

function handlerLinha(resultado) {
  if (resultado.historicos.length == 0) {
    document.querySelector(".lista-historico").innerHTML = `<tr>
    <td colspan="3" class="text-center">Sem Resultados</td>
    </tr>`;
    return;
  }

  let anterior = null;
  document.querySelector(".lista-historico").innerHTML = resultado.historicos
    .map(function (h) {
      const dados = JSON.parse(h.dados);
      if (!anterior) {
        anterior = dados;
      }

      const historicoAlteracoes = handlerHistoricoAlteracoes(anterior, dados);
      anterior = dados;
      return `<tr>
          <td>${resultado.nome}</td>
          <td>${moment(h.createdAt).format("DD/MM/YYYY HH:mm:ss")}</td>
          <td>${historicoAlteracoes}</td>
      </tr>`;
    })
    .join("");
}

function handlerHistoricoAlteracoes(anterior, atual) {
  return `<ul class="list-group list-group-flush">
    <li class="list-group-item list-group-item-action list-group-item-dark 
    ${destaque(anterior.nome, atual.nome)}">${atual.nome}</li>
    <li class="list-group-item list-group-item-action list-group-item-dark 
    ${destaque(anterior.sobrenome, atual.sobrenome)}">${atual.sobrenome}</li>
    <li class="list-group-item list-group-item-action list-group-item-dark 
    ${destaque(anterior.email, atual.email)}">${atual.email}</li>
  </ul>`;
}

function destaque(anterior, atual) {
  if (anterior != atual) {
    return "text-danger";
  }

  return "";
}

function handlerToastError(error) {
  const usuarioToastError = document.getElementById("modalHistoricoToastError");
  usuarioToastError.querySelector(".toast-body").textContent = error;
  const toast = new window.bootstrap.Toast(usuarioToastError);
  toast.show();
}
