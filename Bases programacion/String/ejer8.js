let compra = prompt("Introduce los productos de tu compra separados por una (,) ")
let compraMejor = compra.split(",")

console.log(compraMejor)

for(let i = 0; i <compraMejor.length; i++){

    console.table(compraMejor[i])

} 
