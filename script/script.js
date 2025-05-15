//essa parte do código da função aos ids que eu quero manipular no html através pelo javascript
const form = document.getElementById('product-form')
const nameInput = document.getElementById('nome')
const qtdInput = document.getElementById('quantidade')
const precoInput = document.getElementById('preco')
const productList = document.getElementById('product-list')
const submit = form.querySelector('button[type="submit"]');

let editando = false;
let editandoIndex = null;

//lista de produtos vazia inicialmente
let products = JSON.parse(localStorage.getItem('products')) || [];

renderProducts();

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
                <button class="delete" onclick="deleteProduct(${index})">Excluir</button>
            </td>
        `;

        productList.appendChild(row);
    });
}


//função para envio do formulário "submit" é o id do botão lá no html
//criar
form.addEventListener('submit', function (event) {
    //evento para a página não atualizar quando eu enviar o formulário
    event.preventDefault();


//objeto com dados do formulário
const product = {
    nome: nameInput.value,
    quantidade: parseInt(qtdInput.value),
    preco: parseFloat(precoInput.value)
};

if (editando) {
    products[editandoIndex] = product;
    editando = false;
    editandoIndex = null;
    submit.textContent = "Adicionar";
} else {

    //adiciona produto na lista
    products.push(product);
}

saveProducts();
//chamando render pro html
renderProducts();
//limpa os dados escritos no formulário
form.reset();

});

//edit
function editProduct(index) {
    const product = products[index];

    nameInput.value = product.nome;
    qtdInput.value = product.quantidade;
    precoInput.value = product.preco;

    editando = true;
    editandoIndex = index;
    submit.textContent = "salvar";
}

//delete
function deleteProduct(index) {
    //abre uma janelinha pra confirmar :D
    const confirmDelete = confirm("tem certeza que deseja excluir este produto da lista?");

    if (confirmDelete) {
        products.splice(index, 1); //remove um item do array products na posição index
        //sempre salvando no local storage depois de salvar deletar ou adicionar
        saveProducts();
        renderProducts(); //atualiza tabela
    }
}

//salvando no local storage, pegando a lista em products e transformando em json
function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}


