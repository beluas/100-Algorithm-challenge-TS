function alternatingSums(arr: number[]): number[] {
	let oddSum: number = 0;
	let evenSum: number = 0;

	arr.forEach((el, index) => {
		index % 2 === 0 ? (evenSum += el) : (oddSum += el);
	});

	return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
