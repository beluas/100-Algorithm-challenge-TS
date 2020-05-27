function addDigits(n) {
	return n
		.toString()
		.split("")
		.reduce((tot, num) => parseInt(tot) + parseInt(num));
}

console.log(addDigits(12355));
