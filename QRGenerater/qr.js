// Script.js

// create a new QRCode instance
let qrcode = new QRCode(
    document.querySelector(".qrcode")
);

// Initial QR code generation
qrcode.makeCode("Why did you scan me?");

// Function to generate QR code based on user input
function generateQr() {
    let input = document.querySelector("input").value;

    if (input === "" || input === " ") {
        alert("Input Field Can not be blank!");
    } else {
        qrcode.makeCode(input);
    }
}

// Function to download QR code
function downloadQR() {
    let qrContainer = document.querySelector(".qrcode");

    // QRCode.js usually creates a canvas
    let canvas = qrContainer.querySelector("canvas");

    if (canvas) {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "qrcode.png";
        link.click();
    } 
    else {
        // fallback for image output
        let img = qrContainer.querySelector("img");

        if (img) {
            let link = document.createElement("a");
            link.href = img.src;
            link.download = "qrcode.png";
            link.click();
        } 
        else {
            alert("QR code not generated yet!");
        }
    }
}