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

// let precio = parseInt(prompt("¿Qué precio tiene x?"))
// const iva = 0.21;

// let precioFinal = precio + (precio * iva);

// console.log(precioFinal);

// 7. Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.

let i = 0;

while(i <= 100){

    console.log(i)
    i++
}



