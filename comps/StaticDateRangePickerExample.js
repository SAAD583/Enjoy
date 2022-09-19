import React, {Component} from "react"
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/lib/css/_datepicker.css'

import { myContext } from "../pages/_app";
import moment from "moment";

class Calendar extends Component {

  static contextType = myContext

  constructor(props) {
    super(props);
    
    this.state = {
      startDate : null,
      endDate : null,
    }
  }

  render() {
    return (
      <div >
    <DateRangePicker
    openDirection="up"
    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
    startDateId="idOne" // PropTypes.string.isRequired,
    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
    endDateId="idTwo" // PropTypes.string.isRequired,
    onDatesChange={({ startDate, endDate }) => {
      // this.context.setCheckOutDate(this.state.endDate)
      return this.setState({ startDate, endDate })
    }} // PropTypes.func.isRequired,
    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
    />
    {/* {moment(this.context.checkOutDate).format('L')} */}
    </div>
  )
}

componentDidUpdate(prevProps, prevState, snapshot) {
  this.context.setCheckOutDate(this.state.endDate)
  this.context.setCheckInDate(this.state.startDate)

  
  const diffTime = Math.abs(this.state.endDate - this.state.startDate)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (this.state.startDate !== null && this.state.endDate !== null) 
    this.context.setDaysNumber(diffDays)
}

}

export default Calendar