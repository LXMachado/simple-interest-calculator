/**
 * Updates the rate display value when the slider is moved
 * @param {string|number} value - The current rate value
 */
function updateRateDisplay(value) {
    const rateDisplay = document.getElementById('rate_val');
    if (rateDisplay) {
        // Format to 2 decimal places for consistency
        rateDisplay.textContent = parseFloat(value).toFixed(2);
    }
}

/**
 * Validates input values and calculates simple interest
 * @returns {boolean} - True if calculation successful, false if validation fails
 */
function compute() {
    try {
        // Get input elements
        const principalInput = document.getElementById('principal');
        const rateInput = document.getElementById('rate');
        const yearsInput = document.getElementById('years');
        const resultElement = document.getElementById('result');

        // Validate inputs exist
        if (!principalInput || !rateInput || !yearsInput || !resultElement) {
            console.error('Required elements not found');
            return false;
        }

        // Parse and validate values
        const principal = parseFloat(principalInput.value);
        const rate = parseFloat(rateInput.value);
        const years = parseFloat(yearsInput.value);

        // Validate numeric values
        if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
            resultElement.textContent = 'Please enter valid numbers';
            resultElement.style.color = 'red';
            return false;
        }

        // Validate business logic
        if (principal <= 0) {
            resultElement.textContent = 'Amount must be greater than 0';
            resultElement.style.color = 'red';
            return false;
        }

        if (years <= 0) {
            resultElement.textContent = 'Years must be greater than 0';
            resultElement.style.color = 'red';
            return false;
        }

        // Calculate simple interest
        const interest = (principal * rate * years) / 100;
        
        // Display result with proper formatting
        resultElement.textContent = `$${interest.toFixed(2)}`;
        resultElement.style.color = 'inherit';
        
        return true;
        
    } catch (error) {
        console.error('Error calculating interest:', error);
        const resultElement = document.getElementById('result');
        if (resultElement) {
            resultElement.textContent = 'Error calculating interest';
            resultElement.style.color = 'red';
        }
        return false;
    }
}

// Initialize rate display on page load
document.addEventListener('DOMContentLoaded', function() {
    const rateSlider = document.getElementById('rate');
    if (rateSlider) {
        updateRateDisplay(rateSlider.value);
    }
});
        