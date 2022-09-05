import React from 'react';
export declare type Props = {
  /** 主题颜色 */
  theme?: '' | '';
  /** 圆角大小 */
  radius?: number | string;
  /** 选中按钮 */
  value?: any;
  /** 按钮数据 */
  data?: any[];
  /** 改变事件 */
  onChange?: (index: number, e: any) => void;
  children?: React.ReactNode;
};
export declare const ButtonGroup: React.FC<Props>;
