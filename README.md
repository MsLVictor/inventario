# Inventário
um projeto para avaliação de front-end

sistema de controle de estoque simples, mas não tão simples assim.

Este é um projeto feito a partir de HTML, CSS e JavaScript.

é permitido criar, editar, e excluir produtos.

## FUNCIONALIDADES
- Cadastro de produtos com nome, quantidade e preço.
- Listagem dos produtos com uma tabela dinâmica (posteriormente quero adicionar uma busca, fica a dica pra quem quiser dar um fork e ajudar :D)
- Edição e exclusão de produtos.
- persistencia de dados usando LocalStorage (quero colocar um banco de dados futuramente!)
- feedback visual ao fazer edição, adição ou exclusão de produtos.
- Organização do código usando módulos JS e CSS separados(valeu PRESIDA pelas dicas!).

## ESTRUTURA DO PROJETO
- `index.html` - arquivo principal com a estrutura da página.
- `css/` - adicionei css puro e testei alguns frameworks(bootstrap) para fazer o menu hamburguer.
    -`body.css` - estilização do body.
    -`container.css` - estilização do div.container.
    -`form.css` - estilização do formulário.
    -`inpu_button.css` - estilização dos botões e inputs.
    -`nav.css` - alguns detalhes do nav.
-`script`
    -`main.js` - ponto inicial que inicializa o resto da estrutura toda.
    -`form.js` - aqui é onde eu fiz toda a lógica do CRUD(Create, Read, Update, Delete).
    -`render.js` - Funções para renderizar os produtos.
    -`storage.js` - é aqui onde ficou o LocalStorage(salvamento de persistente em navegador).
    -`ui.js` - funções para exibir mensagens de iteração com o sistema.
    -`script.js` - isso aqui foi o primeiro arquivo js que criei, antes de separar.

## como rodar?
1. clone o repositório na sua máquina.
2. Use o liveserver para rodar. se clicar no index e abrir direto no navegador, não vai funcionar(modulos js não funciona dessa forma por causa da segurança. só funciona em servidor rodando.)


## Desenvolvido por: 
Victor Leite - victormleitedev@gmail.com
github       - https://github.com/MsLVictor
linkedin     - https://www.linkedin.com/in/victormleite/

