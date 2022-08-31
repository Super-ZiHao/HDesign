import React, { CSSProperties, useRef } from 'react';
import './index.scss';

export type Props = {
  className?: string;
  style?: CSSProperties
  children?: React.ReactNode;
  /** 是否需要点击动画 */
  animation?: boolean
  /** 按钮类型 */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  /** 禁用 */
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

const Button: React.FC<Props> = (props) => {
  const {
    className = '',
    style,
    children,
    animation = false,
    type = '',
    disabled,
    onClick,
    onMouseDown,
    ...resetProps
  } = props;
  const buttonRef = useRef<HTMLButtonElement>(null)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e);
  }
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onMouseDown?.(e)
    // 动画操作
    if (!animation || disabled) return
    const button = (buttonRef.current as HTMLButtonElement);
    const div = document.createElement('div');
    div.classList.add('hd-button-point');
    div.style.left = `${e.clientX - button.offsetLeft}px`;
    div.style.top = `${e.clientY - button.offsetTop}px`;
    (buttonRef.current as HTMLButtonElement).appendChild(div);
    const handleUp = () => {
      div.classList.add('del')
      setTimeout(() => {
        div?.remove();
      }, 300);
      button.removeEventListener('mouseup', handleUp);
    }
    button.addEventListener('mouseup', handleUp)
  }
  return <button
    ref={buttonRef}
    className={`hd-button ${className} ${type} ${animation ? 'animation' : ''} ${disabled ? 'disabled' : ''}`}
    style={{
      ...style
    }}
    onClick={handleClick}
    onMouseDown={handleMouseDown}
    {...resetProps}
  >
    {animation ? <span className='hd-text'>{children}</span> : children}
  </button>;
};
export default Button;
