function encryptText() {
    let inputText = document.getElementById("inputText").value;
    let encryptedText = btoa(inputText); // تحويل النص إلى Base64
    document.getElementById("outputText").value = encryptedText;
}

function decryptText() {
    let encryptedText = document.getElementById("outputText").value;
    try {
        let decryptedText = atob(encryptedText); // فك تشفير Base64
        document.getElementById("inputText").value = decryptedText;
    } catch (e) {
        alert("النص المدخل غير صحيح!");
    }
}
