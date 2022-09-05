import React from 'react';
import './style/index.scss';
export declare type Props = {
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
declare const Input: React.FC<Props>;
export default Input;
