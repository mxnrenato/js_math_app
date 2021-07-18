//Código del cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " cm^2")
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 6;
const alturaTriangulo = 5.5

console.log("El triangulo posee las siguiente medidas: \n Lado 1: " + ladoTriangulo1 + " \n Lado 2: " + ladoTriangulo2 + " \n Base: " + baseTriangulo + "\n medidas en cm.")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm.")

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El area del triangulo es: " + areaTriangulo + " cm^2.")

console.groupEnd();

//Codigo del Circulo
console.group("Circulos")

const radio = 6;
const diametro = radio*2;
const PI = Math.PI;

const perimetroCirculo = (2*PI*radio);
console.log("El perimetro del circulo es: " + perimetroCirculo + " cm.")
const areaCirculo = PI*diametro;
console.log("El area del circulo es: " + areaCirculo + " cm^2.")



console.groupEnd();