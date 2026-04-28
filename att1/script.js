let entrada = prompt("Digite um numero entre 1 até 481:");
let numfinal = parseInt(entrada);
let resultado = (" ");

for(let i = 1; i<= numfinal; i++){
    resultado = resultado + i + " ";
}
alert("sua lista ficou assim:"+ resultado);