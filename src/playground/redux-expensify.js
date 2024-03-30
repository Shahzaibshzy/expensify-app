import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from 'uuid';

//ADD_EXPENSES
const addExpense = (
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
const remoeExpense = ({id} = {}) => ({
    type: `REMOVE_EXPENSE`,
    id

});

//EDIT EXPENSE

const editExpense = (id, update) => ({
    type: `EDIT_EXPENSE`,
    id,
    update
});

//SET_FILTER

const setTextFilter = (text = '')  => ({

    type: `TEXT_FILTER`,
    text
})

//sortByAmount

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'


});

//sortByDAte

const sortByDate = () => ({
    type: 'SORT_BY_DATE'

});

//setstartDAte

const setStartDate = (update) => ({
    type:'START_DATE',
    update
});

//setendDAte
const setEndDate = (update) => ({
    type:'END_DATE',
    update
});

//filter
const filterDefaultState = {

         text: ``,
        sortBy: `date`, 
        startDate: undefined,
        endDate: undefined

};

const filterReducer = (state=filterDefaultState, action) =>
{
    switch(action.type){
        case 'TEXT_FILTER': 
        return {
            ...state,
            text: action.text
        }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            }
         case `START_DATE`:
             return{
                 ...state,
                 startDate: action.update
                }
        case `END_DATE`:
                return{
                 ...state,
                endDate:action.update
                    }
        default:
            return state;
    }
};


//Expense Reducer
const expensesReducerDefaultState = [];

const expenceReducer = (state = expensesReducerDefaultState, action) =>
{
    switch (action.type)
    {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expenses
            ];
        case `REMOVE_EXPENSE`:
                return state.filter(({ id }) => id !== action.id);
        case `EDIT_EXPENSE`:
            return state.map((expense)=>{
                if(expense.id === action.id)
                {
                    return {...expense , ...action.update}
                }
                else{
                    return expense;
                }
            })

        default:
            return state
    }

};

//Get Visible  Expenses

const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate}) => {

    return expenses.filter((expense) =>
 { 
    const startDateMatch = typeof expense.startDate !== 'number' || expenses.createdAt >= startDate;
    const endDateMatch = typeof expense.endDate !== 'number' || expenses.createdAt <= endDate; ;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
   
    return startDateMatch && endDateMatch && textMatch; 
}

).sort((a , b)=> {
    // sort by date 
    if(sortBy==='date'){
        return a.createdAt < b.createdAt ? 1 : -1;
    }
    else if( sortBy === 'amount'){
        return a.amount > b.amount ? -1 : 1;
    }

})};

//Combine Reducer

const  store = createStore(combineReducers(
    {
            expenses: expenceReducer,
            filters: filterReducer
    }
));

store.subscribe(()=> {
    
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
    
    console.log(visibleExpense)});

const expenseOne = store.dispatch(addExpense({description: `rent`,
                         amount: 100,
                         createdAt: -1111}));

const expenseTwo = store.dispatch(addExpense({description: `Coffee`,
                         amount: 300,
                         createdAt: -22222}));

// store.dispatch(remoeExpense({id: expenseOne.expenses.id}));

// store.dispatch(editExpense(expenseTwo.expenses.id, {amount : 500 }));

// store.dispatch(setTextFilter("coffee"));

// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));

// store.dispatch(setStartDate());

// store.dispatch(setEndDate(225));



const demoState = 
{
   expenses: [{
        id: `sadasdasda`,
        description: 'January Rent',
        note: 'This is my last rent',
        amount: 54500,
        createdAt: 0
    
    }],
    filters: {
        text: `rent`,
        sortBy: `amount`, //amount or date
        startDate: undefined,
        endDate: undefined
    }
};
