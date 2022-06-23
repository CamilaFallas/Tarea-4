/*
8-sacar el promedio de tres notas en la cual la nota mayor es de 100 y la mínima 0,
si el promedio es menor a 65 debe decir que esta quedado, si es igual o mayor a 65 pero
menor a 70 debe decir pasó raspando, si es mayor a 70 pero menor o igual a 85 que diga
no esta mal, si es mayor a 85 pero menor o igual a 99 que diga muy bien, si la nota es igual
a 100 que diga excelente te ganaste un abrazo :)

Estudiantes Heylin Loaiza, Valeria Acuña y Camila Fallas*/

let notauno = prompt ("Ingrese nota 1")
let notados = prompt ("Ingrese nota 2")
let notatres = prompt ("Ingrese nota 3")
let promedio = (((notauno + notados + notatres)/3))

if (promedio < 65){
    alert("No aprobo")
}

else if (promedio>=65 && promedio <70){
    alert("Paso raspando")
}

else if (promedio > 70 && promedio <= 85){
    alert("No esta mal")
}

else if (promedio > 80 && promedio <= 99){
    alert("Muy bien")
}

else{
    alert("Excelente abrazooo")
}

