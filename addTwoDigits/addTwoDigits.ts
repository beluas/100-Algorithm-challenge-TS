function addDigits(n: any): any {
	let digitsArr: number[] = n.toString().split("");

	let sum: number = 0;

	for (let el of digitsArr) {
		sum += parseInt(el);
	}

	return sum ? sum : "Don't cheat. Numbers please.";
}

console.log(addDigits(12355));
