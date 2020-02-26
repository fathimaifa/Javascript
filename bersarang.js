var s = ''
for (var i = 5; i>=1; i--) {
	for (var j = 1; j<=i; j++) {
		s+='*'
	}
	s+='\n'
}
console.log(s)