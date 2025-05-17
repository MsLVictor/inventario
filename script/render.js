export function renderProducts(products, editProduct, deleteProduct) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; //limpa tabela antes de renderizar para evitar duplicação.

    products.forEach((product, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${product.nome}</td>
            <td>${product.quantidade}</td>
            <td>${product.preco.toFixed(2)}</td>
            <td>
                <button class="edit">Editar</button>
                <button class="delete">Excluir</button>
            </td>
        `;
        productList.appendChild(row);

        const editBtn = row.querySelector('.edit');
        const deleteBtn = row.querySelector('.delete');

        editBtn.addEventListener('click', () => editProduct(index));

        deleteBtn.addEventListener('click', () => deleteProduct(index));
    });

}