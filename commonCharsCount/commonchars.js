function commonCharacterCount(s1, s2) {
	const map = {};
	const map2 = {};
	let commonchars = 0;

	for (let i = 0; i < s1.length; i++) {
		map[s1[i]] ? map[s1[i]]++ : (map[s1[i]] = 1);
	}

	for (let i = 0; i < s2.length; i++) {
		map2[s2[i]] ? map2[s2[i]]++ : (map2[s2[i]] = 1);
	}

	for (let key of Object.keys(map)) {
		console.log(map2[key], map[key]);
		if (map2[key]) {
			commonchars += Math.min(map2[key], map[key]);
		}
	}

	return commonchars;
}

// Input:
// s1: "aabcc"
// s2: "adcaa"

// s1: "zzzz"
// s2: "zzzzzzz"
