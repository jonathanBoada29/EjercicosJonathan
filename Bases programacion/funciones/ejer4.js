let numero = Number(prompt("Digite el numero que deseas cambiar a letras del 1 al 10 : "))

function numletras (numero){

    if ( numero >= 1 && numero <= 10 )

        switch ( numero )
        {
            case  1 : console.log( "\n   uno" );
                      break;
            case  2 : console.log( "\n   dos" );
                      break;
            case  3 : console.log( "\n   tres" );
                      break;
            case  4 : console.log( "\n   cuatro" );
                      break;
            case  5 : console.log( "\n   cinco" );
                      break;
            case  6 : console.log( "\n   seis" );
                      break;
            case  7 : console.log( "\n   siete" );
                      break;
            case  8 : console.log( "\n   ocho" );
                      break;
            case  9 : console.log( "\n   nueve" );
                      break;
            case 10 : console.log( "\n   diez" );
        }

    else
        console.log( "\n   ERROR: El numero debe ser mayor o igual que 1 y menor o igual que 10." );

    return 0;

}
numletras(numero)
console.log(numero)


