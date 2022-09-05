import { TinyColor } from '@ctrl/tinycolor';

export const getColor = (color: string) => {
  const c = new TinyColor(color);
};

export function darken(color: TinyColor, amount = 20) {
  return color.mix('#141414', amount).toString();
}

// 获取 button 自定义属性名
export const useNamespace = (block: string) => {
  const namespace = 'hd';
  // with block
  const cssVarBlock = (object: Record<string, string>) => {
    const styles: Record<string, string> = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name: string) => `--${namespace}-${name}`;
  const cssVarBlockName = (name: string) => `--${namespace}-${block}-${name}`;

  return {
    cssVarName,
    cssVarBlock,
    cssVarBlockName,
  };
};

export function useButtonCustomStyle(
  color: string | undefined,
  dark: boolean,
  plain: boolean,
  disabled: boolean,
) {
  if (!color) return;
  const ns = useNamespace('button'); // 获取 button 按钮以及他的方法

  let styles: Record<string, string> = {};

  const buttonColor = color;
  if (buttonColor) {
    const color = new TinyColor(buttonColor);

    if (plain) {
      // 轻量按钮
      const hoverBgColor = dark ? darken(color, 90) : color.tint(60).toString();
      const activeBgColor = dark ? darken(color, 20) : color.tint(30).toString();
      const hoverBorderColor = dark ? darken(color, 20) : color.darken(10).toString();
      const activeBorderColor = dark ? darken(color, 20) : color.darken(20).toString();
      styles = ns.cssVarBlock({
        bgColor: color.tint(80).toString(),
        color: buttonColor,
        borderColor: buttonColor,
        'hover-color': hoverBorderColor,
        'hover-bgColor': hoverBgColor,
        'hover-borderColor': hoverBorderColor,
        'active-bgColor': activeBgColor,
        'active-color': activeBorderColor,
        'active-borderColor': activeBorderColor,
      });

      if (disabled) {
        styles[ns.cssVarBlockName('disabled-bg-color')] = dark
          ? darken(color, 90)
          : color.tint(90).toString();
        styles[ns.cssVarBlockName('disabled-text-color')] = dark
          ? darken(color, 50)
          : color.tint(50).toString();
        styles[ns.cssVarBlockName('disabled-border-color')] = dark
          ? darken(color, 80)
          : color.tint(80).toString();
      }
    } else {
      const activeBgColor = dark ? darken(color, 20) : color.darken(10).toString();
      const hoverBgColor = dark ? darken(color, 30) : color.darken(5).toString();
      const textColor = color.isDark()
        ? `var(${ns.cssVarName('color-white')})`
        : `var(${ns.cssVarName('color-black')})`;
      styles = ns.cssVarBlock({
        color: textColor,
        'hover-color': textColor,
        borderColor: buttonColor,
        'hover-borderColor': hoverBgColor,
        'active-borderColor': activeBgColor,
        bgColor: buttonColor,
        'hover-bgColor': hoverBgColor,
        'active-bgColor': activeBgColor,
      });

      if (disabled) {
        const disabledButtonColor = dark ? darken(color, 50) : color.tint(50).toString();
        styles[ns.cssVarBlockName('disabled-bg-color')] = disabledButtonColor;
        styles[ns.cssVarBlockName('disabled-text-color')] = dark
          ? 'rgba(255, 255, 255, 0.5)'
          : `var(${ns.cssVarName('color-white')})`;
        styles[ns.cssVarBlockName('disabled-border-color')] = disabledButtonColor;
      }
    }
  }
  return styles;
}
