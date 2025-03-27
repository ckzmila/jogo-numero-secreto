let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();;
let tentativas = 1;
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = '1, 2, 3, 4... até 10.000 cogumelos podem estar invisíveis por aí!';

function exibirTextoNaTela(tag, texto) { 
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}
exibirTextoNaTela ('h1','Quantos cogumelos Teemo escondeu pelo mapa?');
exibirTextoNaTela ('p','1, 2, 3, 4... até 10.000 cogumelos podem estar escondidos por aí!');
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns, você identificou todos os cogumelos!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa'
        let mensagemTentativas = `Você acertou após ${tentativas} ${palavraTentativa}! Parece que alguém andou fazendo o dever de casa do clube dos escoteiros! :)`; 
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Erroooou, existem menos cogumelos pelo mapa! Pelo jeito você alucinou depois de tomar algum chá de cogumelos de Bandópolis...');
        } else{
                exibirTextoNaTela('p','Erroooou, tem mais cogumelos escondidos por aí! Tô achando que o Teemo usou o Q em você...');
                }
        //tentativas = tentativas + 1 equivalente ao abaixo
            tentativas++;
            limparCampo()
        }
    }
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random () * 10000 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == 5) {
    listaDeNumerosSorteados = [];}
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;

    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela ('h1','Mais uma vez! Quantos cogumelos Teemo escondeu no mapa?');
    exibirTextoNaTela ('p','1,2,3,4... até 10.000! E se você já conseguiu uma vez, dá pra conseguir mais um bocado...');
    document.getElementById('reiniciar').setAttribute('disabled' ,
         true)

}