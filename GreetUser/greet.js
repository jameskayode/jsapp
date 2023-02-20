
function greetUser() {
	let name = document.getElementById("name").value;
	let greeting = document.getElementById("greeting");

	let today = new Date();
	let hour = today.getHours();
	let timeOfDay;

	if (hour < 12) {
		timeOfDay = "Good morning";
	} else if (hour < 18) {
		timeOfDay = "Good afternoon";
	} else {
		timeOfDay = "Good evening";
	}

	greeting.innerHTML = `Welcome ${timeOfDay}, ${name}!`;
}
