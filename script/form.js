import { renderProducts } from './script/render.js';
import { showMessage } from './script/ui.js';
import { saveProducts, getProducts } from './script/storage.js';

export function setupForm() {
  const form = document.getElementById('product-form');
  const nameInput = document.getElementById('nome');
  const qtdInput = document.getElementById('quantidade');
  const precoInput = document.getElementById('preco');
  const submit = form.querySelector('button[type="submit"]');

  let products = getProducts();
  let editando = false;
  let editandoIndex = null;

  // Função para editar produto
  function editProduct(index) {
    const product = products[index];
    nameInput.value = product.nome;
    qtdInput.value = product.quantidade;
    precoInput.value = product.preco;

    editando = true;
    editandoIndex = index;
    submit.textContent = "Salvar";

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Função para deletar produto
  function deleteProduct(index) {
    const confirmDelete = confirm("Tem certeza que deseja excluir este produto da lista?");
    if (confirmDelete) {
      products.splice(index, 1);
      saveProducts(products);
      showMessage("Produto excluído com sucesso!");
      renderProducts(products, editProduct, deleteProduct);
    }
  }

  // Evento submit do formulário
  form.addEventListener('submit', function(event) {
    event.preventDefault();

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
      products.push(product);
    }

    saveProducts(products);
    showMessage("Produto salvo/adicionado com sucesso!");
    renderProducts(products, editProduct, deleteProduct);
    form.reset();
  });

  // Renderizar a lista inicial
  renderProducts(products, editProduct, deleteProduct);
}
