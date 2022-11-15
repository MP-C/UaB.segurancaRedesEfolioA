//====================================================================
// Nome         : Mário Pedro Carvalho
// Numero aluno : 2000563
// Curso        : Licenciatura em Engenharia Informática
// Ficheiro     : main.js
// Descrição    : E FOLIO A - Segurança em Redes e Computadores - documento
//                web que reune os diferentes ficheiros segundo critérios de
//                avaliação do EFólio-A
// Codigo       : Este código ficará publicamente disponivel no 
//                repositório GitHub https://github.com/MP-C/UaB.segurancaRedesEfolioA.git
//                após o dia de entrega
console.log("Check oppening file: main.js");
//====================================================================

/* Função responsavel por assegurar uma transformação simétrica da mensagem inicial de forma a eccriptar uma mensagem recorrendo a um algoritmo que codifica a mensagem*/
function crytTextSync(){
    let plainText = document.querySelector('#textToCipherSync').value.replace(/(\t|\f|\n|\r|\v)/gm, "");
    let cipheredText="";
    let codeSymbols = 0;
    let codeVowals = 0;
    let codeConsonants = 0;

    /* Para garantir que o utilizador escreve algo como texto a criptar*/
    if(plainText.length == 0){ 
        alert("To cipher a text in Synchrone mode, you should type any letter, word, number or caracter.");
    }
    else{ /* Se existir mensagem então esta é encriptada com mudança de código decimal de acordo com a tabela ASCII */
        for (let i = 0; i < plainText.length; i++) {
            let message = plainText.charCodeAt(i);
            if(message > 32 && message <= 64){
                message -= 1 ;
                codeSymbols += 1
            }
            if (message >= 65 && message <= 65 + 26 - 1){
                message += 2;
                codeVowals +=1 ;
            }
            if (message >= 97 && message <= 97 + 26 - 1) {
                message += 6;
                codeConsonants += 1;
            }
            if(message == 126){
                message += 4;
            }
            // console.log("codeSymbols", codeSymbols, "codeVowals",codeVowals, "codeConsonants", codeConsonants, "message", message);
            cipheredText += String.fromCharCode(message);
        }
        // cipheredText = result.substring(1, result.length);
        // console.log("2code65", code65, "2code97", code97, "cipheredText", cipheredText);
    }        
    document.getElementById('outputCode').innerHTML =
    `<p> De acordo com a cifra de Cesar, ocoreu um descolamento de posições
    para os caracteres transformados numa mudança de : </p>
    <p> - de "+2" posição, para vogais num total de  ${ codeVowals} carateres; </p>
    <p> - de "+6" posição, para consoantes num total de  ${ codeConsonants} carateres; </p>
    <p> - de "-1" posição, para caracteres especiais num total de ${ codeSymbols} carateres; </p>`
    console.log(document.getElementById('output').innerHTML);
    document.getElementById('output').innerHTML = `<p> ${cipheredText} </p>`;
    console.log(document.getElementById('output').innerHTML);
}

/* Função responsavel por assegurar uma transformação simétrica da mensagem inicial de forma a descriptar a mensagem recorrendo ao algoritmo inverso,*/
function decrytTextSync(){
    let plainText = document.querySelector('#textToCipherSync').value.replace(/(\t|\f|\n|\r|\v)/gm, "");
    let cipheredText="";
    let codeSymbols = 0;
    let codeVowals = 0;
    let codeConsonants = 0;

    /* Para garantir que o utilizador escreve algo como texto a criptar ou decriptar*/
    if(plainText.length == 0){ 
        alert("To cipher a text in Synchrone mode, you should type any letter, word, number or caracter.");
    }
    else{ /* Se existir mensagem então esta é encriptada com mudança de código decimal de acordo com a tabela ASCII */
        for (let i = 0; i < plainText.length; i++) {
            let message = plainText.charCodeAt(i);
            if(message > 32 && message <= 63){
                message += 1 ;
                codeSymbols += 1;
            }
            if (message >= 65+2 && message <= 65 + 26 - 1 +2){
                message -= 2;
                codeVowals +=1 ;
            }
            if (message >= 97 +6 && message <= 97 + 26 - 1 +6) {
                message -= 6;
                codeConsonants += 1;
            }
            if(message == 126){
                message -= 4;
            }
            //console.log("codeSymbols", codeSymbols, "codeVowals",codeVowals, "codeConsonants", codeConsonants, "message", message);
            cipheredText += String.fromCharCode(message);
        }
        // cipheredText = result.substring(1, result.length);
        // console.log("codeSymbols", codeSymbols, "codeConsonants", codeConsonants, "cipheredText", cipheredText);
    }        
    document.getElementById('outputCode').innerHTML =
    `<p> De acordo com a a cifra de Cesar, ocorreu um deslocamento de posições
    para os caracteres trasnformados : </p>
    <p> - vogais por "-2" posição foi de ${ codeVowals}; </p>
    <p> - consoantes por "-6" posição foi de ${ codeConsonants}; </p>
    <p> - especiais por "+1" posição foi de ${ codeSymbols}; </p>`
    console.log(document.getElementById('output').innerHTML);
    document.getElementById('output').innerHTML = `<p> ${cipheredText} </p>`;
    console.log(document.getElementById('output').innerHTML);
}

/* 
readTextFile("file:///C:/textToTransform.txt");
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

/* */
function saveTextToFile() {
    var blob = new Blob(textoClaro + ["Welcome to file with original text"],
        { type: "text/plain;charset=utf-8" });
    saveAs(blob, "textoEmClaro.txt");
}

/* */
function readTextFromFile() {
    var blob = new Blob(textoClaro + ["Welcome to file with original text"],
        { type: "text/plain;charset=utf-8" });
    read(blob, "textoEmClaro.txt");
}


/* */
function uncrytText(textoCifrado){
    let textoDescriptado;
    textoDescriptado = base64.decode(textoCifrado);
}

/* */
document.querySelector('#cipher').onclick = function(){
    if(document.querySelector('#textToCipher').value.length == 0){ /* */
        console.log("Enter text !");
    }

    else{ /* */
        saveTextToFile();
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#textToCipher').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete"); /* */
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}