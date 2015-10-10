/* objetos y funciones */
var my_object = new Object();

var other_object = {};


my_object = {
	firstName: 'Claudia',
	lastName: 'Franco',
	phone: 3132787207
};


console.log(my_object.firstName);

console.log(my_object['lastName']);

var key;

for(key in my_object){
	console.log(my_object[key]);
}
var objectaa = { 
 a:  'b',
 b: 'c',
 c: 'd' 
};
var key2;

for(key2 in objectaa){
	console.log(objectaa[key2]);
}
// Funciones

function test(){
	console.log('ejecutando una funcion');
}

test();

// usando funcion anonima

var bye_bye = function(){
	console.log('Que tengan una feliz semana santa');
}

bye_bye();