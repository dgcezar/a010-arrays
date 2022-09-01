const array1 = [12, 34, 56];
const array2 = ["olá", "labenu", "opa"];
const array3 = [123, "14", false];

const nomeDoArrayOriginalCopia1 = array1.slice();
const nomeDoArrayOriginalCopia2 = array2.slice();
const nomeDoArrayOriginalCopia3 = array3.slice();

nomeDoArrayOriginalCopia1.push(55);
console.log(array1, nomeDoArrayOriginalCopia1);

nomeDoArrayOriginalCopia2.pop();
console.log(array2, nomeDoArrayOriginalCopia2);

nomeDoArrayOriginalCopia3.splice(1, 1);
console.log(array3, nomeDoArrayOriginalCopia3);
