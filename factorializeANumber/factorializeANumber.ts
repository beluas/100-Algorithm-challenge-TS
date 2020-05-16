const factorializeRecursion = (num: number): number => {
	if (num < 0) {
		return -1;
	} else if (num == 0) {
		return 1;
	} else {
		return num * factorializeRecursion(num - 1);
	}
};

const factorializeIterative = (num: number): number => {
	let tot: number = 1;
	for (let i = 1; i <= num; i++) {
		tot *= i;
	}
	return tot;
};

console.log(factorializeRecursion(5));
console.log(factorializeRecursion(10));
