import singlePickerFactory from 'react-toolbox-core/lib/components/DatePicker/SinglePicker';
import MonthsWrapper from './MonthsWrapper';
import Month from '../Month';

const SinglePicker = singlePickerFactory({
  passthrough,
  MonthsWrapper,
  Month,
});

function passthrough(props, name) {
  if (name === 'MonthsWrapper') {
    return {
      numberOfMonths: props.numberOfMonths, 
      viewDate: props.viewDate,
    }
  }

  return {};
}

export default SinglePicker;
