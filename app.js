// ================================================================
// TICKETFLOW — ESTE ARQUIVO É O SEU DESAFIO! (JavaScript básico)
// ================================================================
// Esta versão começa com dois chamados para a interface já mostrar dados.
// Você vai completar as funções abaixo. NÃO precisa editar o ui.js.
//
// IMPORTANTE: evite require(), process e fs neste exercício.
// O index.html carrega este app.js diretamente no navegador.

const chamados = [
  {
    id: 1,
    cliente: "Ana",
    assunto: "Não consigo acessar o sistema",
    prioridade: "alta",
    status: "aberto"
  },
  {
    id: 2,
    cliente: "Carlos",
    assunto: "Erro ao gerar relatório",
    prioridade: "media",
    status: "aberto"
  }
];

function criarChamado(cliente, assunto, prioridade) {
  // TODO 1:
  // - Crie um objeto com id, cliente, assunto, prioridade e status.
  const novoChamado = {
    id: chamados.length + 1,
    cliente: cliente,
    assunto: assunto,
    prioridade: prioridade,
    // - Status inicial: "aberto".
    status: "aberto"
  }


  // - Adicione esse objeto ao array 'chamados'.
  chamados.push(novoChamado)
  // Dica: o total de chamados pode ajudar a gerar um ID inicial.
  console.log(chamados)

}

function encerrarChamado(chamados, id, novoStatus) {
  const chamado = chamados.find(item => item.id === id);

  if (chamado) {
    chamado.status = novoStatus
  }

}

function contarChamados() {
  const numeroChamados = chamados.length
  console.log(numeroChamados)
}

function exibirChamado(chamados, id) {
  const chamado = chamados.find(item => item.id === id)
  console.log(chamado)
}

criarChamado("João", "Erro no login", "alta")
contarChamados()
encerrarChamado(chamados, 2, "fechado");

exibirChamado(chamados, 1)