var jumlahAngkot = 10;
var angkotBeroperasi = 4;

for (var noAngkot = 1; noAngkot<=jumlahAngkot; noAngkot++) {
	if (noAngkot<=angkotBeroperasi) {
		console.log('angkot ' + noAngkot + ' beroperasi dengan baik');
	} else {
		console.log('angkot ' + noAngkot + ' tidak beroperasi');
	}
}