const date = document.querySelector('.container__input');
const datePicker = new SimplePicker('.body');
const currentDate = new Date();
const errorMessage = document.querySelector('.error');
renderScreen(date);
document.querySelector('.container__pencil').addEventListener('click', () => {
	const calendar = document.querySelectorAll('.simplepicker-calender')[0];

	datePicker.open();

	calendar.addEventListener('click', () => {
		document
			.querySelector('.simplepicker-ok-btn')
			.addEventListener('click', () => {
				let pikedDate = new Date(datePicker.readableDate);
				if (pikedDate - currentDate <= 0) {
					datePicker.open();
					// calendar.classList.add('calendar__error');
					renderScreen(errorMessage);
				}
				date.value = datePicker.readableDate;
			});
	});
});
function renderScreen(e) {
	errorMessage.style.display = 'none';
	date.style.display = 'none';
	document.querySelector(e).style.display = 'block';
}
