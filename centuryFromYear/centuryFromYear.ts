function centuryFromYear(year: number): number {
	if (year % 100 === 0) {
		return year / 100;
	} else {
		return Math.floor(year / 100 + 1);
	}
}

// const centuryFromYear = (year) => year % 100 === 0 ? year/100 :  Math.floor((year/100) +1)

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
