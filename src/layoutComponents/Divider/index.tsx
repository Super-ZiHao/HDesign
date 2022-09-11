import React, { CSSProperties } from 'react';

type Props = {
  className?: string;
  style?: CSSProperties;
  /**
   * @description 方向
   * @default horizontal
   */
  direction?: 'vertical' | 'horizontal';
  /**
   * @description 分割线颜色
   * @default #eaecf1
   */
  color?: string;
  /**
   * @description 宽
   * @default 100% | 1px
   */
  width?: number | string;
  /**
   * @description 高
   * @default 100% | 1px
   */
  height?: number | string;
  /**
   * @description 间距
   * @default 4px
   */
  gap?: number | string;
};

const Divider: React.FC<Props> = ({
  className,
  direction = 'vertical',
  style,
  width = direction === 'horizontal' ? '100%' : '1px',
  height = direction === 'vertical' ? '100%' : '1px',
  gap = 4,
}) => {
  const getGap = typeof gap === 'number' ? `${gap}px` : gap;
  return (
    <div
      className={`hd-divider ${className}`}
      style={{
        margin: `${direction === 'vertical' ? 0 : getGap} ${
          direction === 'horizontal' ? 0 : getGap
        }`,
        width,
        height,
        backgroundColor: '#eaecf1',
        ...style,
      }}
    />
  );
};
export default Divider;
