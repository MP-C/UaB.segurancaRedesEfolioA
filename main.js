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
//====================================================================
console.log("Check oppening file: main.js - EFolioA - Segurança em Redes e Computadores. \nAutor: Mário Carvalho - Número aluno : 2000563" );


/* Para o criptar a mensagem recorrendo ao método simétrico */
/* Função responsavel por assegurar uma transformação simétrica da mensagem inicial de forma a eccriptar uma mensagem recorrendo a um algoritmo que codifica a mensagem*/
function cryptTextSymm(){
    let plainText = document.querySelector('#textToCipherSync').value;
    let cipheredText = "";  /* Para iniciar a variavel vazia, onde ficará a mensagem codificada */
    let codeSymbols = 0;    /* Serve para contar a quantidade de caracteres especiais e numeros que sofreram transformação */
    let codeCapitalCase = 0;/* Serve para contar a quantidade de caracteres maiusculos que sofreram transformação */
    let codeLowerCase = 0;  /* Serve para contar a quantidade de caracteres minusculos que sofreram transformação */

    /* Para garantir que o utilizador escreve algo como texto a criptar*/
    if(plainText.length == 0){ 
        /* Para informar o utilizador que deve introduzir caracteres */
        //alert("To cipher a text in Symmetric mode, you should type any letter, word, number or caracter."); 
        alert("Para criptar um texto no modo Simétrico, deverá primeiro escrever uma letra, um número ou um carater especial.");
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
                codeCapitalCase +=1 ;
            }
            if (message >= 97 && message <= 97 + 26 - 1) {
                message += 6;
                codeLowerCase += 1;
            }
            if(message == 126){
                message += 4;
            }
            // console.log("message", cipheredText, "\nTotal of ciphers's simblos and numers: ", codeSymbols,
            // "\nTotal of ciphers's capitals: ", codeCapitalCase, 
            // "\nTotal of ciphers's lower case: ", codeLowerCase);
            cipheredText += String.fromCharCode(message);
        }
    }        
    document.getElementById('outputCode').innerHTML =
    `<p> De acordo com a Tabela ASCII a quantidade de caracteres transformados por rotação de carateres : </p>
    <p> > ${ codeSymbols} especiais e números, moveram-se "-1" posições; </p>
    <p> > ${ codeLowerCase} minusculas, moveram-se "+6" posições; </p>
    <p> > ${ codeCapitalCase} maiusculas, moveram-se "+2" posições; </p>
    <br>
    <p> Agora é necessário copiar a mensagem, colar na zona de input correspondente e carregar no outro botão. </p>`
    document.getElementById('output').innerHTML = `Mensagem criptada : \n ${cipheredText} `;
    console.log(document.getElementById('output').innerHTML);
}

/* Função responsavel por assegurar uma transformação simétrica da mensagem inicial de forma a descriptar a mensagem recorrendo ao algoritmo inverso,*/
function decryptTextSymm(){
    let plainText = document.querySelector('#textToCipherSync').value;
    let decipheredText = "";/* Para iniciar a variavel vazia, onde ficará a mensagem codificada */
    let codeSymbols = 0;    /* Serve para contar a quantidade de caracteres especiais e numeros que sofreram transformação */
    let codeCapitalCase = 0;/* Serve para contar a quantidade de caracteres maiusculos que sofreram transformação */
    let codeLowerCase = 0;  /* Serve para contar a quantidade de caracteres minusculos que sofreram transformação */

    /* Para garantir que o utilizador escreve algo como texto a criptar ou decriptar*/
    if(plainText.length == 0){   /* Para informar o utilizador que deve introduzir caracteres */
        //alert("To decipher a text in Symmetric mode, you should type any letter, word, number or caracter.");
        alert("Para descriptar o texto no modo Simétrico, deverá primeiro escrever uma letra, um número ou um carater especial.");
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
                codeCapitalCase +=1 ;
            }
            if (message >= 97 +6 && message <= 97 + 26 - 1 +6) {
                message -= 6;
                codeLowerCase += 1;
            }
            if(message == 126){
                message -= 4;
            }
            // console.log("message", decipheredText, "\nTotal of ciphers's simblos and numers: ", codeSymbols,
            // "\nTotal of ciphers's capitals: ", codeCapitalCase, 
            // "\nTotal of ciphers's lower case: ", codeLowerCase);
            decipheredText += String.fromCharCode(message);
        }
    }        
    document.getElementById('outputCode').innerHTML =
    `<p> De acordo com a Tabela ASCII a quantidade de caracteres transformados por rotação de caracteres : </p>
    <p> > ${ codeSymbols} especiais e números, moveram-se "+1" posições; </p>
    <p> > ${ codeLowerCase} minusculas, moveram-se "-6" posições; </p>
    <p> > ${ codeCapitalCase} maiusculas, moveram-se "-2" posições; </p>
    <br>
    <p> Agora é necessário copiar a mensagem, colar na zona de input correspondente e carregar no outro botão. </p>`;
    document.getElementById('output').innerHTML = `Mensagem criptada : \n ${decipheredText}`;
    console.log(document.getElementById('output').innerHTML);
}





