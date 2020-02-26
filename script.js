var x = 10;
console.log("apacik");
alert("selamat datang")
var lagi = true;

// bisa while(lagi === true) atau bisa while(lagi). karena nilai var adalah truthy.
while (lagi === true) {
	var nama = prompt('masukan nama: ')
	alert("Hallo " + nama)

	lagi = confirm("lagi?")
}
alert('terimakasih')
