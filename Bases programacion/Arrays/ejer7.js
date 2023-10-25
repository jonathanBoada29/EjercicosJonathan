let arraysNum = []

for(let i = 0; i < 5; i++){

    let arraysNum2 = Number(prompt("Escriba los números para multiplicar"))
     arraysNum.push(arraysNum2);

}

let multiplicar = arraysNum.map(function(element) {

    return element * 2;
  
  });


console.table(multiplicar)
