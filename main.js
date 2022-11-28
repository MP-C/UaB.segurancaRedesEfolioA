<<<<<<< HEAD
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
    console.log("Using Crypt Text in Symmetric mode ");
    let plainText = document.querySelector('#textToCipherSync').value;
    let cipheredText = "";  /* Para iniciar a variavel vazia, onde ficará a mensagem codificada */
    let codeSymbols = 0;    /* Serve para contar a quantidade de caracteres especiais e numeros que sofreram transformação */
    let codeCapitalCase = 0;/* Serve para contar a quantidade de caracteres maiusculos que sofreram transformação */
    let codeLowerCase = 0;  /* Serve para contar a quantidade de caracteres minusculos que sofreram transformação */

    /* Para garantir que o utilizador escreve algo como texto a criptar*/
    if(plainText.length == 0){ 
        /* Para informar o utilizador que deve introduzir caracteres */
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
            cipheredText += String.fromCharCode(message);
        }
    }        
    document.getElementById('outputCode').innerHTML =
    `<p> De acordo com a Tabela ASCII a quantidade de caracteres transformados por rotação de carateres : </p>
    <p> > ${ codeSymbols} especiais e números, moveram-se "-1" posições; </p>
    <p> > ${ codeLowerCase} minúsculas, moveram-se "+6" posições; </p>
    <p> > ${ codeCapitalCase} maiúsculas, moveram-se "+2" posições; </p>
    <br>
    <p> Agora é necessário copiar a mensagem, colar na zona de input correspondente e carregar no outro botão. </p>`
    document.getElementById('output').innerHTML = `Mensagem criptada : \n ${cipheredText} `;
    console.log(document.getElementById('output').innerHTML);
}

