import React, { CSSProperties } from 'react';
import './style/index.scss';
export declare type Props = {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  /**
   * @description 自适应颜色
   */
  color?: string;
  /**
   * @description 是否黑暗色
   * @default false
   */
  dark?: boolean;
  /**
   * @description 图标
   */
  icon?: React.ReactNode;
  /**
   * @description 按钮类型
   * @default "defalut"
   */
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  /**
   * @description 加载中
   * @default 未完成
   */
  loading?: boolean | JSX.Element;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 是否需要点击动画
   * @default false
   */
  animation?: boolean;
  /**
   * @description 轻量按钮
   * @default false
   */
  plain?: boolean;
  /** 点击事件 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** 移入事件 */
  onMouseOver?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** 移出事件 */
  onMouseOut?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
declare const Button: React.FC<Props>;
export { ButtonGroup } from './components/ButtonGroup';
export default Button;
