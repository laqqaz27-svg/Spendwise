// SpendWise application data

const appName = "SpendWise";

let budget = 0;
let expenseName = "";
let expenseAmount = 0;
let budgetExceeded = false;


// Calculate the remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}


// Calculate the weekly budget
function calculateWeeklyBudget(monthlyBudget) {
    return monthlyBudget / 4;
}


// Collect budget information from the user
budget = Number(prompt("Enter your monthly budget:"));

expenseName = prompt("Enter the name of your expense:");

expenseAmount = Number(prompt("Enter the expense amount:"));


// Calculate the remaining balance
let balance = calculateBalance(budget, expenseAmount);


// Check whether the budget has been exceeded
if (balance < 0) {
    budgetExceeded = true;
}


// Calculate the weekly budget
let weeklyBudget = calculateWeeklyBudget(budget);


// Display results in the console
console.log("===== SpendWise =====");
console.log("Application:", appName);
console.log("Budget:", budget);
console.log("Expense Name:", expenseName);
console.log("Expense Amount:", expenseAmount);
console.log("Remaining Balance:", balance);
console.log("Weekly Budget:", weeklyBudget);
console.log("Budget Exceeded:", budgetExceeded);