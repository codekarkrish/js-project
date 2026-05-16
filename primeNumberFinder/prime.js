function checkPrime(num) {
    if (num <= 1) return false;
 for (let i = 2; i <= Math.sqrt(num); i++) {
     if (num % i === 0) return false;
 }
 return true;
}

document.getElementById("submit").addEventListener("click", function() {
    let num = document.getElementById("numberInput").value;
    let result = checkPrime(parseInt(num));
    document.getElementById("result").textContent = result ? `${num} is a prime number.` : `${num} is not a prime number.`;
});

document.getElementById("clearButton").addEventListener("click", function() {
    document.getElementById("numberInput").value = "";
    document.getElementById("result").textContent = "Result";
});