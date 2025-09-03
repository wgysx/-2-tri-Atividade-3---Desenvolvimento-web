let nome = "Enzo"
let idade = 14

let diasPorAno = 365;
let minutosPorDia = 24 * 60;
let segundosPorMinuto = 60;

let diasVividos = idade * diasPorAno;
let minutosVividos = diasVividos * minutosPorDia;
let segundosVividos = minutosVividos * segundosPorMinuto;

console.log("Nome:", nome);
console.log("Idade:", idade, "anos");
console.log("Dias vividos:", diasVividos);
console.log("Minutos vividos:", minutosVividos);
console.log("Segundos vividos:", segundosVividos);