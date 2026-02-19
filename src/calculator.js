// src/calculator.js

function calculateTotal(subtotal, taxRate) {
    // LOGIC ERROR: It is dividing the subtotal by the tax rate instead of multiplying
    const tax = subtotal / taxRate; 
    return subtotal + tax;
}

module.exports = { calculateTotal };
