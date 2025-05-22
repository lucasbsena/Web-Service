
        // // Função para alternar between seções
        // function showSection(sectionId) {
        //     // Esconder todas as seções
        //     document.querySelectorAll('.section').forEach(section => {
        //         section.classList.remove('active');
        //     });
            
        //     // Remover classe active de todas as tabs
        //     document.querySelectorAll('.nav-tab').forEach(tab => {
        //         tab.classList.remove('active');
        //     });
            
        //     // Mostrar seção selecionada
        //     document.getElementById(sectionId).classList.add('active');
            
        //     // Adicionar classe active à tab clicada
        //     event.target.classList.add('active');
        // }

        //  // Função de busca de produtos
        // function searchProducts() {
        //     const searchTerm = event.target.value.toLowerCase();
        //     const rows = document.querySelectorAll('#productsTable tbody tr');
            
        //     rows.forEach(row => {
        //         const text = row.textContent.toLowerCase();
        //         row.style.display = text.includes(searchTerm) ? '' : 'none';
        //     });
        // }

        // // Função para mostrar modal
        // function showAddProductModal() {
        //     document.getElementById('productModal').style.display = 'block';
        // }

        // // Função para fechar modal
        // function closeModal(modalId) {
        //     document.getElementById(modalId).style.display = 'none';
        // }

        // // Simulação de chamadas API
        // function editProduct(id) {
        //     alert(`Editando produto ID: ${id}`);
        //     // Aqui faria: fetch(`/api/products/${id}`)
        // }

        // function deleteProduct(id) {
        //     if (confirm('Tem certeza que deseja excluir este produto?')) {
        //         alert(`Excluindo produto ID: ${id}`);
        //         // Aqui faria: fetch(`/api/products/${id}`, {method: 'DELETE'})
        //     }
        // }

        // function adjustStock(productId) {
        //     const newQuantity = prompt('Nova quantidade em estoque:');
        //     if (newQuantity !== null) {
        //         alert(`Ajustando estoque do produto ${productId} para ${newQuantity}`);
        //         // Aqui faria: fetch(`/api/inventory/${productId}`, {method: 'PUT', body: {quantity: newQuantity}})
        //     }
        // }

        // function generateReport() {
        //     const reportType = document.getElementById('reportType').value;
        //     const resultDiv = document.getElementById('reportResult');
            
        //     resultDiv.innerHTML = `
        //         <h3>Relatório: ${reportType}</h3>
        //         <p>Gerando relatório... (simulação)</p>
        //         <div style="margin-top: 15px;">
        //             <strong>Dados simulados:</strong><br>
        //             • Total de produtos: 150<br>
        //             • Valor total do estoque: R$ 45.320,00<br>
        //             • Produtos com estoque baixo: 12<br>
        //         </div>
        //     `;
        //     resultDiv.style.display = 'block';
            
        //     // Aqui faria: fetch(`/api/reports/${reportType}`)
        // }

        // // Form submission para produto
        // document.getElementById('productForm').addEventListener('submit', function(e) {
        //     e.preventDefault();
            
        //     const productData = {
        //         name: document.getElementById('productName').value,
        //         sku: document.getElementById('productSKU').value,
        //         category: document.getElementById('productCategory').value,
        //         price: document.getElementById('productPrice').value,
        //         minStock: document.getElementById('minStock').value,
        //         maxStock: document.getElementById('maxStock').value,
        //         description: document.getElementById('productDescription').value
        //     };
            
        //     alert('Produto salvo! (simulação)');
        //     console.log('Dados do produto:', productData);
            
        //     // Aqui faria: fetch('/api/products', {method: 'POST', body: JSON.stringify(productData)})
            
        //     closeModal('productModal');
        // });

        // // Fechar modal clicando fora
        // window.onclick = function(event) {
        //     const modals = document.querySelectorAll('.modal');
        //     modals.forEach(modal => {
        //         if (event.target === modal) {
        //             modal.style.display = 'none';
        //         }
        //     });
        // }

        // // Atualizar estatísticas (simulação)
        // function updateDashboard() {
        //     // Aqui faria chamadas para: 
        //     // fetch('/api/dashboard/stats')
        //     console.log('Atualizando dashboard...');
        // }

        // // Inicializar página
        // document.addEventListener('DOMContentLoaded', function() {
        //     updateDashboard();
        // });




        // // Array para armazenar produtos da venda
        // let saleProducts = [];

        // function showNewSaleModal() {
        //     document.getElementById('saleModal').style.display = 'block';
        //     saleProducts = [];
        //     updateSaleProductsList();
        //     calculateSaleTotal();
        // }

        // function addProductToSale() {
        //     const productSelect = document.getElementById('productSelect');
        //     const quantity = parseInt(document.getElementById('productQuantity').value);
            
        //     if (!productSelect.value || quantity <= 0) {
        //         alert('Selecione um produto e informe a quantidade!');
        //         return;
        //     }

        //     const selectedOption = productSelect.selectedOptions[0];
        //     const productData = {
        //         code: productSelect.value,
        //         name: selectedOption.dataset.name,
        //         price: parseFloat(selectedOption.dataset.price),
        //         stock: parseInt(selectedOption.dataset.stock),
        //         quantity: quantity
        //     };

        //     if (quantity > productData.stock) {
        //         alert(`Quantidade indisponível! Estoque atual: ${productData.stock}`);
        //         return;
        //     }

        //     // Verificar se produto já foi adicionado
        //     const existingProduct = saleProducts.find(p => p.code === productData.code);
        //     if (existingProduct) {
        //         existingProduct.quantity += quantity;
        //     } else {
        //         saleProducts.push(productData);
        //     }

        //     // Limpar seleção
        //     productSelect.value = '';
        //     document.getElementById('productQuantity').value = 1;

        //     updateSaleProductsList();
        //     calculateSaleTotal();
        // }

        // function updateSaleProductsList() {
        //     const tbody = document.getElementById('saleProductsList');
        //     tbody.innerHTML = '';

        //     saleProducts.forEach((product, index) => {
        //         const subtotal = product.price * product.quantity;
        //         const row = `
        //             <tr>
        //                 <td>${product.name}</td>
        //                 <td>R$ ${product.price.toFixed(2).replace('.', ',')}</td>
        //                 <td>${product.quantity}</td>
        //                 <td>R$ ${subtotal.toFixed(2).replace('.', ',')}</td>
        //                 <td><button type="button" class="btn btn-danger" onclick="removeProductFromSale(${index})">🗑️</button></td>
        //             </tr>
        //         `;
        //         tbody.innerHTML += row;
        //     });
        // }

        // function removeProductFromSale(index) {
        //     saleProducts.splice(index, 1);
        //     updateSaleProductsList();
        //     calculateSaleTotal();
        // }

        // function calculateSaleTotal() {
        //     const subtotal = saleProducts.reduce((sum, product) => sum + (product.price * product.quantity), 0);
        //     const discount = parseFloat(document.getElementById('saleDiscount').value) || 0;
        //     const discountAmount = subtotal * (discount / 100);
        //     const total = subtotal - discountAmount;

        //     document.getElementById('saleSubtotal').value = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        //     document.getElementById('saleTotal').value = `R$ ${total.toFixed(2).replace('.', ',')}`;
        // }

        // function closeModal(modalId) {
        //     document.getElementById(modalId).style.display = 'none';
        // }

        // // Função para mostrar seções
        // function showSection(sectionId) {
        //     // Ocultar todas as seções
        //     const sections = document.querySelectorAll('.section');
        //     sections.forEach(section => {
        //         section.classList.remove('active');
        //     });

        //     // Remover classe active de todas as abas
        //     const tabs = document.querySelectorAll('.nav-tab');
        //     tabs.forEach(tab => {
        //         tab.classList.remove('active');
        //     });

        //     // Mostrar seção selecionada
        //     document.getElementById(sectionId).classList.add('active');

        //     // Adicionar classe active na aba correspondente
        //     event.target.classList.add('active');
        // }