function arrayMaxConsecutiveSum(arr: number[], k: number): number {
	let highest = 0;

	for (let i = 0; i < arr.length; i++) {
		let newArr = [].concat(arr);
		let sum = newArr.splice(i, k).reduce((tot, el) => tot + el);
		if (i + 1 < arr.length) {
			if (sum > highest) {
				highest = sum;
			}
		}
	}

	return highest;
}

console.log(arrayMaxConsecutiveSum([2, 3, 4, 5, 2, 2], 2));
