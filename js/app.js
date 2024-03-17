function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeIngressosComprados = document.getElementById('qtd').value;
    let palavraIngresso = quantidadeIngressosComprados > 1 ? 'ingressos' : 'ingresso';

    if (quantidadeIngressosComprados < 1) {
        alert('Quantidade de ingressos inválida, por favor revise seu pedido!');
        return;
    }

    if (tipoIngresso == 'inferior') {
        comprarIngressoInferior(quantidadeIngressosComprados, palavraIngresso);
    } else if (tipoIngresso == 'superior'){
        comprarIngressoSuperior(quantidadeIngressosComprados, palavraIngresso);
    } else {
        comprarIngressoPista(quantidadeIngressosComprados, palavraIngresso);
    }
}

function comprarIngressoInferior(quantidadeComprada, palavraIng) {
    let quantidadeDisponivelInferior = document.getElementById('qtd-inferior');

    if (quantidadeComprada > parseInt(quantidadeDisponivelInferior.textContent)) {
        alert('Quantidade de ingressos indisponível para cadeira inferior!');
    }  else {
        quantidadeDisponivelInferior.textContent = parseInt(quantidadeDisponivelInferior.textContent) - quantidadeComprada;
        alert(`Compra de ${quantidadeComprada} ${palavraIng} do tipo cadeira inferior realizada com sucesso!`);
    }
}

function comprarIngressoSuperior(quantidadeComprada, palavraIng) {
    let quantidadeDisponivelSuperior = document.getElementById('qtd-superior');
    
    if (quantidadeComprada > parseInt(quantidadeDisponivelSuperior.textContent)) {
        alert('Quantidade de ingressos indisponível para cadeira superior!');
    }  else {
        quantidadeDisponivelSuperior.textContent = parseInt(quantidadeDisponivelSuperior.textContent) - quantidadeComprada;
        alert(`Compra de ${quantidadeComprada} ${palavraIng} do tipo cadeira superior realizada com sucesso!`);
    }
}

function comprarIngressoPista(quantidadeComprada, palavraIng) {
    let quantidadeDisponivelPista = document.getElementById('qtd-pista');
    
    if (quantidadeComprada > parseInt(quantidadeDisponivelPista.textContent)) {
        alert('Quantidade de ingressos indisponível para pista!');
    }  else {
        quantidadeDisponivelPista.textContent = parseInt(quantidadeDisponivelPista.textContent) - quantidadeComprada;
        alert(`Compra de ${quantidadeComprada} ${palavraIng} do tipo pista realizada com sucesso!`);
    }
}