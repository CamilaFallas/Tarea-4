/*
Generar un programa que pida los años de edad de una persona, con esta edad se
genera un if el cual determinará su ciclo de vida si la persona tiene igual o menos de 3 años
es un bebe, si su edad es igual o mayor a 4 años pero menor a 12 es un niño, si es igual o
mayor a 12 años pero menor a 18 años está en la adolescencia, si es igual o mayor a 18
pero menor a 65 es adulto, si es igual o mayor a 65 años es adulto mayor.

let peso = prompt ("Digite su peso en kilogramos");
let altura = prompt ("Digite su altura en metros");
let imc = peso / Math.pow(altura,2);
if (imc<= 18.5){
    alert("Tiene peso bajo. IMC= " + imc.toFixed(2))
}
else if (imc>=18.5 && imc<=24.9){
    alert("Tiene un peso normal. IMC= " + imc.toFixed(2))
}
else if (imc>=25 && imc<=29.9){
    alert("Tiene sobre peso. IMC= "+ imc.toFixed(2))
}
else if (imc>=30 && imc<=34.9){
    alert("Tiene Obesidad media. IMC= "+ imc.toFixed(2))
}
else if (imc>40){
    alert("Tiene obesidad morbida. IMC= "+ imc.toFixed(2))
}
else{
    alert ("Vuelva a ingresar los valores."+ imc.toFixed(2))
}

*/


let edad =prompt(" Digite su edad ")

if (edad <= 3) {
    alert(" Es un bebé ")
}

else if (edad >= 4 && edad < 12) {
    alert(" Es un niño/a ")
}
else if (edad >= 12 && edad < 18) {
    alert(" Es un adolescente ")
}
else if ( edad >=18 && edad < 65 ) {
    alert(" Es un adulto ")
}
else {
    alert(" Es un adulto mayor ")
}