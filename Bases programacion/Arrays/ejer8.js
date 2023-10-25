const N = 9;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomArray = [];
for (let i = 0; i < N; i++) {
  randomArray.push(getRandomInt(1, 100)); 
}

console.log("Array generado aleatoriamente:", randomArray);
const centro = Math.floor(N / 2);
console.log("Valor en el centro del array:", randomArray[centro])


