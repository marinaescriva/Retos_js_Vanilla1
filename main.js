// Retos js Vanilla 1



// //1. Declara 2 variables numéricas (con el valor que desees), he indica cual es mayor de los
// dos. Si son iguales indicarlo también. Ves cambiando los valores para comprobar que
// funciona.

// let x = 5
// let y = 4

// resultado = (x>y) ? console.log("x es mayor que y") : ((x!=y) ? (console.log("y es mayor que x")): console.log("x e y son iguales"));



// 2. Declara un String que contenga tu nombre, después muestra un mensaje de bienvenida
// por consola. Por ejemplo: si introduzco “Fernando”, me aparezca “Bienvenido Fernando”.

// let nombre ="Marina"

// console.log("Bienvenida" , nombre)



// 3. Modifica la aplicación anterior, para que nos pida el nombre que queremos introducir
// (recuerda usar prompt).

// let nombre = prompt("dime tu nombre")

// console.log("Bienvenid@" , nombre)


// 4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá por teclado
// (recuerda pasar de String a double con parseDouble). Usa la constante PI.

// let pi = 3.14;

// let obj = parseInt(prompt("Dime el radio de tu círculo"));

// console.log(pi*(obj*2));



// 5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también
// debemos indicarlo.

// let numero = parseInt(prompt("dime un numero"));

// ((numero % 2) == 0) ? console.log("es divisible por 2") : console.log ("no es divisible por 2");


// 6. Lee un número por teclado que pida el precio de un producto (puede tener decimales) y
// calcule el precio final con IVA. El IVA será una constante que sera del 21%.

// let precio = parseFloat(prompt("¿Qué precio tiene x?"))
// const iva = 0.21;

// let precioFinal = precio + (precio * iva);

// console.log(precioFinal);


// 7. Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.

// let i = 0;

// while(i <= 100){

//     console.log(i)
//     i++
// }


// // 8. Haz el mismo ejercicio anterior con un bucle for.

// for (let i=1; i<=100; i++){
//     console.log(i);
// }


// 9. Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza el bucle
// que desees.


// for(let i=1; i<=100;i++){

//     if(i%2 === 0){
//         console.log(i, "es divisible entre 2")
//     }
//     else if(i%3 === 0){
//         console.log(i, "es divisible entre 3")
//     }else{
//         console.log(i, "no es divisible ni por 2 ni por 3")
//     }
// }


// 10. Realiza una aplicación que nos pida un número de ventas a introducir, después nos
// pedirá tantas ventas por teclado como número de ventas se hayan indicado. Al final
// mostrará la suma de todas las ventas. Piensa que es lo que se repite y lo que no.


// let nVentas= parseInt(prompt("dime el numero de ventas")):

// for(i=0; i<nVentas; i++){

//     total += parseInt(prompt("dime cuanto te ha costado esto"))

// }
// console.log(total)



// 11. Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral
// o no. Usa un switch para ello.

// let dia = prompt("dime un dia de la semana").trim().toLowerCase();

// switch(dia){

//     case "lunes": 
//     case "martes": 
//     case "miercoles":
//     case "jueves":
//     case "viernes": console.log("no es finde")

//     break;

//     case "sabado":
//     case "domingo":  console.log("es finde")

//     break;

// }



// 12. Escribe una aplicación con un String que contenga una contraseña cualquiera. Después
// se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá
// más la contraseña y mostrará un mensaje diciendo “Enhorabuena”. Piensa bien en la
// condición de salida (3 intentos y si acierta sale, aunque le queden intentos).

let contra = "marina";

for(let i=0; i<3; i++){
    
    let respuesta = prompt("dime la contraseña").trim().toLowerCase();

    if(respuesta === contra){

        console.log("enhorabuena") 
        break;
    }else{
        console.log("prueba otra vez")
    }

}








