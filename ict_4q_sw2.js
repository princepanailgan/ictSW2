function convert() {
	const inputValue = document.getElementById("inputValue").value;
	const inputUnit = document.getElementById("inputUnit").value;
	const outputUnit = document.getElementById("outputUnit").value;
	let outputValue;

	if (inputUnit === "minutes") {
		if (outputUnit === "seconds") {
			outputValue = inputValue * 60;
		} else if (outputUnit === "hours") {
			outputValue = inputValue / 60;
		} else if (outputUnit === "days") {
			outputValue = inputValue / 1440;
		} else {
			outputValue = inputValue;
		}
	} else if (inputUnit === "seconds") {
		if (outputUnit === "minutes") {
			outputValue = inputValue / 60;
		} else if (outputUnit === "hours") {
			outputValue = inputValue / 3600;
		} else if (outputUnit === "days") {
			outputValue = inputValue / 86400;
		} else {
			outputValue = inputValue;
		}
	} else if (inputUnit === "hours") {
		if (outputUnit === "seconds") {
			outputValue = inputValue * 3600;
		} else if (outputUnit === "minutes") {
			outputValue = inputValue * 60;
		} else if (outputUnit === "days") {
			outputValue = inputValue / 24;
		
