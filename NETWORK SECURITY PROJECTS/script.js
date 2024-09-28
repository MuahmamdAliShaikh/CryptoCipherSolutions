function encryptText() {
    const plainText = document.getElementById('plainText').value;
    let cipherText = '';

    for (let i = 0; i < plainText.length; i++) {
        let charAscii = plainText.charCodeAt(i);

        if (charAscii >= 65 && charAscii <= 90) {
            cipherText += String.fromCharCode(((charAscii - 65 + 3) % 26) + 65);
        } else if (charAscii >= 97 && charAscii <= 122) {
            cipherText += String.fromCharCode(((charAscii - 97 + 3) % 26) + 97);
        } else {
            cipherText += plainText[i];
        }
    }
    document.getElementById('cipherText').value = cipherText;
}

function decryptText() {
    const cipherText = document.getElementById('cipherText').value;
    let plainText = '';

    for (let i = 0; i < cipherText.length; i++) {
        let charAscii = cipherText.charCodeAt(i);

        if (charAscii >= 65 && charAscii <= 90) {
            plainText += String.fromCharCode(((charAscii - 65 - 3 + 26) % 26) + 65);
        } else if (charAscii >= 97 && charAscii <= 122) {
            plainText += String.fromCharCode(((charAscii - 97 - 3 + 26) % 26) + 97);
        } else {
            plainText += cipherText[i];
        }
    }
    document.getElementById('decryptedText').value = plainText; 
}