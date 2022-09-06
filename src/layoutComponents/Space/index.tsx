import React, { CSSProperties, Fragment } from 'react';
import './style/index.scss';

type Props = {
  className?: string
  style?: CSSProperties
  children?: React.ReactNode
  /**
   * @description 方向
   * @default horizontal
   */
  direction?: 'vertical' | 'horizontal'
  /**
   * @description 间距
   * @default 4px
   */
  gap?: number | string
  /** 分割元素 */
  split?: React.ReactNode
};

const Space: React.FC<Props> = ({
  className,
  style,
  children,
  direction = 'horizontal',
  gap = 4,
  split
}) => {
  const getGap = typeof gap === 'number' ? `${gap}px` : gap;
  const getDirection = direction === 'horizontal' ? 'row' : 'column'
  console.log()
  return (
    <div
      className={`hd-space ${className}`}
      style={{
        //@ts-ignore
        "--hd-space-gap": getGap,
        "--hd-space-direction": getDirection,
        ...style
      }}
    >
      {Array.isArray(children) ? (
        children.map((item, index, arr) => (
          <Fragment key={index}>
            {item}
            {split && index < arr.length - 1 && split}
          </Fragment>
        ))
      ) : children}
    </div>
  );
};
export default Space;
