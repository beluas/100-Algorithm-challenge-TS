function cakes(recipe, available) {
	let sweets = [];
	for (let [key, value] of Object.entries(recipe)) {
		if (available[key]) {
			sweets.push(Math.floor(available[key] / value));
		} else {
			return 0;
		}
	}
	console.log(sweets);

	return Math.min(...sweets);
}

/*
INPUTS

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});


*/
