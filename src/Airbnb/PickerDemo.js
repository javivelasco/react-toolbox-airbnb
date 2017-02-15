import React, { Component } from 'react';
import DatePicker from './DatePicker';

class PickerDemo extends Component {
  state = {
    value: null,
  };

  componentWillMount() {
    this.today = new Date();
  }

  handleChange = (value) => {
    this.setState({ value });
  };

  isDisabled = date => {
    const today = new Date();
    today.setHours(0,0,0,0);
    date.setHours(0,0,0,0);
    return date.getTime() < today.getTime()
  };

  render() {
    return (
      <DatePicker
        numberOfMonths={2}
        isDayDisabled={this.isDisabled}
        onChange={this.handleChange}
        selected={this.state.value}
        viewDate={new Date()}
      />
    );
  }
}

export default PickerDemo;
