
function saludar() {
    alert("¡Hola desde JavaScript de Coder House!  Completa los siguientes datos");
}

function correr(){
    let apellido = prompt ("Por Favor Ingrese su Apellido");
    let nombre = prompt ("Ahora Ingrese su Nombre");
    let edad = prompt ("Cual es tu edad?");
    let año_actual =  2023;
    let jubilacion =  60;

    let calculo = + jubilacion - + edad;
    let jubilo = + año_actual + calculo;

    alert ("Hola " + nombre + ", " + apellido + "! te vas a jubilar en el año " +  jubilo);
}

function calcular (){
    var numero1 = parseInt(prompt("Ingrese el numero que sera sumado en cada interaccion"));
    var suma = 0;
    var numero2 = parseInt(prompt("Ingrese el numero de iteraciones"));
    console.log(numero1, numero2)
    for(let i = numero1; i <= numero2; i++) {
    suma = suma + numero1;
    console.log(suma);
    }
    alert ("El resultado es:  " +  suma);

}
    
