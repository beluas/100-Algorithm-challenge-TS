function fancyRide(l: number, fares: number[], moneyInPocket: number): string {
	let fareCar = 0;

	if (fares.length > 5 || fares.length < 5 || !l || !moneyInPocket) {
		return "please correctly update your inputs";
	}

	for (let fare of fares) {
		if (fare * l < moneyInPocket) {
			fareCar = fare;
		}
	}

	switch (fareCar) {
		case fares[0]:
			return "UberX";
		case fares[1]:
			return "UberXL";
		case fares[2]:
			return "UberPlus";
		case fares[3]:
			return "UberBlack";
		case fares[4]:
			return "UberSUV";
		default:
			return "Wait for your salary";
	}
}

//"UberX", "UberXL", "UberPlus", "UberBlack" and "UberSUV".
console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3], 40));
