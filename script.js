function xorEncrypt(text, key) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}

function encryptText() {
    let inputText = document.getElementById("inputText").value;
    let key = "mySecretKey"; // المفتاح السري
    let encryptedText = xorEncrypt(inputText, key);
    document.getElementById("outputText").value = stringToHex(encryptedText);
}

function decryptText() {
    let encryptedText = document.getElementById("outputText").value;
    try {
        let decodedText = hexToString(encryptedText);
        let key = "mySecretKey"; // المفتاح السري
        let decryptedText = xorEncrypt(decodedText, key);
        document.getElementById("inputText").value = decryptedText;
    } catch (e) {
        alert("النص المدخل غير صحيح!");
    }
}

// تحويل النص إلى تمثيل ست عشري (hex)
function stringToHex(str) {
    let hex = "";
    for (let i = 0; i < str.length; i++) {
        hex += str.charCodeAt(i).toString(16).padStart(2, "0");
    }
    return hex;
}

// تحويل النص الست عشري (hex) إلى نص عادي
function hexToString(hex) {
    let str = "";
    for (let i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
}
