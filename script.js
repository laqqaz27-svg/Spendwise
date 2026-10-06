// ==========================================
// SpendWise - Interactive Budget Dashboard
// ==========================================


// 1. APPLICATION DATA
// ==========================================

let budget = 50000;

let expenses = [];


// 2. SELECT HTML ELEMENTS
// ==========================================

const expenseForm = document.getElementById("expenseForm");

const expenseNameInput = document.getElementById("expenseName");

const expenseAmountInput = document.getElementById("expenseAmount");

const budgetDisplay = document.getElementById("budgetDisplay");

const expensesDisplay = document.getElementById("expensesDisplay");

const balanceDisplay = document.getElementById("balanceDisplay");

const budgetMessage = document.getElementById("budgetMessage");

const expenseList = document.getElementById("expenseList");

const emptyMessage = document.getElementById("emptyMessage");


// 3. CALCULATE TOTAL EXPENSES
// ==========================================

function calculateTotalExpenses() {

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {

        total = total + expenses[i].amount;

    }

    return total;
}


// 4. CALCULATE REMAINING BALANCE
// ==========================================

function calculateBalance() {

    const totalExpenses = calculateTotalExpenses();

    return budget - totalExpenses;
}


// 5. UPDATE THE DASHBOARD
// ==========================================

function updateDashboard() {

    const totalExpenses = calculateTotalExpenses();

    const remainingBalance = calculateBalance();


    // Update summary cards
    budgetDisplay.textContent = "$" + budget;

    expensesDisplay.textContent = "$" + totalExpenses;

    balanceDisplay.textContent = "$" + remainingBalance;


    // Decision making
    if (remainingBalance < 0) {

        budgetMessage.textContent =
            "⚠️ You have exceeded your budget!";

    }
    else if (remainingBalance === 0) {

        budgetMessage.textContent =
            "Your budget has been fully used.";

    }
    else {

        budgetMessage.textContent =
            "✅ You are within your budget.";

    }


    // Display expenses
    displayExpenses();

}


// 6. DISPLAY EXPENSES
// ==========================================

function displayExpenses() {

    expenseList.innerHTML = "";


    // Check whether there are expenses
    if (expenses.length === 0) {

        expenseList.innerHTML =
            "<p>No expenses added yet.</p>";

        return;

    }


    // Loop through the expense array
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];


        const expenseItem = document.createElement("div");

        expenseItem.className = "expense-item";


        expenseItem.innerHTML = `
            <span>${expense.name}</span>
            <strong>$${expense.amount}</strong>
        `;


        expenseList.appendChild(expenseItem);

    }

}


// 7. HANDLE FORM SUBMISSION
// ==========================================

expenseForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();


    // Get values from the form
    const expenseName = expenseNameInput.value;

    const expenseAmount = Number(expenseAmountInput.value);


    // Check that the amount is valid
    if (expenseAmount <= 0) {

        budgetMessage.textContent =
            "Please enter an amount greater than 0.";

        return;

    }


    // Add the new expense to the array
    expenses.push({

        name: expenseName,

        amount: expenseAmount

    });


    // Update the dashboard
    updateDashboard();


    // Clear the form
    expenseForm.reset();

});


// 8. INITIAL DASHBOARD
// ==========================================

updateDashboard();