/* Função responsavel por assegurar uma transformação simétrica da mensagem inicial de forma a descriptar a mensagem recorrendo ao algoritmo inverso,*/
function decryptTextSymm(){
    console.log("Using Decrypt Text in Symmetric mode ");
    let plainText = document.querySelector('#textToCipherSync').value;
    let decipheredText = "";/* Para iniciar a variavel vazia, onde ficará a mensagem codificada */
    let codeSymbols = 0;    /* Serve para contar a quantidade de caracteres especiais e numeros que sofreram transformação */
    let codeCapitalCase = 0;/* Serve para contar a quantidade de caracteres maiusculos que sofreram transformação */
    let codeLowerCase = 0;  /* Serve para contar a quantidade de caracteres minusculos que sofreram transformação */

    /* Para garantir que o utilizador escreve algo como texto a criptar ou decriptar*/
    if(plainText.length == 0){   /* Para informar o utilizador que deve introduzir caracteres */
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
    <p> Agora pode voltar a repetir o processo escrevendo nova mensagem texto para encriptar. </p>`;
    document.getElementById('output').innerHTML = `Mensagem desencriptada : \n ${decipheredText}`;
    console.log(document.getElementById('output').innerHTML);
}


/* Para o criptar a mensagem recorrendo ao método assimétrico
 * Função responsável por assegurar uma transformação assimétrica da mensagem inicial de forma a 
 * encriptar uma mensagem recorrendo a um algoritmo que codifica a mensagem, criando uma chave Pública / Privada
 * Para poder usar os valores tanto para criptar como descriptar, o que é preciso garantir é que são numeros primos
 * Passando assim por cada uma das etapas da formula de matemática por partes, garantindo a seguranda da mensagem e fiabilidade do que é transmitido : 
 * decryptedMsg = (encryptedMsg)d mod n = ((msg)e mod n)d = ((msg)e)d mod n = (msg) mod n = msg
*/

/* Variáveis utlizadas para cálculo e efeitos de encriptação que poderiam ser aleatíorios */ 
/* Número primo, para exemplo, de modo a executar o exercicio proposto, poderia ser aleatório */
let p = 11;
/* Outro número primo, de modo a executar o exercicio proposto, que também poderia ser aleatório */
let q = 17;
/* Para definir o valor maximo do conjunto - tamanho para criar a chave */
let n  = p * q;
/* Permite calcular a função totiente - Formula matemática usada que permite garantir que um número primo multiplicado por outro se torna 
uma variavel (multipla de "n" e que é ) divisível por outro primo = Algortimo de Euclides */
let phi = (p-1)*(q-1);
/* Variavel onde se guarda o valor da chave publica que é utilizada para a encriptação da mensagem, nesta fase, conhecida por se obter 
o valor da chave para a variável "d", utiliza-se diretamente o nome que esta função representa: obter chave pública com (e,n)*/
let publicKey = getPublicKeyRsa();

/* Pela mesma razão acima indicada, o "e" será um valor no qual ao aplicar congruências e sendo também um número primo e que seja maior que valor "1"
e aqui, utiliza-se o valor de "e" recorrendo já, ao nome que esta função representa: obter chave privada */
let privateKey = getPrivateKeyRsa(); /* Atualização de "e" para que seja co-primo de "phi" a partir do valor calculado na abertura  e⋅d=1modϕ(n) */  

/* Calculo do Máximo Divisor Comum de forma recursiva utilizado para encriptar em generateEncryptionKey() */
function gdc(a, h) {
    let temp;
    while(true) {
        temp = a % h;
        if (temp == 0) {
            return h;
        }

        a = h; 
        h = temp;
    }
}

/* Para encriptar / desencriptar cada elemento do texto de forma independente, e após conversão de modulo, 
converter diretamente de ASCII para elemento correspondente em binário */
function encryptDecryptLetter(letter, type = 'encrypt'){ 
    let key = type === 'encrypt' ? publicKey : privateKey;
    let val = bigInt(letter.charCodeAt(0)).pow(key).mod(n);
    return String.fromCharCode(val);
}

/* Para garantir que o utilizador escreveu alguma mensagem, e para encriptar a mensagem letra-a-letra */
function encryptRsa(plainText) {
    if ( plainText.length == 0) {
        alert("Para encriptar um texto no modo Assimétrico, deverá primeiro escrever uma letra.");
        return;
    }

    /* Para encriptar segundo os principios de RSA => encryptedMsg = (msg)e mod n */
    let encryptedText = [];
    for(let i = 0; i < plainText.length; i++ ) {
        let letter = encryptDecryptLetter(plainText[i]); 
        encryptedText.push(letter);
    }

    return encryptedText.join("");
}

/* Para evitar que o utilizador tente avançar sem escrever alguma mensagem, sem criar em primeiro lugar as
chaves necessárias ao efeito desencriptar a mensagem letra-a-letra */
function decryptRsa(encryptedText) {
    if ( encryptedText.length == 0) {
        alert("Para encriptar um texto no modo Assimétrico, deverá primeiro escrever uma letra.");
        return;
    }

     /* Para desencriptar segundo os principios de RSA => decryptedMsg = (encryptedMsg)d mod n */
    let decryptedText = [];
    for(let i = 0; i < encryptedText.length; i++ ) {
        let letter = encryptDecryptLetter(encryptedText[i], 'decrypt');
        decryptedText.push(letter);
    }
    
    return decryptedText.join("");
}

/* Calculo do inverso do Máximo Divisor Comum de forma recursiva, utilizado getPrivateKeyRsa(),
que permite desencriptar a mensagem com a chave privada */
function invertedGcd(a, m) {
    for (let i = 1; i < m; i++){
        if (((a % m) * (i % m)) % m == 1)
            return i;
    }
    return 1;
}

/* Formula para criar chave Privada a partir do valor de "e" e de "phi", originário da função de totiente */
function getPrivateKeyRsa() {
    let d = invertedGcd(publicKey, phi);
    while (d < 1) {
        d += phi;
    }
    return d;
}

/* Para obter a chave publica que é usada para encriptar a mensagem do utilizador, fazendo recurso aos numeros primos inicialmente introduzidos */
function getPublicKeyRsa(){
    let e = 13;
    while(e < phi) {
        if (gdc(e, phi) == 1) { 
            return e;
        } else {
            e++;
        }
    }
    return e;
}

/* Após a criação das chaves Pública / Privada necessárias, que permitem encryptar/ desencriptar a mensagem numa primeira fase, recorre-se de seguida
as funçôes encrypt() e decrypt() respetivamente */
function cryptTextAssym(){
    console.log("Using Crypt Text in Asymmetric mode ");
    let plainText = document.querySelector('#textToCipherAssync').value; /* Lê a menssagem do utuilizador */
    let messageEncrypted = encryptRsa(plainText);                        /* Encripta a mensagem, com [ m^(e) mod n = c ], fazendo recurso à mesma chaves pública anteriormente criada */

    document.getElementById('outputCode').innerHTML =                    /* Para apresentar a informação ao utilizador */
    `<p> De acordo com a criptografia assimétrica segundo a transformação RSA, as chaves são : </p>
    <p> Publica : ${publicKey} </p>
    <p> Privada : ${privateKey} </p>
    <p> Messagem original : ${plainText} </p>
    <p> Agora é necessário copiar a mensagem, colar na zona de input correspondente e carregar no outro botão. </p>`;
    document.getElementById('output').innerHTML = `Mensagem encriptada : \n ${messageEncrypted}`;
}

/* Para desencriptar a mensagem utilizando as chaves inicialmente criadas, e 
 * Assim que seja desencriptada uma mensagem, pelo menos uma vez, a mensagem recorre ao uso das chaves e limpa-as */
function decryptTextAssym(){
    console.log("Using Decrypt Text in Asymmetric mode ");

    let message = document.querySelector('#textToCipherAssync').value; /* Lê a menssagem do utuilizador */
    let decryptedText = decryptRsa(message);                           /* Desencripta a mensagem, com [c^(d) mod n = m], fazendo recurso à mesma chaves privada anteriormente criada */

    document.getElementById('outputCode').innerHTML =                  /* Para apresentar a informação ao utilizador */
    `<p> De acordo com a criptografia assimétrica segundo a transformação RSA, as chaves são (apagadas imediatamente a seguir): </p>
    <p> Publica : ${publicKey} </p>
    <p> Privada : ${privateKey} </p>`;
    document.getElementById('output').innerHTML = `Mensagem descriptada:  \n ${decryptedText}`;
    publicKey = 0;   /* Reset da chave publica */
    privateKey = 0;  /* Reset da chave privada */
    message = "";    /* Elimina a mensagem */
}
=======
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
>>>>>>> 0768d9b7bcea8e94025d0e4980e6ad3337ddcb64
