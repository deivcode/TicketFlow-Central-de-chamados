// ================================================================
// TICKETFLOW — INTERFACE (PRONTA)
// ================================================================
// Este arquivo conecta os botões às funções do seu app.js.
// Você não precisa alterar nada aqui para cumprir os desafios.

(() => {
  "use strict";

  const formulario = document.querySelector("#form-chamado");
  const lista = document.querySelector("#lista-chamados");
  const aviso = document.querySelector("#aviso");

  function mostrarAviso(mensagem, tipo = "error") {
    aviso.textContent = mensagem;
    aviso.className = tipo === "success" ? "notice notice-success" : "notice notice-error";
    aviso.hidden = false;
  }

  function limparAviso() {
    aviso.hidden = true;
    aviso.textContent = "";
  }

  function adicionarTexto(elemento, classe, texto) {
    const parte = document.createElement(elemento);
    parte.className = classe;
    parte.textContent = texto;
    return parte;
  }

  function atualizarTela() {
    // 'chamados' é o array que VOCÊ definiu no app.js.
    if (typeof chamados === "undefined" || !Array.isArray(chamados)) {
      mostrarAviso("O array 'chamados' não foi encontrado no app.js. Confira se o arquivo está na mesma pasta.");
      return;
    }

    const abertos = chamados.filter((chamado) => chamado.status === "aberto").length;
    const fechados = chamados.filter((chamado) => chamado.status === "fechado").length;

    document.querySelector("#total-chamados").textContent = chamados.length;
    document.querySelector("#abertos-chamados").textContent = abertos;
    document.querySelector("#fechados-chamados").textContent = fechados;
    document.querySelector("#contador-lista").textContent = `${chamados.length} registro${chamados.length === 1 ? "" : "s"}`;

    lista.replaceChildren();

    if (chamados.length === 0) {
      const vazio = adicionarTexto("div", "empty", "");
      vazio.append(adicionarTexto("div", "empty-illustration", "▤"));
      vazio.append(adicionarTexto("strong", "", "Nenhum chamado por aqui"));
      vazio.append(adicionarTexto("p", "", "Cadastre seu primeiro chamado no formulário."));
      lista.append(vazio);
      return;
    }

    chamados.forEach((chamado) => {
      const fechado = chamado.status === "fechado";
      const card = adicionarTexto("article", "ticket", "");
      const topo = adicionarTexto("div", "ticket-top", "");
      topo.append(adicionarTexto("span", "ticket-number", `CHAMADO #${chamado.id ?? "?"}`));
      topo.append(adicionarTexto("span", fechado ? "status status-closed" : "status status-open", fechado ? "Encerrado" : "Em aberto"));

      card.append(topo);
      card.append(adicionarTexto("h3", "", String(chamado.cliente ?? "Cliente não informado")));
      card.append(adicionarTexto("p", "ticket-subject", String(chamado.assunto ?? "Sem assunto")));

      const rodape = adicionarTexto("div", "ticket-bottom", "");
      const prioridade = adicionarTexto("span", `priority priority-${chamado.prioridade || "baixa"}`, "");
      prioridade.append(adicionarTexto("span", "priority-dot", ""));
      prioridade.append(document.createTextNode(`Prioridade ${chamado.prioridade || "não definida"}`));
      rodape.append(prioridade);

      if (fechado) {
        rodape.append(adicionarTexto("span", "closed-note", "✓ Finalizado"));
      } else {
        const botao = adicionarTexto("button", "close-button", "✓ Encerrar chamado");
        botao.type = "button";
        botao.addEventListener("click", () => {
          limparAviso();
          try {
            // AQUI a interface chama a SUA função no app.js.
            encerrarChamado(chamado);
            if (chamado.status !== "fechado") {
              mostrarAviso("O chamado ainda está aberto. Implemente a função encerrarChamado(chamado) no app.js.");
              return;
            }
            atualizarTela();
            mostrarAviso("Chamado encerrado com sucesso!", "success");
          } catch (erro) {
            mostrarAviso(`Erro ao encerrar o chamado: ${erro.message}`);
            console.error(erro);
          }
        });
        rodape.append(botao);
      }

      card.append(rodape);
      lista.append(card);
    });
  }

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    limparAviso();

    const cliente = document.querySelector("#cliente").value.trim();
    const assunto = document.querySelector("#assunto").value.trim();
    const prioridade = document.querySelector("#prioridade").value;

    if (!cliente || !assunto) {
      mostrarAviso("Preencha o nome do cliente e o assunto antes de cadastrar.");
      return;
    }

    try {
      const quantidadeAnterior = chamados.length;
      // AQUI a interface chama a SUA função no app.js.
      criarChamado(cliente, assunto, prioridade);
      if (chamados.length <= quantidadeAnterior) {
        mostrarAviso("Nenhum chamado foi adicionado. Implemente a função criarChamado(cliente, assunto, prioridade) no app.js.");
        return;
      }
      formulario.reset();
      atualizarTela();
      mostrarAviso("Chamado cadastrado com sucesso!", "success");
    } catch (erro) {
      mostrarAviso(`Erro ao cadastrar o chamado: ${erro.message}`);
      console.error(erro);
    }
  });

  atualizarTela();
})();
