function alterarStatus(id) {
    let clickAlugar = document.getElementById(`game-${id}`);
    let mudarImagem = clickAlugar.querySelector('.dashboard__item__img');
    let mudarBotao = clickAlugar.querySelector('.dashboard__item__button');

    if (mudarImagem.classList.contains('dashboard__item__img--rented')) {
        mudarImagem.classList.remove('dashboard__item__img--rented');
        mudarBotao.textContent = 'Alugar';
        mudarBotao.classList.remove('dashboard__item__button--return');
    } else {
        mudarImagem.classList.add('dashboard__item__img--rented');
        mudarBotao.textContent = 'Devolver';
        mudarBotao.classList.add('dashboard__item__button--return');
    }
}


//----------------------------------------Desafios

// Desafio 1: Adicione uma confirmação ao devolver um jogo, solicitando ao usuário que confirme a 
//devolução antes que ela seja concluída. Isso pode ajudar a evitar devoluções acidentais.

/*function alterarStatus(id) {
    let clickAlugar = document.getElementById(`game-${id}`);
    let mudarImagem = clickAlugar.querySelector('.dashboard__item__img');
    let mudarBotao = clickAlugar.querySelector('.dashboard__item__button');
    let mudarJogo = clickAlugar.querySelector('.dashboard__item__name');


    if (mudarImagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Clique no "OK" para confirmar a devolução do jogo ${mudarJogo.textContent}`)) {
            mudarImagem.classList.remove('dashboard__item__img--rented');
            mudarBotao.classList.remove('dashboard__item__button--return');
            mudarBotao.textContent = 'Alugar';
        }
    } else {
        mudarImagem.classList.add('dashboard__item__img--rented');
        mudarBotao.classList.add('dashboard__item__button--return');
        mudarBotao.textContent = 'Devolver';
    }
}*/

//Desafio 2: Para imprimir na tela a informação sobre quantos jogos foram alugados, você pode 
//modificar a função alterarStatus() para contar os jogos alugados e exibir essa informação no console. 

/*let jogosAlugados = 0;


function quantidadeDeJogosAlugados() {
    console.log(`Qualtidade de Jogos Alugados foram:${jogosAlugados}`);
}


function alterarStatus(id) {
    let clickAlugar = document.getElementById(`game-${id}`);
    let mudarImagem = clickAlugar.querySelector('.dashboard__item__img');
    let mudarBotao = clickAlugar.querySelector('.dashboard__item__button');


    if (mudarImagem.classList.contains('dashboard__item__img--rented')) {
        mudarImagem.classList.remove('dashboard__item__img--rented');
        mudarBotao.classList.remove('dashboard__item__button--return');
        mudarBotao.textContent = 'Alugar';
        jogosAlugados--;
    } else {
        mudarImagem.classList.add('dashboard__item__img--rented');
        mudarBotao.classList.add('dashboard__item__button--return');
        mudarBotao.textContent = 'Devolver';
        jogosAlugados++;
    }


    quantidadeDeJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function () {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});*/

// Desafio 3: Função que verifica se uma palavra é um palíndromo

/*function palindromoOuNao() {
    var palavra = prompt('Digite uma palavra');
    var separaLetrar = palavra.split('');

    //verificar no console.log a palavra digitada pelo usuário separada letra a letra dentro de um Array
    console.log(separaLetrar);

    //invertendo letras para teste
    var inverter = separaLetrar.reverse();
    inverter = inverter.join('');
    //se a palavra digitada é igual ao inverso dela  
    if (palavra == inverter) {
        alert(`A palavra ${palavra} é um Palindromo`);
    } else {
        alert(`A palavra ${palavra} não é um Palindromo`);
    }
}*/

// Desafio 4: Função para ordenar números em sequência

/*function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

// Exemplo de uso:
ordenarNumeros(3, 1, 5); // Deve exibir "Números ordenados: 1, 3, 5"
*/
