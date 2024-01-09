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

// Desafio

//1. Adicione validações no código para garantir que o usuário só consiga adicionar produtos ao carrinho se tiver selecionado um produto válido e inserido uma quantidade válida. Se a entrada não for válida, exiba uma mensagem de erro apropriada.

/*let totalCarrinho;
limpar();


function adicionar() {
    let produto = document.getElementById('produto').value;
    let qtde = document.getElementById('quantidade').value;

    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    if (isNaN(qtde) || qtde <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }


    let nomeDoProduto = produto.split('-')[0];
    let valorDoProduto = parseFloat(produto.split('R$')[1]);
    let preco = qtde * valorDoProduto;


    let carrinhoDeCompras = document.getElementById('lista-produtos');
    carrinhoDeCompras.innerHTML = carrinhoDeCompras.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${qtde}x</span> ${nomeDoProduto} <span class="texto-azul">R${preco}</span>
  </section>`;


    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}




function limpar() {

    totalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0,00';
    document.getElementById('quantidade').value = '0';

}*/

//2. Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.

/*function capturarValores() {
    const nome = document.getElementById('campoNome').value;
    const idade = document.getElementById('campoIdade').value;

    document.getElementById('mostraNome').textContent = `Nome: ${nome}, Idade: ${idade}`;
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}*/

//3. Tenha um elemento HTML na página (por exemplo, um parágrafo) e utilize JavaScript para modificar seu conteúdo usando a propriedade textContent.
/*function modificar() {
    const paragrafo = document.getElementById('textoModificado');
    paragrafo.textContent = 'Novo texto modificado dinamicamente!';
}*/

//4. Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.

/*const num1 = 10;
const num2 = 20;

const soma = num1 + num2;
const mensagem = `A soma de ${num1} e ${num2} é ${soma}.`;

console.log(mensagem);*/

//5. Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.
/*const duasSentencas = "Criar o que não existe ainda deve ser a pretensão de todo sujeito que está vivo; A tarefa mais importante de uma pessoa que vem ao mundo é criar algo"
const frasesSeparadas = duasSentencas.split(';');

console.log(frasesSeparadas);*/

//6. Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.
/*const numerosSeparados = "10,20,30,40,50";
const arrayNumeros = numerosSeparados.split(',');
console.log(arrayNumeros);*/
