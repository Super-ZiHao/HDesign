import React, { CSSProperties, useRef } from 'react';
import './style/index.scss';
import { useButtonCustomStyle } from './utils';

export type Props = {
  className?: string;
  style?: CSSProperties;
  children: string;
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

const Button: React.FC<Props> = ({
  className = '',
  color,
  dark = false,
  style,
  children,
  loading = false,
  animation = false,
  type = 'default',
  plain = false,
  disabled = false,
  onClick,
  onMouseOver,
  onMouseOut,
  ...resetProps
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (disabled) return;
    onClick?.(e);
  };
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // 动画操作
    if (!animation || disabled || loading) return;
    e.persist();
    const button = buttonRef.current as HTMLButtonElement;
    const div = document.createElement('div');
    const { left, top } = button.getBoundingClientRect();
    div.classList.add('hd-button-point');
    div.style.left = `${e.clientX - left}px`;
    div.style.top = `${e.clientY - top}px`;
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

  const getChildren = () => {
    // 禁用
    if (disabled) return children;
    // 加载态
    if (loading)
      return children.match(/./g)?.map((item, index) => (
        <span
          className="hd-button-text-turn"
          style={{
            // @ts-ignore
            '--hd-button-loading-direction': `${index * 0.13}s`,
          }}
        >
          {item}
        </span>
      ));
    // 点击特效
    if (animation) return <span className="hd-text">{children}</span>;
    return children;
  };
  return (
    <div className="hd-button">
      <button
        ref={buttonRef}
        className={`hd-button__inner ${className} ${type} ${animation ? 'animation' : ''} ${
          plain ? 'hd-plain' : 'hd-weight'
        }`}
        style={{
          ...useButtonCustomStyle(color, dark, plain, disabled),
          ...style,
        }}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onMouseLeave={onMouseOut}
        onMouseEnter={onMouseOver}
        {...resetProps}
      >
        {getChildren()}
      </button>
      {disabled && <div className="hd-button-disabled" />}
      {loading && <div className="hd-button-loading" />}
    </div>
  );
};

export { ButtonGroup } from './components/ButtonGroup';
export default Button;
