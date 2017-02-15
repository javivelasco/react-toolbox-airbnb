import React from 'react';

const Weekday = ({ children, className }) => (
  <span className={className}>
    {children.slice(0, 2)}
  </span>
);

export default Weekday;
