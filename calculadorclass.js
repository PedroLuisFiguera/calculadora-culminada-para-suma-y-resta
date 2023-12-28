


"use strict";


function Agregar(valor)
{
    const cedula = document.getElementById("cedula");
    cedula.value += valor;
}

function Calcular()
{
const operacion = document.getElementById("cedula").value;
const valores = operacion.split(/[+-]/);
const operadores = operacion.split(/\d+/); 
let resultado = parseFloat(valores[0]);
console.log(resultado )

for (let i = 1; i < valores.length; i++) {
    const numero = parseFloat(valores[i]);
    const operador = operadores[i]; 
    console.log(resultado, operador, numero);
    if (operador === "+")
        resultado = resultado + numero; 
    else if (operador === "-")
        resultado = resultado - numero;
    console.log(`Resultado: ${resultado}`);


const cedula= document.getElementById("cedula");


  cedula.value = resultado.toFixed(); 
   }
}


function Limpiar()
{

document.getElementById("cedula").value= " ";
}

function MostrarArray(){
    

  alert("Array de números:"+ JSON.stringify(numerosArray));
}