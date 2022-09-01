const array1 = [12, 34, 56];
const array2 = ["olá", "labenu", "opa"];
const array3 = [123, "14", false];

console.log(array1.length, array2.length, array3.length);

console.log(array1[0], array2[1], array3[3]);

array1.push(32);
console.log(array1.includes(32));
console.log(array3.includes(442));
