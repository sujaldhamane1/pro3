// Selecting input fields for Celsius, Fahrenheit, and Kelvin
let celsiusInput = document.querySelector('input:nth-of-type(1)');
let fahrenheitInput = document.querySelector('input:nth-of-type(2)');
let kelvinInput = document.querySelector('input:nth-of-type(3)');

// Selecting the reset button
let resetButton = document.querySelector('#reset-button');

// Function to round a number to two decimal places
function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

/* Event listener for Celsius input */
celsiusInput.addEventListener('input', function () {
    let cTemp = parseFloat(celsiusInput.value);
    let fTemp = (cTemp * (9 / 5)) + 32;
    let kTemp = cTemp + 273.15;

    // Updating Fahrenheit and Kelvin inputs
    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
});

/* Event listener for Fahrenheit input */
fahrenheitInput.addEventListener('input', function () {
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp - 32) * (5 / 9);
    let kTemp = (fTemp - 32) * (5 / 9) + 273.15;

    // Updating Celsius and Kelvin inputs
    celsiusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
});

/* Event listener for Kelvin input */
kelvinInput.addEventListener('input', function () {
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * (9 / 5) + 32;

    // Updating Celsius and Fahrenheit inputs
    celsiusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
});

/* Event listener for the reset button */
resetButton.addEventListener('click', () => {
    // Clearing all input fields
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
});
