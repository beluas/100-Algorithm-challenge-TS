function isLucky(n) {
	let newNumber = n.toString().split("");
	let midIndex = Math.floor(newNumber.length / 2);

	let secondHalf = newNumber.splice(0, midIndex);

	return (
		newNumber.reduce((tot, num) => parseInt(tot) + parseInt(num)) ===
		secondHalf.reduce((tot, num) => parseInt(tot) + parseInt(num))
	);
}

// Input:
// n: 1230

// n: 134008

// n: 10
