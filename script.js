// Format currency to USD format
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

// Format percentage
function formatPercentage(rate) {
    return parseFloat(rate).toFixed(2);
}

// Validate inputs
function validateInputs(finalPrice, taxRate) {
    let isValid = true;
    const finalPriceInput = document.getElementById('finalPrice');
    const taxRateInput = document.getElementById('taxRate');

    // Remove previous error states
    finalPriceInput.classList.remove('error');
    taxRateInput.classList.remove('error');

    if (!finalPrice || finalPrice <= 0) {
        finalPriceInput.classList.add('error');
        isValid = false;
    }

    if (taxRate === '' || taxRate === null || taxRate < 0 || taxRate > 100) {
        taxRateInput.classList.add('error');
        isValid = false;
    }

    return isValid;
}

// Main calculation function
function calculateReverseTax() {
    // Get input values
    const finalPriceInput = document.getElementById('finalPrice').value;
    const taxRateInput = document.getElementById('taxRate').value;

    // Parse values
    const finalPrice = parseFloat(finalPriceInput);
    const taxRate = parseFloat(taxRateInput);

    // Validate inputs
    if (!validateInputs(finalPrice, taxRate)) {
        alert('Please enter valid values:\n- Final price must be greater than 0\n- Tax rate must be between 0 and 100');
        return;
    }

    // Calculate original price and tax amount
    // Formula: Original Price = Final Price / (1 + Tax Rate/100)
    const taxMultiplier = 1 + (taxRate / 100);
    const originalPrice = finalPrice / taxMultiplier;
    const taxAmount = finalPrice - originalPrice;

    // Display results
    displayResults(originalPrice, taxAmount, finalPrice, taxRate);

    // Show reset button
    document.getElementById('resetBtn').style.display = 'block';
}

// Display calculation results
function displayResults(originalPrice, taxAmount, finalPrice, taxRate) {
    // Show results section
    const resultsSection = document.getElementById('results');
    resultsSection.style.display = 'block';

    // Update main result cards
    document.getElementById('originalPrice').textContent = formatCurrency(originalPrice);
    document.getElementById('taxAmount').textContent = formatCurrency(taxAmount);
    document.getElementById('finalPriceDisplay').textContent = formatCurrency(finalPrice);

    // Update breakdown section
    document.getElementById('breakdownOriginal').textContent = formatCurrency(originalPrice);
    document.getElementById('breakdownTaxRate').textContent = formatPercentage(taxRate);
    document.getElementById('breakdownTax').textContent = formatCurrency(taxAmount);
    document.getElementById('breakdownTotal').textContent = formatCurrency(finalPrice);

    // Smooth scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Reset calculator
function resetCalculator() {
    // Clear input fields
    document.getElementById('finalPrice').value = '';
    document.getElementById('taxRate').value = '';

    // Hide results
    document.getElementById('results').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'none';

    // Remove error states
    document.getElementById('finalPrice').classList.remove('error');
    document.getElementById('taxRate').classList.remove('error');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add Enter key support
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                calculateReverseTax();
            }
        });

        // Remove error state on input
        input.addEventListener('input', function() {
            this.classList.remove('error');
        });
    });

    // Auto-focus on final price input
    document.getElementById('finalPrice').focus();
});

// Add common tax rate quick buttons functionality (optional enhancement)
function setTaxRate(rate) {
    document.getElementById('taxRate').value = rate;
    document.getElementById('taxRate').classList.remove('error');
}

// Prevent negative values
document.addEventListener('DOMContentLoaded', function() {
    const numberInputs = document.querySelectorAll('input[type="number"]');

    numberInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value < 0) {
                this.value = 0;
            }
        });
    });
});
