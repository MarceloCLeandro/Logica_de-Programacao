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

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
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

