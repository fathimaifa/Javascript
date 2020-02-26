var cek[]
function tambah() {
	var hasil=0
	for (var i=0; i<arguments.length; i++) {
		hasil+=arguments[i];
	}
	return hasil;
}

// var a = parseInt(prompt('masukan nilai a: '))
// var b = parseInt(prompt('masukan nilai b: '))

alert(tambah(3,4,5,9)) //bisa costum mau berapa argumentnya. karena pake array arguments yang udah disediakan sama Javascript

// var jum = parseInt(prompt('berapa angka yang mau dijumlahkan?'))
// for (var i=0; i<jum; i++) {
// 	cek[i] = parseInt(prompt('angka ke-'+(i+1)' = '))
// }

// tambah(cek)
