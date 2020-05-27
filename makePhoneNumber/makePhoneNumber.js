function createPhoneNumber(numbers) {
	let phoneNum = "";

	numbers.forEach((el, i) => {
		if (i === 0) {
			phoneNum += "(" + el;
		} else if (i === 2) {
			phoneNum += el + ")" + " ";
		} else if (i === 5) {
			phoneNum += el + "-";
		} else {
			phoneNum += el;
		}
	});

	return phoneNum;
}

// input = 10 digits array from 0 to 9
