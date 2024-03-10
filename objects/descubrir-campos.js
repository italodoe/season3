var startTime, endTime;

function printPerformance() {
  console.log(`Took ${endTime - startTime} milliseconds`);
}
function foo(obj) {
  startTime = performance.now();
  if ("name" in obj) console.log("El nombre es:", obj.name);
  endTime = performance.now();
  printPerformance();
}
function foo2(obj) {
  startTime = performance.now();
  if (obj.hasOwnProperty("name")) console.log("El nombre es:", obj.name);
  endTime = performance.now();
  printPerformance();
}

function printFields(obj){
    for (const field in obj)
        console.log(`Existe el campo: ${field} con valor ${obj[field]}` ) 
}

foo({ lastname: "Cena" });
foo({ name: "Jon" });

foo2({ lastname: "Cena" });
foo2({ name: "Jon" });


printFields({ name: "Jon",lastname: "Cena", job: "actor" });
