import dayFactory from 'react-toolbox-core/lib/components/DatePicker/Day';
import styled, { css } from 'styled-components';

const Day = dayFactory({
  DayNode: styled.span`
    border: 1px solid #e4e7e7;
    color: #565a5c;
    cursor: pointer;
    height: 39px;
    padding: 0;
    ${highlightedDay}
    ${selectedDay}
    ${disabledDay}
    ${hoveredDay}
    ${outOfMonth}
  `,
});

function selectedDay(props) {
  if (props.selected) {
    return css`
      background: #00a699;
      border: 1px double #00a699;
      color: #fff;
    `;
  }
}

function highlightedDay(props) {
  if (props.highlighted || props.inRange) {
    return css`
      background: #66e2da;
      border: 1px double #33dacd;
      color: #fff;
    `;
  }
}

function disabledDay(props) {
  if (props.disabled) {
    return css`
      background: #fff;
      border: 1px solid #e4e7e7;
      color: #cacccd;
      cursor: normal;
      pointer-events: none;
    `;
  }
}

function hoveredDay(props) {
  if (!props.selected && !props.highlighted && !props.inRange) {
    return css`
      &:hover {
        background: #e4e7e7;
        border: 1px double #d4d9d9;
        color: inherit;
      }
    `;
  }
}

function outOfMonth(props) {
  if (props.outOfMonth) {
    return css`
      border: 0;
      visibility: hidden;
    `;
  }
}

export default Day;
