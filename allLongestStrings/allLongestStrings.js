function allLongestStrings(inputArray) {
	let strArr = [];
	let maxLength = Math.max(inputArray);

	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i].length > maxLength) {
			maxLength = inputArray[i].length;
		}
	}

	strArr = inputArray.filter((el) => el.length === maxLength);
}

console.log(
	allLongestStrings(["fdkjn", "dfgdfgd", "vfre", "adfg", "aba", "abcdefg"])
);

console.log(
	allLongestStrings([
		"noproblem0",
		"words",
		"peppeniell",
		"abc",
		"wewe",
		"noproblem1",
	])
);
