# TicketFlow — Frontend para conectar ao seu app.js

## Como abrir

1. Extraia os arquivos e deixe **todos na mesma pasta**.
2. Abra o arquivo `index.html` no navegador (duplo clique).
3. Você verá os dois chamados de exemplo.
4. Abra `app.js` no VS Code e complete as funções marcadas com `TODO`.
5. Salve o `app.js` e atualize o navegador (F5) para testar.

Se preferir, use a extensão **Live Server** no VS Code. Não é obrigatório.

## Arquivos

- `index.html`: estrutura da página — já pronta.
- `style.css`: aparência da página — já pronta.
- `ui.js`: eventos e integração dos botões — já pronto.
- `app.js`: **seu exercício**. Complete as funções, sem alterar a interface.

## Se você já tem seu próprio `app.js`

**Faça uma cópia de segurança antes de substituir qualquer arquivo.**
Mantenha as funções com estes nomes e parâmetros:

```js
const chamados = [ /* seus objetos */ ];
function criarChamado(cliente, assunto, prioridade) { /* seu código */ }
function encerrarChamado(chamado) { /* seu código */ }
function contarChamados() { /* seu código */ }
```

O `app.js` precisa usar JavaScript comum (arrays, objetos, funções). Neste estágio,
**não use `require`, `fs` ou outros recursos exclusivos do Node** neste arquivo,
pois ele também será carregado pelo navegador.

## O que já funciona e o que depende de você

- **Já funciona:** visualização dos chamados existentes, layout responsivo, preenchimento do formulário, validação dos campos e feedback na tela.
- **Você implementa:** cadastrar um objeto no array, encerrar um chamado e retornar o total.
- Quando clicar nos botões antes de implementar as funções, aparecerá um aviso explicando o que falta.

## Por que abrir o HTML e não usar `node app.js`?

`node app.js` executa JavaScript no terminal e não abre uma interface gráfica.
Nesta versão, o navegador carrega `app.js` e `ui.js` diretamente via scripts da página,
por isso não precisamos de Express nem banco de dados.

**Os dados não são salvos.** Ao atualizar o navegador, a lista volta aos dois exemplos
iniciais. Mais tarde você poderá criar uma API em Express, usar PostgreSQL e manter
os dados entre acessos.

## Pequena observação

O contador visual usa `chamados.length` dentro da interface. Mesmo assim,
implemente `contarChamados()` no `app.js` para praticar retornos de funções.
