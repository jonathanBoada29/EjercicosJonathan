let a = Number(prompt("Digite un numero"))
let b = Number(prompt("Digite otro numero"))
 
for( let i=a; i<=b; i++){
    let x= i%2
    if(x===0){
        console.log(i)
    }
}
