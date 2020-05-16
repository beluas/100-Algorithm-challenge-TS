function allLongestStrings(arr: string[]): string[] {
	let sortedArr = arr.sort((a, b) => b.length - a.length);

	let strings = [""];
	for (let i = 0; i < arr.length; i++) {
		if (strings[strings.length - 1].length <= sortedArr[i].length) {
			if (strings[strings.length - 1].length === sortedArr[i].length) {
				strings.push(sortedArr[i]);
			}
			strings.pop();
			strings.push(sortedArr[i]);
		}
	}

	return strings;
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
