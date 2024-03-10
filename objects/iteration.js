let A = Array.from({ length: 100 });
let length = A.length;
for (let i = 0; i < length; ++i){
    const rndInt = Math.floor(Math.random() * 999) + 1
    console.log(A[i] = i);
}
console.log(A);

A.forEach(function (item, index) {
    console.log(`item: ${item}`, `index: ${index}`);
});

/* for (const j of A)
    console.log(A[j]);
 */
for (const j in A)
    console.log(A[j]);