export default (expenses) => {
    if (!Array.isArray(expenses) || expenses.length === 0) {
        return 0; // Return 0 if expenses is not an array or is empty
    } else {
       return expenses.reduce((accumulator, expense) => accumulator + expense.amount, 0);      
    }
};