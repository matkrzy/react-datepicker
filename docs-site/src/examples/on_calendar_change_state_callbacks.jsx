import React from "react";
import DatePicker from "react-datepicker";

export default class OnCalendarChangeStateCallbacks extends React.Component {
  state = {
    date: null
  };

  handleChange = date => {
    this.setState({
      date: date
    });
  };

  render() {
    return (
      <div className="row">
        <pre className="column example__code">
          <br />
          <code className="jsx">
            {`
<DatePicker
  selected={this.state.startDate}
  onChange={this.handleChange}
  onCalendarOpen={() => console.log("Calendar is open")}
  onCalendarClose={() => console.log("Calendar is close")}
/>
`}
          </code>
        </pre>
        <div className="column">
          <DatePicker
            selected={this.state.date}
            onChange={this.handleChange}
            onCalendarOpen={() => console.log("Calendar is open")}
            onCalendarClose={() => console.log("Calendar is close")}
          />
        </div>
      </div>
    );
  }
}
