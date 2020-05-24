function sortByHeight(a) {
	if (a.length === 1) return a;

	let sorted_filtered_arr = a.filter((el) => el !== -1).sort((a, b) => a - b);

	let indexVal = 0;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== -1) {
			a[i] = sorted_filtered_arr[indexVal];
			indexVal++;
		}
	}

	return a;
}

// Input :
// a: [-1, 150, 190, 170, -1, -1, 160, 180]
// a: [4, 2, 9, 11, 2, 16]
// a: [-1, -1, -1, -1, -1]
