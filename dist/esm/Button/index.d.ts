import React, { CSSProperties } from 'react';
import './index.scss';
export declare type Props = {
    children?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
};
declare const Button: React.FC<Props>;
export default Button;
