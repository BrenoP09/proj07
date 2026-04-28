let soma = 0;

for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(prompt("Digite a nota numero " + i + ":" ));
    soma += nota;
}

let media = soma / 5;

alert("A média das notas é: " + media.toFixed(2));