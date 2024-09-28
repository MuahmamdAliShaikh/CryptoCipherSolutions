let matrix = [];
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let topRow = [' ', ...alphabet.split('')];
matrix.push(topRow);

for (let i = 0; i < 3; i++) {
    let row = [];
    let permutation = alphabet.split('');
    for (let j = 0; j < alphabet.length; j++) {
        let randomIndex = Math.floor(Math.random() * permutation.length);
        row.push(permutation[randomIndex]);
        permutation.splice(randomIndex, 1);
    }
    matrix.push([`m${i + 1}`, ...row]);
}

function encryptText() {
    let plainText = document.getElementById('plainText').value;
    let encryptedText = '';

    for (let i = 0; i < plainText.length; i++) {
        let plainChar = plainText[i];
        let rowIndex = i % 3; 
        let charIndex = alphabet.indexOf(plainChar.toUpperCase()); 

        if (charIndex >= 0) {
            encryptedText += matrix[rowIndex + 1][charIndex + 1]; 
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
        let rowIndex = i % 3; 
        let row = matrix[rowIndex + 1];
        let charIndex = row.indexOf(cipherChar);

        if (charIndex >= 1) {
            decryptedText += alphabet[charIndex - 1]; 
        } else {
            decryptedText += cipherChar; 
        }
    }
    document.getElementById('decryptedText').value = decryptedText; 
    console.log("Decrypted Text:", decryptedText);
}
