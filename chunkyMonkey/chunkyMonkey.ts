function chunkyMonkey(arr: any[], size: number): any {
	let multiArr = [];
	let arrToModify = [].concat(arr);

	while (arrToModify.length > 0) {
		multiArr.push(arrToModify.splice(0, size));
	}

	return multiArr;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
