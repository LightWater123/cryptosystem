function getRandomChar() 
{
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?-=[];,./~';
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

function padOrTrim(str, length) 
{
    let randomStr = '';
    for (let i = str.length; i < length; i++) {
        randomStr += getRandomChar();
    }
    if (str.length > length) {
        return str.substring(0, length);
    }
    return str + randomStr;
}

function encryptText() 
{
    const input = document.getElementById('encryptTxt').value;
    const shift = 3;
    const fixedLength = 10; // Set the desired fixed length

    let encryptedText = '';

    if(input.trim() === '')
        {
            alert('Please fill up the encryption box.');
            return;
        }
        
    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) { 
            encryptedText += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            encryptedText += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            encryptedText += input.charAt(i); 
        }
    }

    // Prefix the length of the actual encrypted text before padding
    const actualLength = encryptedText.length;
    encryptedText = actualLength + encryptedText;
    encryptedText = padOrTrim(encryptedText, fixedLength);

  
    document.getElementById('encryptTxt').value = encryptedText;
}

function decryptText() 
{
    const input = document.getElementById('decryptTxt').value;
    const shift = 3;

    // Extract the length of the actual encrypted text
    const actualLength = parseInt(input.substring(0, 1));
    let decryptedText = '';

    for (let i = 1; i <= actualLength; i++) { // Start from 1 to skip the length prefix
        let charCode = input.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            decryptedText += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) { 
            decryptedText += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else {
            decryptedText += input.charAt(i);
        }
    }


    document.getElementById('decryptTxt').value = decryptedText;
}
