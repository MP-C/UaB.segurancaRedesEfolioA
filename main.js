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
