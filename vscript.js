let matrix = [];
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let alphabetLength = alphabet.length;
let randomKey = '';

for (let i = 0; i < alphabetLength; i++) {
    let row = [];
    for (let j = 0; j < alphabetLength; j++) {
        let letter = alphabet[(i + j) % alphabetLength];
        row.push(letter);
    }
    matrix.push(row);
}

function generateRandomKey(length) {
    randomKey = '';
    for (let i = 0; i < length; i++) {
        let randomAlphabet = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        randomKey += randomAlphabet;
    }
    console.log("Random Key:", randomKey);
}

function encryptText() {
    let plainText = document.getElementById('plainText').value;
    let plainTextLength = plainText.length;
    generateRandomKey(plainTextLength);

    let encryptedText = '';
    for (let i = 0; i < plainText.length; i++) {
        let plainChar = plainText[i];
        let keyChar = randomKey[i];

        if (plainChar.match(/[a-zA-Z]/)) {
            plainChar = plainChar.toUpperCase();
            let plainIndex = alphabet.indexOf(plainChar);
            let keyIndex = alphabet.indexOf(keyChar);
            encryptedText += matrix[keyIndex][plainIndex];
        } else {
            encryptedText += plainChar; 
        }
    }

    document.getElementById('cipherText').value = encryptedText;
    console.log("Encrypted Text:", encryptedText);
}

function decryptText() {
    let encryptedText = document.getElementById('cipherText').value;
    let decryptedText = '';

    for (let i = 0; i < encryptedText.length; i++) {
        let cipherChar = encryptedText[i];
        let keyChar = randomKey[i];

        if (cipherChar.match(/[a-zA-Z]/)) {
            let keyIndex = alphabet.indexOf(keyChar);
            let row = matrix[keyIndex];
            let colIndex = row.indexOf(cipherChar);
            decryptedText += alphabet[colIndex];
        } else {
            decryptedText += cipherChar; 
        }
    }

    document.getElementById('decryptedText').value = decryptedText;
    console.log("Decrypted Text:", decryptedText);
}
