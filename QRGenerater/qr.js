// QR Code instance
let qrcode = new QRCode(document.querySelector(".qrcode"));

// Default QR
qrcode.makeCode("Why did you scan me?");

// Generate QR
function generateQr() {
    let text = document.getElementById("qrText").value;

    if (text.trim() === "") {
        alert("Input field cannot be blank!");
        return;
    }

    qrcode.makeCode(text);
}

// Download QR with custom filename
function downloadQR() {
    let qrContainer = document.querySelector(".qrcode");
    let canvas = qrContainer.querySelector("canvas");

    if (!canvas) {
        alert("Please generate QR first!");
        return;
    }

    // get filename
    let fileName = document.getElementById("fileName").value;

    if (fileName.trim() === "") {
        fileName = "qr-image";
    }

    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = fileName + ".png";

    link.click();
}

// Enter key support
document.getElementById("qrText").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        generateQr();
    }
});