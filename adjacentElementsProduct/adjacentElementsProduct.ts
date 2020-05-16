function adjacentElementsProduct(arr: number[]): number {
	let sum = 0;
	let tempSum = 0;
	for (let i = 0; i < arr.length; i++) {
		tempSum = arr[i] * arr[i + 1];
		if (tempSum > sum) {
			sum = tempSum;
		}
	}

	return sum;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([50, -1000, 10, -50, 500, 3]));
