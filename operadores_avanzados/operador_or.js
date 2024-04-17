//operador lógico OR (||)
/* operando1 || operando2 */
/* El operador OR retorna el operando de la izquierda si no es FALSY, y si no retorna el de la derecha. Es decir si el operador de la izquierda es distinto de 0, null, undefined, NaN, false, o string Vacio; entonces retorna ese operando, y sino retorna el de la derecha. */

//TABLA DE VALORES FALSY

console.log( 0 || "Falsy") //Falsy
console.log( 40 || "Falsy") //40
console.log( null || "Falsy") //Falsy
console.log( undefined || "Falsy") //Falsy
console.log( "Hola Mundo" || "Falsy") //Hola Mundo
console.log( "" || "Falsy") //Falsy
console.log( NaN || "Falsy") //Falsy
console.log( true || "Falsy") //Falsy
console.log( false || "Falsy") //Falsy

/* ---ejemplo--- */

const user = {
    name: "sol vertz",
    age: 15
}

const user2 = null

console.log(user || "el usuario no existe")  //{name: 'sol vertz', age: 15}

console.log(user2 || "El usuario no existe") // El usuario no existe