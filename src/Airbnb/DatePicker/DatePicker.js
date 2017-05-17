import styled from 'styled-components';
import datePickerFactory from 'react-toolbox-core/lib/components/DatePicker/DatePicker';
import { NextNode, PrevNode } from './Navigation';
import { RangePicker, SinglePicker } from './Pickers';
import Month from './Month';

const PickerWrapper = styled.div`
  --webkit-touch-callout: none;
  border: 1px solid #ddd;
  overflow: hidden;
  padding: 8px 5px;
  position: relative;
  user-select: none;
`;

const DatePicker = datePickerFactory({
  passthrough,
  Month,
  NextNode,
  PickerWrapper,
  PrevNode,
  RangePicker,
  SinglePicker,
});

function passthrough(props, name, instance) {
  switch (name) {
    case 'Month':
    case 'RangePicker':
    case 'SinglePicker':
      return { 
        numberOfMonths: props.numberOfMonths, 
        viewDate: instance.state.viewDate,
      };
    default:
      return {};
  }
}

export default DatePicker;
