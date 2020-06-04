function compareTriplets(a, b) {
	let pointsA = 0;
	let pointsB = 0;

	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			a[i] > b[i] ? pointsA++ : pointsB++;
		}
	}

	return [pointsA, pointsB];
}
