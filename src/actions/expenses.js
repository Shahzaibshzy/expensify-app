import { v4 as uuidv4 } from 'uuid';

//ADD_EXPENSES
export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => 
({
type: `ADD_EXPENSE`,
expenses: 
{
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt

}
});

//REMOVE_EXPENSE
export const remoeExpense = ({id} = {}) => ({
    type: `REMOVE_EXPENSE`,
    id

});

//EDIT EXPENSE

export const editExpense = (id, update) => ({
    type: `EDIT_EXPENSE`,
    id,
    update
});

