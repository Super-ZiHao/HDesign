import { TinyColor } from '@ctrl/tinycolor';
export var getColor = function getColor(color) {
  var c = new TinyColor(color);
};
export function darken(color) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  return color.mix('#141414', amount).toString();
} // 获取 button 自定义属性名

export var useNamespace = function useNamespace(block) {
  var namespace = 'hd'; // with block

  var cssVarBlock = function cssVarBlock(object) {
    var styles = {};

    for (var key in object) {
      if (object[key]) {
        styles['--'.concat(namespace, '-').concat(block, '-').concat(key)] = object[key];
      }
    }

    return styles;
  };

  var cssVarName = function cssVarName(name) {
    return '--'.concat(namespace, '-').concat(name);
  };

  var cssVarBlockName = function cssVarBlockName(name) {
    return '--'.concat(namespace, '-').concat(block, '-').concat(name);
  };

  return {
    cssVarName: cssVarName,
    cssVarBlock: cssVarBlock,
    cssVarBlockName: cssVarBlockName,
  };
};
export function useButtonCustomStyle(color, dark, plain, disabled) {
  if (!color) return;
  var ns = useNamespace('button'); // 获取 button 按钮以及他的方法

  var styles = {};
  var buttonColor = color;

  if (buttonColor) {
    var _color = new TinyColor(buttonColor);

    if (plain) {
      // 轻量按钮
      var hoverBgColor = dark ? darken(_color, 90) : _color.tint(60).toString();
      var activeBgColor = dark ? darken(_color, 20) : _color.tint(30).toString();
      var hoverBorderColor = dark ? darken(_color, 20) : _color.darken(10).toString();
      var activeBorderColor = dark ? darken(_color, 20) : _color.darken(20).toString();
      styles = ns.cssVarBlock({
        bgColor: _color.tint(80).toString(),
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
          ? darken(_color, 90)
          : _color.tint(90).toString();
        styles[ns.cssVarBlockName('disabled-text-color')] = dark
          ? darken(_color, 50)
          : _color.tint(50).toString();
        styles[ns.cssVarBlockName('disabled-border-color')] = dark
          ? darken(_color, 80)
          : _color.tint(80).toString();
      }
    } else {
      var _activeBgColor = dark ? darken(_color, 20) : _color.darken(10).toString();

      var _hoverBgColor = dark ? darken(_color, 30) : _color.darken(5).toString();

      var textColor = _color.isDark()
        ? 'var('.concat(ns.cssVarName('color-white'), ')')
        : 'var('.concat(ns.cssVarName('color-black'), ')');
      styles = ns.cssVarBlock({
        color: textColor,
        'hover-color': textColor,
        borderColor: buttonColor,
        'hover-borderColor': _hoverBgColor,
        'active-borderColor': _activeBgColor,
        bgColor: buttonColor,
        'hover-bgColor': _hoverBgColor,
        'active-bgColor': _activeBgColor,
      });

      if (disabled) {
        var disabledButtonColor = dark ? darken(_color, 50) : _color.tint(50).toString();
        styles[ns.cssVarBlockName('disabled-bg-color')] = disabledButtonColor;
        styles[ns.cssVarBlockName('disabled-text-color')] = dark
          ? 'rgba(255, 255, 255, 0.5)'
          : 'var('.concat(ns.cssVarName('color-white'), ')');
        styles[ns.cssVarBlockName('disabled-border-color')] = disabledButtonColor;
      }
    }
  }

  return styles;
}
