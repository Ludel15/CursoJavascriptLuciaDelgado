
function saludar() {
    alert("¡Hola desde JavaScript de Coder House!  Completa los siguientes datos");
}

function correr(){
    let apellido = prompt ("Por Favor Ingrese su Apellido");
    let nombre = prompt ("Ahora Ingrese su Nombre");
    let edad = prompt ("Cual es tu edad?");
    let año_actual = prompt ("2023");
    let jubilacion = prompt ("60");

    let calculo = + jubilacion - + edad;
    let jubilo = + año_actual + calculo;

    alert ("Hola " + nombre + "" + apellido );
    alert ("Te vas a jubilar en el año" + jubilo);
}


    var numero1 = parseInt(prompt("Ingrese el numero que sera sumado en cada interaccion"));
    var suma = 0;
    for(let i = 0; i < 10; i++) {
    var numero2 = parseInt(prompt("Ingrese el numero para sumar"));
    suma = numero1 + numero2;
    console.log(suma);
    }
