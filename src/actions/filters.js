//SET_FILTER

export const setTextFilter = (text = '')  => ({

    type: `TEXT_FILTER`,
    text
})

//sortByAmount

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'


});

//sortByDAte

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'

});

//setstartDAte

export const setStartDate = (update) => ({
    type:'START_DATE',
    update
});

//setendDAte
export const setEndDate = (update) => ({
    type:'END_DATE',
    update
});