/* Para o criptar a mensagem recorrendo ao método assimétrico */
/* Função responsavel por assegurar uma transformação assimétrica da mensagem inicial de forma a eccriptar uma mensagem recorrendo a um algoritmo que codifica a mensagem
e criando uma chave Pública /Privada */
function cryptTextAssym(){
    console.log("cryptTextAssym");

    let publicKey = 0;
    let privateKey = 0;
    let publicKeyUser = 0;
    let privateKeyUser = 0;
    let messageCript = "";
    if((publicKey.length == "")||(privateKey.length == 0)||(publicKeyUser.length == 0)||(privateKeyUser.length == 0)||(messageCript.length == 0)){ 
        //alert("To cipher a text in Assymetric mode, you should type any letter, word, number or caracter, to genarate a ciphered message and Public/Private Key.");
        alert("Para criptar um texto no modo Assimétrico, deverá primeiro escrever uma letra, um número ou um carater especial. Somente nessa altura uma mensagem criptada com chave Pública/Privada será criada.");
    }
    document.getElementById('outputCode').innerHTML =
    `<p> De acordo com a criptografia assimétrica segundo a transformação RSA, as chaves são : </p>
    <p> Publica : </p>
    <p> Privada : </p>`;
    document.getElementById('output').innerHTML = `Mensagem criptada : \n `;

}

let p = 9;
let q = 13;
let n = p*q;
let publicKey = 2;
let phi = (p-1)*(q-1)

/* */
function decryptTextAssym(){
    console.log("decrytTextAssym");
    //let publicKey;
    let privateKey=0;
    let publicKeyUser = 0;
    let privateKeyUser = 0;
    let clearText= "";
    let messageDecript = "";
    let messageInBinary="";
    let plainText = document.querySelector('#textToCipherAssync').value;
    console.log("Message data = ", plainText)
    
    if((plainText.length == 0)||(privateKey != 0)){ 
        //alert("To decipher a text in Asymmetric mode, firstly you must have a message and a private key genarated. Please type a message to cript before this step.");
        alert("Para descriptar uma menssagem no modo Assimétrico, deverá em primeiro lugar ter uma messagem, e uma chave Pública criada. Ainda assim, por fazer introduza um texto antes desta étapa.");
    }
    else{
        // let initialMessage = plainText.split('');
        // console.log("Initial message = ", initialMessage);
        for (let i = 0; i < plainText.length; i++) {
            let temp = plainText.charCodeAt(i);
            console.log("temp ",temp);
            messageInBinary +=  + + temp;
        }
        console.log("messageInBinary = ", messageInBinary);

        let control = 0
        function gcd(a, h){
            while(1){
            control = a % h
                if (control == 0){
                    return h;
                }
                a = h;
                h = control;
            }
        }
        
        while (publicKey < phi){
            // e must be co-prime to phi and
            // smaller than phi.
            if(gcd(publicKey, phi) == 1){
                break;
        }else{
            publicKey = publicKey +1;
            }
        }

        // Private key (d stands for decrypt)
        // choosing d such that it satisfies
        // d*e = 1 + k * totient
        
        let k = 2;
        privateKey = (1 + (k*phi))/publicKey;
        console.log("publicKey ",publicKey);
        console.log("privateKey ",privateKey);
        
        let criptData;
        //Encryption
        for (let i = 0; i < messageInBinary.length; i++) {
            criptData = (messageInBinary[i] ^ publicKey) % n;
            console.log("Encrypted data = ", criptData);
        }


        // Decryption
        messageDecript = (criptData ^ privateKey) % n;
        console.log("Original messageDecript = ", messageDecript)}

        clearText += String.fromCharCode(messageDecript);
        console.log("Original Message Sent = ", clearText);

    document.getElementById('outputCode').innerHTML =
    `<p> De acordo com a criptografia assimétrica segundo a transformação RSA, as chaves são : </p>
    <p> Publica : ${publicKey} </p>
    <p> Privada : ${privateKey} </p>`;
    document.getElementById('output').innerHTML = `Mensagem descriptada:  \n `;
    
}


/* */
document.querySelector('#cipher').onclick = function(){
    //Message to be encrypted
    let plainText = document.querySelector('#textToCipherAssync').value;
    console.log("Message data = ", plainText)
    
    let control = 0
    function gcd(a, h){
        while(1){
        control = a % h
            if (control == 0){
                return h;
            }
            a = h;
            h = control;
        }
    }

    
    let p = 3;
    let q = 7;
    let n = p*q;
    let e = 2;
    let phi = (p-1)*(q-1)
    
    while (e < phi){
        // e must be co-prime to phi and
        // smaller than phi.
        if(gcd(e, phi) == 1){
            break
    }else{
            e = e+1
        }
    }
    // Private key (d stands for decrypt)
    // choosing d such that it satisfies
    // d*e = 1 + k * totient
    
    let k = 2;
    let d = (1 + (k*phi))/e;
    
    
    //Encryption 
    let cript = (msg ^ e) % n
    // let c = pow(msg, e)
    // c = math.fmod(c, n)
    console.log("Encrypted data = ", cript)
    
    // Decryption
    let decript = (c ^ d) % n
    // let m = pow(c, d)
    // m = math.fmod(m, n)
    console.log("Original Message Sent = ", decript)
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
