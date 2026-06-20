# Expense Summary CLI

## Overview

Expense Summary CLI is a simple JavaScript console application that analyzes a list of transactions and generates a summary report. The program calculates the total expense and displays category-wise spending, helping users understand where their money is being spent.

## Objective

The objective of this project is to practice JavaScript fundamentals such as:

* Arrays
* Objects
* Functions
* Loops
* Conditional Statements
* Console Output

## Features

* Calculates total expenses
* Groups expenses by category
* Displays category-wise totals
* Works directly in the terminal/console
* Easy to modify and extend

## Project Structure

```text
expenseSummary.js
README.md
```

## Sample Input

```javascript
const transactions = [
    {name:"food", amount:450},
    {name:"transport", amount:120},
    {name:"clothes", amount:1500},
    {name:"transport", amount:100},
    {name:"food", amount:230}
];
```

## Sample Output

```text
Total Expense: 2400

Categorywise Expense:
name: food ---> amount: 680
name: transport ---> amount: 220
name: clothes ---> amount: 1500
```

## How the Program Works

1. Reads all transactions from an array.
2. Calculates the total expense by adding all amounts.
3. Groups transactions based on category name.
4. Calculates the total amount spent in each category.
5. Displays the final summary in the console.

## Approach Used

An object is used as a category tracker. While iterating through the transaction array, the program checks whether a category already exists in the object:

* If it exists, the amount is added to the existing value.
* Otherwise, a new category entry is created.

This approach provides efficient category-wise aggregation with a single traversal of the array.

## Test Cases

### Normal Test Case

Input:

```javascript
[
    {name:"food", amount:450},
    {name:"transport", amount:120},
    {name:"clothes", amount:1500},
    {name:"transport", amount:100},
    {name:"food", amount:230}
]
```

Expected Result:

```text
Total Expense: 2400

Food: 680
Transport: 220
Clothes: 1500
```

### Edge Case

Input:

```javascript
[]
```

Expected Result:

```text
Total Expense: 0

Categorywise Expense:
```

The program should execute successfully even when no transactions are available.

### Error Case

Input:

```javascript
[
    {name:"food"},
    {name:"transport", amount:100}
]
```

Result:

```text
Total Expense: NaN
```

This occurs because the first transaction does not contain a valid amount value. Input validation can be added to handle such cases.

## Future Improvements

* Input validation
* User input through terminal
* Monthly expense reports
* Expense category sorting
* Data storage using JSON files or a database


## Author

Anuj Prajapati
