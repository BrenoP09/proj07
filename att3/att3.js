let num = parseInt(prompt("Digite um número para ver a tabuada dele:"));
let resultado = "Tabuada do " + num + ":\n";
for (let i = 1; i <= 10; i++) {
    let resultado = num * i;
    resultado += num + " x " + i + " = " + resultado + "\n";
}
alert(resultado);