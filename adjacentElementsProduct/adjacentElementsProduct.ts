function adjacentElementsProduct(inputArray: number[]): number {
	let maxProd = -100000;

	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i + 1]) {
			if (inputArray[i] * inputArray[i + 1] > maxProd) {
				maxProd = inputArray[i] * inputArray[i + 1];
			}
		}
	}

	return maxProd;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([50, -1000, 10, -50, 500, 3]));
