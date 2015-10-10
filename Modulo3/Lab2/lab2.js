/* Array en JavaScript */

'use strict';

var my_array = new Array();

var other_array = [];

my_array = [1,2,2,3,4,4,555,55,77,6,6,15000];

console.log(my_array);

console.log(my_array[3]);

other_array = ['pera','piña','manzana','fresa'];

console.log(other_array);

/* metodos sobre los arreglos */

// Agregando elemento despues de la ultima posicion

my_array.push('HOLA');

other_array.push('BIENVENIDO');

console.log(other_array);

console.log(my_array);

// Eliminar el ultimo elemento
my_array.pop();

other_array.pop();

// eliminar el primer elemento
my_array.shift();

other_array.shift();

console.log(other_array);

console.log(my_array);


// Organizar elementos
my_array.sort();

other_array.sort();

console.log(other_array);

console.log(my_array);

var tasks = ['comer', 'nadar', 'dormir'];

console.log(tasks);

tasks.splice(1,3, "Aprender", "reir", "saltar");

console.log(tasks);
