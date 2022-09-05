import React from 'react';

export type Props = {
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

export const ButtonGroup: React.FC<Props> = ({
  theme,
  radius = 4,
  value,
  data,
  onChange,
  children,
}) => {
  return (
    <div className="hd-buttonGroup" style={{ borderRadius: radius }}>
      {children}
    </div>
  );
};
