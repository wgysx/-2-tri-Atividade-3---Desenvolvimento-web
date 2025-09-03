console.log(0 == false);   // true: o operador == faz conversão de tipo, e 0 é considerado equivalente a false

console.log('5' == 5);     // true: '5' (string) é convertido para number

console.log(null == undefined);   // true: ambos representam "ausência de valor" e são considerados iguais com ==

console.log('' == 0);      // true: string vazia é convertida para número 0

console.log([] == false);  // true: [] é convertido para um valor primitivo (''), depois para 0, então 0 == false