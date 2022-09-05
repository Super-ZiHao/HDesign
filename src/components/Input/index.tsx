import React, { useEffect, useRef } from 'react';
import './style/index.scss';

export type Props = {
  /** 输入框内容 */
  value?: string;
  /** 输入框占位文本	 */
  placeholder?: string;
  /**
   * @description 清除按钮
   * @default false
   */
  clearable?: boolean | JSX.Element;
  /** 前缀 */
  prefix?: React.ReactNode;
  /** 输入框内容变化时触发 */
  onChange?: (value: string, e: any) => void;
  /** 输入框聚焦时的触发 */
  onFocus?: (value: string, e: any) => void;
  /** 输入框失焦时的触发 */
  onBlur?: (value: string, e: any) => void;
  /** 输入框按下回车时触发 */
  onEnter?: (value: string, e: any) => void;
  /** 清除事件回调 */
  onClear?: (value: string, e: any) => void;
};

const Input: React.FC<Props> = ({ value, placeholder, onChange, onFocus, onBlur, onEnter }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChage = (e: any) => {
    const input = e.target as HTMLInputElement;
    onChange?.(input.value, e);
    if (value) input.value = input.value.slice(0, input.value.length - 1);
  };

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13 || e.key === 'Enter') {
      onEnter?.(e.target.value, e);
    }
  };

  const handleFocus = (e: any) => {
    onFocus?.(e.target.value, e);
  };

  const handleBlur = (e: any) => {
    onBlur?.(e.target.value, e);
  };

  const handleClear = (e: any) => {};

  useEffect(() => {
    if (!inputRef.current || !value) return;
    inputRef.current.value = value;
  }, [value]);

  return (
    <div className="hd-input">
      <input
        className="hd-input__inner"
        ref={inputRef}
        onInput={handleChage}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
      {/* {placeholder && <span className="hd-input-placeholder">{placeholder}</span>} */}
    </div>
  );
};
export default Input;
