// MENAMPILKAN PILIHAN PLAYER
var player = prompt('pilih : gunting / kertas /  batu')

//MENANGKAP PILIHAN KOMPUTER DENGAN MEMBANGKITKAN BILANGAN RANDOM
var computer = Math.random();

//KARENA METHOD RANDOM NGACAK ANGKA DARI 0 SAMPAI 1, MAKA MAKA KITA ATUR DULU
if (computer < 0.34) {
	computer = 'gunting'
} else if (computer>= 0.34 && computer<=0.67) {
	computer = 'kertas'
} else {
	computer = 'batu'
}

var hasil = ''
//MENENTUKAN RULES
// if (player==computer) {
// 	hasil = 'SERI'
// } else if (player=='gunting') {
// 	if (computer=='kertas') {
// 		hasil = 'MENANG'
// 	} else {
// 		hasil = 'KALAH'
// 	}
// } else if (player=='kertas') {
// 	if (computer=='gunting') {
// 		hasil = 'KALAH'
// 	} else {
// 		hasil = 'MENANG'
// 	}
// } else {
// 	if (computer=='kertas') {
// 		hasil = 'KALAH'
// 	} else {
// 		hasil = 'MENANG'
// 	}
// }
if (player==computer) {
	hasil = 'SERI'
} else if (player=='gunting') {
	hasil = (computer=='kertas') ? 'MENANG' : 'KALAH'
} else if (player=='kertas') {
	hasil = (computer=='gunting') ? 'KALAH' : 'MENANG'
} else {
	hasil = (computer=='kertas') ? 'KALAH' : 'MENANG'
}

// MENAMPILKAN HASILNYA
alert('kamu memilih : ' + player + ' dan komputer memilih : ' + computer + '\n YOU ' + hasil)
