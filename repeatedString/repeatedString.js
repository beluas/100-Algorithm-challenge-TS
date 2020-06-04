function repeatedString(s, n) {
	if (s === "a") return n;

	let strOccurencies = Math.floor(n / s.length);

	let substring = n % s.length;

	return (
		s.split("").filter((el) => el === "a").length * strOccurencies +
		s
			.substring(0, substring)
			.split("")
			.filter((el) => el === "a").length
	);
}

// input
// aba 10
// a 1000000
