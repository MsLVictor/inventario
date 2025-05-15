//essa parte do código da função aos ids que eu quero manipular no html através pelo javascript
const form = document.getElementById('product-form')
const nameInput = document.getElementById('nome')
const qtdInput = document.getElementById('quantidade')
const precoInput = document.getElementById('preco')
const productList = document.getElementById('product-list')

//lista de produtos vazia inicialmente
let products = [];

//função ara atualizar as tabelas com os produtos
function renderProducts() {
    productList.innerHTML = ''; //limpa a tabela

    products.forEach((products, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${products.nome}</td>
            <td>${products.quantidade}</td>
            <td>${products.preco.toFixed(2)}</td>
            <td>
                <button class="edit" onclick="editProduct(${index})">Editar</button>
                <button class="delet" onclick="deleteProduct(${index})">Excluir</button>
            </td>
        `;

        productList.appendChild(row);
    });
}


//função para envio do formulário "submit" é o id do botão lá no html
form.addEventListener('submit', function (event) {
    //evento para a página não atualizar quando eu enviar o formulário
    event.preventDefault();


//objeto com dados do formulário
const product = {
    nome: nameInput.value,
    quantidade: parseInt(qtdInput.value),
    preco: parseFloat(precoInput.value)
};

//adiciona produto na lista
products.push(product);

//chamando render pro html
renderProducts();

console.log(product);
//limpa os dados escritos no formulário
form.reset();

});

//edit

//delete