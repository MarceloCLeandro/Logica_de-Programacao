let totalCarrinho = 0;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    //.split lê uma string e a divide com base em um separador 
    //       "Fone de ouvido - R$100"
    // no exemplo ('-')[0] ele vai pegar a string Fone de ouvido pois esta no array [0] ou a esquerda de '-'
    let nomeDoProduto = produto.split('-')[0];
    let valorDoProduto = produto.split('R$')[1];

    let qtde = document.getElementById('quantidade').value;

    // multiplicando o valor do produto pela quantidade 
    let preco = qtde * valorDoProduto;

    // incluindo produtos no carrinho de compras 
    let carrinhoDeCompras = document.getElementById('lista-produtos');
    carrinhoDeCompras.innerHTML = carrinhoDeCompras.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${qtde}x</span> ${nomeDoProduto} <span class="texto-azul">${preco}</span>
  </section>`;

    // somando o valor total do carrinho de compras 
    totalCarrinho = totalCarrinho + preco;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$ ${totalCarrinho}`;
    
    // zerando o valor 'quantidade' 
    document.getElementById('quantidade').value = 0;


}

// limpando carrinho de compras 
function limpar() {

    totalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0,00';
    document.getElementById('quantidade').value = '0';

}