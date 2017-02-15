import styled from 'styled-components';
import monthFactory from 'react-toolbox-core/lib/components/DatePicker/Month';
import Weekday from './Weekday';
import Day from './Day';

const Month = monthFactory({
  Day: styled(Day)`
    display: table-cell;
    vertical-align: middle;    
  `,
  DaysWeek: styled.div`
    display: table-row;
    flex-wrap: wrap;
    width: 100%;
  `,
  DaysWrapper: styled.div`
    border-collapse: collapse;
    display: table;
    text-align: center;
    width: 100%;
  `,
  MonthTitle: styled.strong`
    color: #3c3f40;
    display: block;
    font-size: 18px;
    line-height: 33px;
    margin-top: 8px;
    margin-bottom: 13px;
    text-align: center;
    text-transform: lowercase;
  `,
  MonthWrapper: styled.div`
    padding: 10px 15px;
    width: calc(100% / ${props => props.numberOfMonths});
    position: absolute;
    left: 0;
    top: 0;
  `,
  Weekday: styled(Weekday)`
    display: inline-block;
    font-size: 0.85em;
    text-align: center;
    width: calc(100% / 7);
  `,
  WeekdaysWrapper: styled.div`
    color: #757575;
    font-size: 14px;
    line-height: 1.43;
    width: 100%;
  `,
});

export default Month;
