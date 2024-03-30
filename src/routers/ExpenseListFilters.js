import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount , setStartDate , setEndDate} from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseListFilters extends  React.Component {
  state = {

    calendarFocused: null,

  }
 onDateChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(()=>({calendarFocused}))
  };
  render(){

    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            } // sort by date first if amount is
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
        startDate={this.props.filters.startDate}
        startDateId="MyDatePickerStart" // PropTypes.string.isRequired,
        endDate={this.props.filters.endDate}
        endDateId= "MyDatePickerEnd" // PropTypes.string.isRequired,
        onDatesChange={this.onDateChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={()=> false}

        
        />
      
      </div>
    );

  }


}

const mapStateToProp = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProp)(ExpenseListFilters);
