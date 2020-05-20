function alphabetSubsequence(arr: string): boolean {
	let subsequenceSet = new Set();
	for (let letter of arr) {
		subsequenceSet.add(letter);
	}

	return subsequenceSet.size === arr.length;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
