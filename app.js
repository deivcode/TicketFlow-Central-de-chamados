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

function encerrarChamado(chamado) {
  // TODO 2:
  // - Altere a propriedade 'status' do objeto recebido para "fechado".
  // Observe que o objeto do array também deve ser alterado.
}

function contarChamados() {
  const numeroChamados = chamados.length
  console.log(numeroChamados)
}

function exibirChamado(chamado) {
  // TODO 4 (opcional):
  // - Exiba no console cliente, assunto, prioridade e status.
}

criarChamado("João", "Erro no login", "alta")
contarChamados()