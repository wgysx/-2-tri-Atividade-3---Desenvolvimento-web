let peso = 70  // em kg 
let altura = 1.75 // em metros

let imc = peso / (altura * altura);

let classificacao;
if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc < 25) {
    classificacao = "Peso normal";
} else if (imc < 30) {
    classificacao = "Sobrepeso";
} else {
    classificacao = "Obesidade";
}

console.log("IMC: " + imc.toFixed(2));
console.log("Classificação: " + classificacao);