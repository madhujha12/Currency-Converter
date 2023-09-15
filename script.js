// JavaScript for currency conversion
document.getElementById("convert").addEventListener("click", function () {
    // Get input values
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Conversion rates (simplified for demonstration)
    const conversionRates = {
        USD: 1,
        EUR: 0.85, // 1 USD to EUR (simplified)
        // Add more rates here
    };

    // Check if the input amount is a valid number
    if (isNaN(amount)) {
        alert("Please enter a valid number in the 'Enter amount' field.");
        return;
    }

    // Check if the selected currencies are the same
    if (fromCurrency === toCurrency) {
        alert("Please select different currencies for conversion.");
        return;
    }

    // Check if the source currency is in the conversion rates
    if (!conversionRates.hasOwnProperty(fromCurrency)) {
        alert("Invalid source currency.");
        return;
    }

    // Check if the target currency is in the conversion rates
    if (!conversionRates.hasOwnProperty(toCurrency)) {
        alert("Invalid target currency.");
        return;
    }

    // Perform the conversion
    const convertedAmount = (amount / conversionRates[fromCurrency]) * conversionRates[toCurrency];

    // Display the result
    document.getElementById("result").value = convertedAmount.toFixed(2);
});
