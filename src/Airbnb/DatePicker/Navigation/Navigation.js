import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import throttle from 'lodash.throttle';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

export const NextNode = throttleClick(
  styled(RightArrow)`
    right: 18px;
    ${navigation}
  `
);

export const PrevNode = throttleClick(
  styled(LeftArrow)`
    left: 18px;
    ${navigation}
  `
);

function throttleClick(DecoratedComponent) {
  return class Navigable extends Component {
    handleClick = throttle((...args) => {
      this.props.onClick(...args);
    }, 200);

    render() {
      return (
        <DecoratedComponent 
          {...this.props}
          onClick={this.handleClick}
        />
      )
    }
  }
}

function navigation(props) {
  return css`
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #dce0e0;
    color: #757575;
    cursor: pointer;
    line-height: 0.78;
    padding: 6px 9px;
    position: absolute;
    top: 18px;
    z-index: 2;

    &:hover {
      border: 1px solid #c4c4c4;
    }

    & > svg {
      fill: #82888a;
      height: 19px;
      width: 19px;
    }
  `;
}
