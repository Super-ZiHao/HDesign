import React from 'react';
import './index.scss';

export type Props = {
  children?: React.ReactNode;
};

const Button: React.FC<Props> = (props) => {
  const { children } = props;
  return <button className="hd-button">{children}</button>;
};
export default Button;
