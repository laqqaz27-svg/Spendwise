# SpendWise - Interactive Budget Dashboard

SpendWise is a personal finance dashboard that helps users track their budget and expenses. This project was originally created as a static dashboard and was improved this week by adding JavaScript functionality and user interaction.

## Improvements Made This Week

This week, I made SpendWise interactive by adding:

* A budget amount of $50,000
* An expense input form
* Dynamic expense records
* Automatic calculation of total expenses
* Automatic calculation of remaining balance
* Budget feedback using conditionals
* An expense list that updates without refreshing the page
* Event handling for form submission
* Responsive styling for the new sections

## JavaScript Concepts Used

### 1. Conditionals

I used `if`, `else if`, and `else` statements to check the remaining budget.

For example:

* If the remaining balance is below zero, the user is told that the budget has been exceeded.
* If the balance is zero, the user is told that the budget has been fully used.
* Otherwise, the user is told that they are within their budget.

### 2. Arrays

An array is used to store multiple expense records.

```javascript
let expenses = [];
```

When a user adds an expense, the expense is added to the array.

```javascript
expenses.push({
    name: expenseName,
    amount: expenseAmount
});
```

This allows SpendWise to keep multiple expense records.

### 3. Loops

A `for` loop is used to go through all the expenses stored in the array and calculate the total amount.

The loop is also used to display each expense on the webpage.

### 4. DOM Manipulation

JavaScript updates the webpage dynamically using the DOM.

For example, the budget, total expenses, remaining balance, and expense list are updated when a new expense is added.

```javascript
budgetDisplay.textContent = "$" + budget;
expensesDisplay.textContent = "$" + totalExpenses;
balanceDisplay.textContent = "$" + remainingBalance;
```

### 5. Events

An event listener is used to detect when the user submits the expense form.

```javascript
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();
});
```

This allows the application to respond to the user's action without refreshing the page.

## How the Application Works

The main flow of the application is:

```text
User enters an expense
        ↓
Form submission event
        ↓
Expense is added to the array
        ↓
Loop calculates total expenses
        ↓
Conditional checks the budget
        ↓
DOM updates the dashboard
        ↓
User sees the updated information
```

## Challenges and Solutions

One challenge was connecting the JavaScript logic to the existing HTML dashboard.

I solved this by selecting HTML elements using their IDs and updating their content through JavaScript.

Another challenge was displaying multiple expenses. I solved this by storing expenses in an array and using a loop to display each expense dynamically.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Google Fonts
* GitHub

## Project Structure

```text
SPENDWISE/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Conclusion

SpendWise has been improved from a static dashboard into an interactive budget tracking application. Users can add expenses, view their expenses, see updated totals, and receive feedback about their budget.

This project helped me understand how JavaScript connects user actions, data, application logic, and the webpage.
