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

 

 

