import React, { Component } from 'react';
import DatePicker from './DatePicker';
import Input from './Input';

class PickerDemo extends Component {
  state = {
    focusedInput: null,
    highlighted: { from: null, to: null },
    value: { from: null, to: null },
  };

  componentWillMount() {
    this.today = new Date();
  }

  handleChange = (value) => {
    this.setState({ value });
  };

  handleHighlightedChange = (highlighted) => {
    this.setState({ highlighted });
  };
  
  handleFocusedInputChange = (focusedInput) => {
    this.setState({ focusedInput });
  };

  isDisabled = date => {
    const today = new Date();
    today.setHours(0,0,0,0);
    date.setHours(0,0,0,0);
    return date.getTime() < today.getTime()
  };

  handleStartInputFocus = () => {
    this.setState({ focusedInput: 'START_DATE' });
  };

  handleEndInputFocus = () => {
    this.setState({ focusedInput: 'END_DATE' });
  };

  format(date) {
    if (!date) return "";
    return date.toISOString();
  }

  render() {
    return (
      <div>
        <Input
          value={this.format(this.state.value.from)}
          onFocus={this.handleStartInputFocus}
          active={this.state.focusedInput === 'START_DATE'}
          readOnly
        />
        <Input
          value={this.format(this.state.value.to)}
          onFocus={this.handleEndInputFocus}
          active={this.state.focusedInput === 'END_DATE'}
          readOnly
        />
        <DatePicker
          focusedInput={this.state.focusedInput}
          highlighted={this.state.highlighted}
          onChange={this.handleChange}
          onFocusedInputChange={this.handleFocusedInputChange}
          onHighlightedChange={this.handleHighlightedChange}
          selected={this.state.value}
          sundayFirstDayOfWeek
          viewDate={new Date(2017, 11, 1)}
        />
      </div>
    );
  }
}

export default PickerDemo;
