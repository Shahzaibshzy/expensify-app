import moment from "moment";
export default [{
    id: '1',
    description: 'gum',
    note: '',
    amount: 195,
    createdAt: 0
},
{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 600,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'credit',
    note: '',
    amount: 300,
    createdAt: moment(0).add(4, 'days').valueOf()
}];