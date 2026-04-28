let soma = 0
for(let i = 1; i<= 10; i ++) { 
    let numero = parseInt( prompt("Digite o " + i + "º número inteiro:"));
    soma = soma + numero;
}
alert("A soma total dos 10 números é: " + soma);