function alphabeticShift(str: string): string {
	let arrStr = str.split("");
	let result = [];
	for (let letter of arrStr) {
		let char = letter.charCodeAt(0);

		if (char === 122) {
			result.push("a");
		} else if (char === 90) {
			result.push("A");
		} else {
			result.push(String.fromCharCode(char + 1));
		}
	}

	return result.join("");
}

console.log(alphabeticShift("crazy"));
console.log(alphabeticShift("AbCzYx"));
