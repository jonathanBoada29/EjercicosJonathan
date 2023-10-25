class Triangulo {
    constructor(a, b, c) {
      this.lado1 = a;
      this.lado2 = b;
      this.lado3 = c;
    }

    esEquilátero() {
      return this.lado1 === this.lado2 && this.lado2 === this.lado3;
    }

    esIsosceles() {
      return (this.lado1 === this.lado2 , this.lado1 === this.lado3 ,this.lado2 === this.lado3);
    }

    esEscaleno() {
      return !this.esEquilátero() && !this.esIsosceles();
    }

    ladoMayor() {
      if (this.lado1 >= this.lado2 && this.lado1 >= this.lado3) {
        return this.lado1;
      } else if (this.lado2 >= this.lado1 && this.lado2 >= this.lado3) {
        return this.lado2;
      } else {
        return this.lado3;
      }
    }

    tipoTriangulo() {
      if (this.esEquilátero()) {
        return "Equilátero";
      } else if (this.esIsosceles()) {
        return "Isósceles";
      } else {
        return "Escaleno";
      }
    }
  }


  function cargarTriangulo() {
    const lado1 = parseFloat(prompt("Ingrese la longitud del primer lado:"));
    const lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado:"));
    const lado3 = parseFloat(prompt("Ingrese la longitud del tercer lado:"));

    const triangulo = new Triangulo(lado1, lado2, lado3);

    console.log('El lado con mayor longitud es:' ,triangulo.ladoMayor());
    console.log('El triángulo es de tipo:' ,triangulo.tipoTriangulo());
  }

  cargarTriangulo();