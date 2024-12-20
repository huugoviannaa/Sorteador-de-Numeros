/*
let limpar;
let quantidadeNumeros;
let numeroMinimo ;
let numeroMaximo ;
let listaNumero = [];
let gerandoNumeros;
let texto;
let campo;
let numeroAleatorio;
let arrayNumeros = [];


function doNumero(){
    numeroMinimo = parseInt(document.querySelector('#de').value);
}
function ateNumero(){
    numeroMaximo = parseInt(document.querySelector('#ate').value);
}


function lista(){
    ateNumero()
    doNumero()
    for (let i = numeroMinimo; i <= numeroMaximo; i++){
        gerandoNumeros = i;
        listaNumero.push(gerandoNumeros);  
    }

    console.log(listaNumero);
}


function quantosNumeros(){
    quantidadeNumeros = parseInt(document.querySelector('#quantidade').value);
    
    let geradorDeNumeros;
   for (let i = 1; i <= quantidadeNumeros; i++) {
    geradorDeNumeros = gerarNumerosAleatorios(numeroMinimo,numeroMaximo);
    }
  
}

 function gerarNumerosAleatorios(min,max){

    numeroAleatorio = parseInt(Math.random() * (max - min + 1) + min);
    console.log(numeroAleatorio);
    arrayNumeros.push(numeroAleatorio);
   
 }

 function exibirTextoNaTela(campo){
    
    texto = document.getElementById("resultado");
    texto.innerHTML = campo;
 }

 function sortear(){
    
    lista();
    quantosNumeros()
    
    exibirTextoNaTela(`<label class="texto__paragrafo">Números sorteados: ${arrayNumeros} </label>`);
    
 }

 function limparCampo(){
    limpar = document.querySelector('#quantidade').value;
    limpar.value = '';
    limpar = document.querySelector('#de').value;
    limpar.value = '';
    limpar = document.querySelector('#ate').value;
    limpar.value = '';
    geradorDeNumeros = 0;

 }

 function reiniciar(){
    limparCampo();
    exibirTextoNaTela(`<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`);
    
 }
    */

 function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if(de > ate){
        alert(`O valor do numero ${de} é maior que ${ate}`);
        return;
    }

    let numeros = gerarNumerosAleatorios(de,ate);
    let sorteados = [];

    for(let i = 0; i < quantidade; i++){
        numeros = gerarNumerosAleatorios(de,ate);
        if(quantidade <= (ate - de  + 1 )){
            while(sorteados.includes(numeros)){
                numeros = gerarNumerosAleatorios(de,ate);
            }

            sorteados.push(numeros);
        }else{
            alert(`O valor de ${quantidade} e maior que o intervalo entre ${de} e ${ate}`);
            return;
        }
    }

    

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

    alterarStatusBotao();

 }

 function gerarNumerosAleatorios(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;

    
 }



 function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
 }

 function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora </label>`;
    alterarStatusBotao();
 }

 

 

