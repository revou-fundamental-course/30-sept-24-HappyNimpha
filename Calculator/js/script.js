// Convert
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

const celsiusInput = document.getElementById('celsius');
const fahrenheitOutput = document.getElementById('fahrenheit');
const explanationDiv = document.getElementById('explanation');
const calculationText = document.getElementById('calculation');

// Convert Button
document.getElementById('convertBtn').addEventListener('click', () => {
    const celsiusValue = parseFloat(celsiusInput.value);

    if (isNaN(celsiusValue)) {
        alert("Suhu tidak valid!");
        return;
    }

    const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
    fahrenheitOutput.textContent = `${fahrenheitValue.toFixed(2)} °F`;

    calculationText.textContent = `${celsiusValue} °C × (9/5) + 32 = ${fahrenheitValue.toFixed(2)} °F`;
    explanationDiv.style.display = 'block';
});

// Reset Button
document.getElementById('resetBtn').addEventListener('click', () => {
    celsiusInput.value = '';
    fahrenheitOutput.textContent = 'You have not yet converted anything';
    explanationDiv.style.display = 'none';
});

// Reverse Button 
document.getElementById('reverseBtn').addEventListener('click', () => {
    const fahrenheitValue = parseFloat(prompt("Suhu dalam Fahrenheit (°F):"));

    if (isNaN(fahrenheitValue)) {
        alert("Suhu tidak valid!");
        return;
    }

    const celsiusValue = fahrenheitToCelsius(fahrenheitValue);
    fahrenheitOutput.textContent = `${fahrenheitValue.toFixed(2)} °F`;
    celsiusInput.value = celsiusValue.toFixed(2);

    calculationText.textContent = `(${fahrenheitValue} °F - 32) × (5/9) = ${celsiusValue.toFixed(2)} °C`;
    explanationDiv.style.display = 'block';
});