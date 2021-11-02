document.querySelector('.button').addEventListener('click', (e) => {
	const catAgeText = document.querySelector('.age_cat__text');
	while (catAgeText.firstChild) {
		catAgeText.removeChild(catAgeText.firstChild);
	}

	let yourAge = document.querySelector('.input').value;
	let ageCat = document.createElement('span');
	ageCat.className = 'age_of_cat';

	if (
		catCalculator.getCatAgeObject(Number(yourAge)).years > 1 &&
		catCalculator.getCatAgeObject(Number(yourAge)).months > 1
	) {
		ageCat.textContent = `The cat age: ${
			catCalculator.getCatAgeObject(Number(yourAge)).years
		} years and ${
			catCalculator.getCatAgeObject(Number(yourAge)).months
		} months`;
		catAgeText.appendChild(ageCat);
	}

	if (
		catCalculator.getCatAgeObject(Number(yourAge)).years > 1 &&
		catCalculator.getCatAgeObject(Number(yourAge)).months <= 1
	) {
		ageCat.textContent = `The cat age: ${
			catCalculator.getCatAgeObject(Number(yourAge)).years
		} years and ${catCalculator.getCatAgeObject(Number(yourAge)).months} month`;
		catAgeText.appendChild(ageCat);
	}

	if (
		catCalculator.getCatAgeObject(Number(yourAge)).years <= 1 &&
		catCalculator.getCatAgeObject(Number(yourAge)).months > 1
	) {
		ageCat.textContent = `The cat age: ${
			catCalculator.getCatAgeObject(Number(yourAge)).years
		} year and ${catCalculator.getCatAgeObject(Number(yourAge)).months} months`;
		catAgeText.appendChild(ageCat);
	}

	if (
		catCalculator.getCatAgeObject(Number(yourAge)).years <= 1 &&
		catCalculator.getCatAgeObject(Number(yourAge)).months <= 1
	) {
		ageCat.textContent = `The cat age: ${
			catCalculator.getCatAgeObject(Number(yourAge)).years
		} year and ${catCalculator.getCatAgeObject(Number(yourAge)).months} month`;
		catAgeText.appendChild(ageCat);
	}
});
