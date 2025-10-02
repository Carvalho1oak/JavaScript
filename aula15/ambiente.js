let num = [1, 4, 7, 5, 8, 2, 9];
num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} posições`);
for (let pos = 0; pos < num.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

let numeros = [1, 2, 4, 6, 7, 8, 12, 14, 15, 18, 21, 23];
console.log(`O segundo vetor tem ${numeros.length} posições`);
numeros.sort((a, b) => a - b);
for (let posição = 0; posição < numeros.length; posição++) {
  console.log(`A posição ${posição} tem o valor ${numeros[posição]}`);
}

/*
let n = [1, 4, 7, 5, 8, 2, 9];
n.sort();
console.log(n);

for (let p in n) {
  console.log(`A posição ${p} tem o valor ${n[p]}`);
}*/

/* index of */
/*let n1 = [5, 8, 2, 9, 3];
console.log(n1);
n1.push(1);
n1.sort();

let pos1 = n1.indexOf(2);
if (pos1 == -1) {
  console.log("O valor não foi encontrado!");
} else {
  console.log(`O valor está na posição ${pos1}`);
}
console.log(`O vetor tem ${n1.length} posições`);
*/
