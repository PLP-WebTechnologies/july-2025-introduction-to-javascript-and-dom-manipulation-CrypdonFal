// ===============================
// Part 1: JavaScript Basics
// ===============================

// Variable declarations
let userName = "Daniel";
let userAge = 25;

// Conditional logic
if (userAge >= 18) {
    document.getElementById("greeting").textContent = `Hello ${userName}, you are an adult.`;
} else {
    document.getElementById("greeting").textContent = `Hello ${userName}, you are under 18.`;
}

// ===============================
// Part 2: Functions
// ===============================

// Function to calculate total price
function calculateTotal(price, quantity) {
    return price * quantity;
}

// Function to format a string
function formatName(name) {
    return name.trim().toUpperCase();
}

// Event listener for calculation
document.getElementById("calc-btn").addEventListener("click", function() {
    let total = calculateTotal(15, 3); // Example: price = 15, quantity = 3
    document.getElementById("calc-result").textContent = `Total: $${total}`;
});

// ===============================
// Part 3: Loops
// ===============================

// Example array
let fruits = ["Apple", "Banana", "Cherry", "Mango"];

// For loop to display fruits
for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    document.getElementById("fruit-list").appendChild(li);
}

// While loop example: countdown
let countdown = 3;
while (countdown > 0) {
    console.log(`Countdown: ${countdown}`);
    countdown--;
}

// ===============================
// Part 4: DOM Manipulation
// ===============================

// Toggle highlight class
document.getElementById("toggle-btn").addEventListener("click", function() {
    document.getElementById("toggle-text").classList.toggle("highlight");
});

// Add new list item dynamically
document.getElementById("add-item-btn").addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = `New Item ${document.querySelectorAll("#dynamic-list li").length + 1}`;
    document.getElementById("dynamic-list").appendChild(newItem);
});

// Change main title text on page load
document.getElementById("main-title").textContent += " ✅";
