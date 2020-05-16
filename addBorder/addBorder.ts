function addBorder(arr: string[]): string[] {
	let borders: string[] = [];

	if (Array.isArray(arr)) {
		for (let el of arr) {
			if (typeof el === "string") {
				let strArr = el.split("");
				strArr.push("*");
				strArr.unshift("*");
				borders.push(strArr.join(""));
			}
		}
	}
	if (borders.length > 0) {
		return ["*****", ...borders, "*****"];
	} else {
		let err = ["Try to use a string as input"];
		return err;
	}
}

function printPicture(arr) {
	if (Array.isArray(arr)) {
		for (let el of arr) {
			console.log(el);
		}
	}
}

console.log(addBorder(["xyz", "hgj"]));
printPicture(addBorder(["xyz", "hgj"]));
/*
Console.log()

*****
*xyz*
*hgj*
*****

*/
