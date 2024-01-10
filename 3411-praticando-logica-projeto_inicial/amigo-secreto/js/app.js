let listaSorteio = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    listaSorteio.push(amigo.value);
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';

    //Desafio 1
    atualizarLista();
    atualizarSorteio();
}

function sortear() {
    embaralhar(listaSorteio);

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < listaSorteio.length; i++) {
        if (i == listaSorteio.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaSorteio[i] + ' --> ' + listaSorteio[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaSorteio[i] + ' --> ' + listaSorteio[i + 1] + '<br>';
        }
    }
}
//Desafio 1
function excluirAmigo(index) {
    listaSorteio.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

//Desafio 1
function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < listaSorteio.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = listaSorteio[i];

        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function () {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

function reiniciar() {
    listaSorteio = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

//loop desafio 
for (let numero = 1; numero <= 100; numero++) {
    //identificando se o resto da divisão por 5 é igual a 0 
    if (numero % 5 === 0) {
        console.log(numero);
    }
}

// Desafios

//1. Criar uma funcionalidade no Projeto Amigo Secreto que permita ao usuário clicar em um amigo na lista e removê-lo. Atualizar a visualização da lista após a remoção.
/*function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}*/

/*function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < listaSorteio.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = listaSorteio[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}*/

//2. Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável. Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista. Imprima novaLista no console.
let minhaLista = [];

minhaLista.push(1, 2, 3);
console.log("Lista inicial", minhaLista);

let outrosNumeros = [4, 5, 6];

let novaLista = minhaLista.concat(outrosNumeros);
console.log("Adicionado os números 4, 5 e 6 na lista ", novaLista);

//3. Remova o último elemento de novaLista. Imprima novaLista após a remoção.
novaLista.pop();
console.log("Removendo o ultimo elemento da lista", novaLista);

//4. Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento.

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

novaLista = embaralharArray(novaLista);
console.log("Embaralhando a Lista:", novaLista);

//5. Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. Teste a função com novaLista e imprima o array resultante.

function removerDuplicatas(array) {
    return [...new Set(array)];
  }
  
  // Testando a função com novaLista
  let novaListaSemDuplicatas = removerDuplicatas(novaLista);
  console.log("Remover duplicatas:", novaListaSemDuplicatas);
  