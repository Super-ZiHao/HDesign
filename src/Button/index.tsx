import React, { CSSProperties, useRef } from 'react';
import './index.scss';

export type Props = {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  /**
   * @description 图标
   */
  icon?: React.ReactNode;
  /**
   * @description 是否需要点击动画
   * @default false
   */
  animation?: boolean;
  /**
   * @description 按钮类型
   * @default "defalut"
   */
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  /**
   * @description 轻量按钮
   * @default false
   */
  plain?: boolean;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /** 点击事件 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** 移入事件 */
  onMouseOver?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** 移出事件 */
  onMouseOut?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<Props> = (props) => {
  const {
    className = '',
    style,
    children,
    animation = false,
    type = 'default',
    plain = false,
    disabled,
    onClick,
    onMouseOver,
    onMouseOut,
    ...resetProps
  } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e);
  };
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // 动画操作
    if (!animation || disabled) return;
    const button = buttonRef.current as HTMLButtonElement;
    const div = document.createElement('div');
    div.classList.add('hd-button-point');
    div.style.left = `${e.clientX - button.offsetLeft}px`;
    div.style.top = `${e.clientY - button.offsetTop}px`;
    (buttonRef.current as HTMLButtonElement).appendChild(div);
    const handleUp = () => {
      div.classList.add('del');
      setTimeout(() => {
        div?.remove();
      }, 300);
      button.removeEventListener('mouseup', handleUp);
    };
    button.addEventListener('mouseup', handleUp);
  };
  return (
    <button
      ref={buttonRef}
      className={`hd-button ${className} ${type} ${animation ? 'animation' : ''} ${
        disabled ? 'disabled' : ''
      } ${plain ? 'plain' : ''}`}
      style={{
        ...style,
      }}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseLeave={onMouseOut}
      onMouseEnter={onMouseOver}
      {...resetProps}
    >
      {animation ? <span className="hd-text">{children}</span> : children}
    </button>
  );
};
export default Button;
