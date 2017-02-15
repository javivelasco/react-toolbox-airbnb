import rangePickerFactory from 'react-toolbox-core/lib/components/DatePicker/RangePicker';
import MonthsWrapper from './MonthsWrapper';
import Month from '../Month';

const RangePicker = rangePickerFactory({
  passthrough,
  MonthsWrapper,
  Month,
});

function passthrough(props, name) {
  return name === 'MonthsWrapper'
    ? { numberOfMonths: props.numberOfMonths }
    : {};
}

export default RangePicker;
