import singlePickerFactory from 'react-toolbox-core/lib/components/DatePicker/SinglePicker';
import MonthsWrapper from './MonthsWrapper';
import Month from '../Month';

const SinglePicker = singlePickerFactory({
  passthrough,
  MonthsWrapper,
  Month,
});

function passthrough(props, name) {
  return name === 'MonthsWrapper'
    ? { numberOfMonths: props.numberOfMonths }
    : {};
}

export default SinglePicker;
