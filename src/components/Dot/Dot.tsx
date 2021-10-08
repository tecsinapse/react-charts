import React from 'react';
import { CircleDot, Circle } from './styled';

const Dot = ({ color }: { color: string }): JSX.Element => {
  return (
    <Circle color={color}>
      <CircleDot />
    </Circle>
  );
};

export default Dot;
