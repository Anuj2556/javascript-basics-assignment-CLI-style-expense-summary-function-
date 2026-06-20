//array for transactions
const transactions=[
    {name:"food",amount:450},
    {name:"transport",amount:120},
    {name:"clothes",amount:1500},
    {name:"transport",amount:100},
    {name:"food",amount:230}
];

function expenseCalc(transactions){
    let total_expense=0;
    const transaction_items={};

    for(const transaction of transactions){
        total_expense+=transaction.amount;
        if(transaction_items[transaction.name]){
            transaction_items[transaction.name]+=transaction.amount;
        }
        else{
            transaction_items[transaction.name]=transaction.amount;
        }
    }

    console.log("Total Expense:"+total_expense);
    console.log("\nCategorywise Expense:");

    for(const category in transaction_items){
        console.log(`${category}: ${transaction_items[category]}`);
    }
}
expenseCalc(transactions)




/*
Total Expense:2400

Categorywise Expense:
food: 680
transport: 220
clothes: 1500
*/


//Edge cases