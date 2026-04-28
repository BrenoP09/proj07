let Num1 = parseInt(prompt("Digite o primeiro número:"));
let Num2 = parseInt(prompt("Digite o segundo número:"));

let menor = Math.min(Num1, Num2);
let maior = Math.max(Num1, Num2);

let NumPares = "";

for (let i = menor; i <= maior; i++) {
    if (i % 2 === 0) {
        NumPares += i + " ";
    }
}

alert("Números pares encontrados:\n" + NumPares);