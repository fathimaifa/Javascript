// cara 1 - function declaration
function halo() {
	console.log(this)
	console.log('function declaration')
}
halo();



// cara 2 - object literal
var obj = {};
obj.halo = function() {
	console.log(this)
	console.log('object literal')
}
obj.halo();



// cara 3 - constuctor
function Halo() {
	console.log(this)
	console.log('constructor')
}
new Halo();












// // cara 1 - function declaration
// function halo() {
// 	console.log('function declaration')
// }
// halo();



// // cara 2 - object literal
// var obj = {};
// obj.halo = function() {
// 	console.log('object literal')
// }
// obj.halo();



// // cara 3 - constuctor
// function Halo() {
// 	console.log('constructor')
// }
// new Halo();