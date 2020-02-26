var jumlahAngkot = 10;
var	noAngkot = 1;
var	angkotBeroperasi = 7;

while (noAngkot<=angkotBeroperasi) {
	console.log('angkot ' + noAngkot + ' beroperasi dengan baik');
	noAngkot++;
}

for (noAngkot=angkotBeroperasi+1; noAngkot<=jumlahAngkot; noAngkot++) {
	console.log('angkot ' + noAngkot + ' tidak beroperasi');
}