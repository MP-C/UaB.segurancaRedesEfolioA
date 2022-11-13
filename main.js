//====================================================================
// Nome         : Mário Pedro Carvalho
// Numero aluno : 2000563
// Curso        : Licenciatura em Engenharia Informática
// Ficheiro     : main.js
// Descrição    : E FOLIO A - Segurança em Redes e Computadores - documento
//                web que reune os diferentes ficheiros segundo critérios de
//                avaliação do EFólio-A
// Codigo       : Este código ficará publicamente disponivel no 
//                repositório GitHub https://github.com/
//                após o dia de entrega
console.log("Check oppening file: main.js");
//====================================================================


/* */
function crytText(textoClaro){
    let textoCifrado;
    textoCifrado = base64.encode(textoClaro);
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

/* */