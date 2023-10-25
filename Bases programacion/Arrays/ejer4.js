let aproArray = [11,12,17,15,18,12,13,19,16,13]
let desaArray = [8,5,4,6,2,8,1,9,3,2]

const suma = aproArray.reduce((valorAnterior, valorActual) => {
    return Number(valorAnterior) + Number(valorActual);
  }, 0);

  aprobados = suma / aproArray.length
  
  console.log("Las notas a probadas son: ", aproArray)
  
  console.log("El promedio de los aprobados es: ", aprobados);

  //

  const suma1 = desaArray.reduce((valorAn, valorAc) => {
    return Number(valorAn) + Number(valorAc);
  }, 0);

  aprobados1 = suma1 / desaArray.length
  
  console.log("Las notas a desaprobadas son: ", desaArray)
  
  console.log("El promedio de los desaprobados es: ", aprobados1);