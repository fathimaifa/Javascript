//DEKLARASI ARRAY
var arr = ['fathima', 'umar', 'ifa']


//METHOD LENGTH
console.log('METHOD LENGTH')
for (var i=0; i<arr.length; i++) {
	console.log(arr[i])
}
console.log('\n')


//METHOD JOIN
console.log('METHOD JOIN')
console.log(arr.join('/'))
console.log('\n')


//METHOD PUSH & POP (menambah dan menghapus elemen di akhir)
console.log('METHOD PUSH & POP')
arr.push('jamal', 'kudo')
console.log(arr.join(' - '))
arr.pop()
arr.pop()
console.log(arr.join(' - '))
console.log('\n')


//METHOD UNSHIFT & SHIFT (menambah dan menghapus elemen di awal)
console.log('METHOD UNSHIFT & SHIFT')
arr.unshift('jamal', 'kudo')
console.log(arr.join(' - '))
arr.shift()
arr.shift()
console.log(arr.join(' - '))
console.log('\n')


//METHOD SPLICE DAN SLICE (memotong array)
console.log('METHOD SPLICE DAN SLICE')
//splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ..)
arr.splice(1, 2, 'dody', 'fitri')
console.log(arr.join(' - '))
//slice(awal, akhir). karena dia memisahkan array yang kita pilih, maka kita harus siapkan variabel baru untuk menampung array yang akan di spice ini.
var arr2 = arr.slice(1,4) // artinya dia mengambil array index ke 1 sampai index ke 3. angkayang ditulis terakhir itu(4) angka yang ga kebawa.
console.log(arr2.join(' - '))
console.log('\n')


//METHOD SORT
console.log('METHOD SORT')
var nomer = [1,2,10,5,4,20,3,9,7]
console.log(nomer)
nomer.sort(function(a,b){
	return a-b;
})
console.log(nomer.join(' - '))
console.log('\n')


//METHOD FOREACH & MAP (looping for khusus untuk method array. bedanya map mengembalikan nilai array sedangkan foreach tidak)
console.log('METHOD FOREACH & MAP')
console.log('- FOREACH')
arr.forEach(function(e,i) {
	console.log('Mahasiswa ke-' + (i+1) + ' : ' + e)
})
console.log('- MAP')
var nomer2 = nomer.map(function(e) {
	return e*2
})
console.log(nomer)
console.log(nomer2.join(' - '))
var arr3 = arr.map(function(e) {
	return e + ' 9a'
})
console.log(arr3.join(' - '))
console.log('\n')


//METHOD FILTER DAN FIND. filter mencari dan mmengembalikan nilai beberapa array. find mencari dan mengembalikan nilai hanya satu index array.
console.log('METHOD FILTER & FIND')
console.log('- FILTER')
var angka = [1,2,10,4,5,20,6,8,18]
console.log(angka)
var angka2 = angka.filter(function(x) {
	return x > 5
})
console.log('mencari array yang x > 5 : ' + angka2.join(' - '))

console.log('- FIND')
console.log('angka = [' + angka.join(',') + ']')
var angka2 = angka.find(function(x) {
	return x > 5
})
//dia hanya mencari angka pertama yang lebih besar dari 5 makanya yang muncul 10, bukan 6
console.log(angka2)
console.log('\n')

