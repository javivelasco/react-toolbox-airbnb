import React, { cloneElement, Children, Component } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import throttle from 'lodash.throttle';
import styled from 'styled-components';

const customPreset = { stiffness: 180, damping: 23 };
const RIGHT = 'right';
const LEFT = 'left';

const MonthsWrapperNode = styled.div`
  display: flex;
  align-items: top;
  align-content: top;
  flex-direction: row;
  flex-wrap: wrap;
  transition: height 120ms ease-in-out;
  width: 100%;
`;

class MonthsWrapper extends Component {
  componentDidMount() {
    this.getChildHeight((wrapperHeight) => {
      this.setState({ wrapperHeight });
    });
  }

  componentWillReceiveProps(nextProps) {
    const { children: nextChildren } = nextProps;
    const { children } = this.props;
    const nextViewDate = firstChildViewDate(nextChildren);
    const viewDate = firstChildViewDate(children);
    if (viewDate.getTime() !== nextViewDate.getTime()) {
      this.direction = viewDate.getTime() < nextViewDate.getTime() ? RIGHT : LEFT;
    }
  }

  componentDidUpdate(prevProps) {
    this.getChildHeight((wrapperHeight) => {
      if (this.state.wrapperHeight !== wrapperHeight) {
        this.setState({ wrapperHeight })
      }
    });
  }

  state = { wrapperHeight: 0 };
  childrenRefs = [];
  direction = RIGHT;

  handleRef = (node, idx) => {
    this.childrenRefs[idx] = node;
  };

  getChildHeight = throttle((fn) => {
    requestAnimationFrame(() => {
      const { numberOfMonths } = this.props;
      const items = this.childrenRefs
        .map(child => child && child.getBoundingClientRect())
        .map(size => size && size.height)
        .filter(item => !!item);

      const itemsSlice = this.direction === RIGHT
        ? items.slice(items.length - numberOfMonths)
        : items.slice(0, numberOfMonths);

      fn(itemsSlice.reduce((result, item) => (item && item > result) ? item : result, 0));
    });
  }, 200)

  willEnter = () => {
    return {
      transform: this.direction === RIGHT 
        ? this.props.numberOfMonths * 100
        : -100,
    };
  };

  willLeave = () => {
    return {
      transform: this.direction === RIGHT 
        ? spring(-100, customPreset) 
        : spring(this.props.numberOfMonths * 100, customPreset),
    };
  };

  render() {
    this.childrenRefs = [];
    const { children, ...rest } = this.props;
    return (
      <TransitionMotion
        willEnter={this.willEnter}
        willLeave={this.willLeave}
        didLeave={this.didLeave}
        styles={Children.toArray(children).map((child, index) => {
          const { viewDate } = child.props;
          return { 
            key: `${viewDate.getFullYear()}-${viewDate.getMonth()}`,
            data: { child }, 
            style: { transform: spring(index * 100, customPreset) },
          };
        })}
      >
        {interpolatedStyles => (
          <MonthsWrapperNode {...rest} style={{ height: this.state.wrapperHeight }}>
            {interpolatedStyles.map((config, idx) => {
              return cloneElement(config.data.child, {
                innerRef: node => this.handleRef(node, idx),
                style: {
                  transform: `translateX(${config.style.transform}%)`,
                }
              });
            })}
          </MonthsWrapperNode>
        )}
      </TransitionMotion>
    );
  }
}

function firstChildViewDate(children) {
  const child = Children.toArray(children)[0];
  return child.props.viewDate;
}

export default MonthsWrapper;
