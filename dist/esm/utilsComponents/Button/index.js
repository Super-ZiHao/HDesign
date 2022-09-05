var _excluded = [
  'className',
  'color',
  'dark',
  'style',
  'children',
  'loading',
  'animation',
  'type',
  'plain',
  'disabled',
  'onClick',
  'onMouseOver',
  'onMouseOut',
];

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

import React, { useRef } from 'react';
import './style/index.scss';
import { useButtonCustomStyle } from './utils';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';

var Button = function Button(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    color = _ref.color,
    _ref$dark = _ref.dark,
    dark = _ref$dark === void 0 ? false : _ref$dark,
    style = _ref.style,
    children = _ref.children,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$animation = _ref.animation,
    animation = _ref$animation === void 0 ? false : _ref$animation,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'default' : _ref$type,
    _ref$plain = _ref.plain,
    plain = _ref$plain === void 0 ? false : _ref$plain,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    onClick = _ref.onClick,
    onMouseOver = _ref.onMouseOver,
    onMouseOut = _ref.onMouseOut,
    resetProps = _objectWithoutProperties(_ref, _excluded);

  var buttonRef = useRef(null);

  var handleClick = function handleClick(e) {
    if (disabled) return;
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };

  var handleMouseDown = function handleMouseDown(e) {
    // 动画操作
    if (!animation || disabled || loading) return;
    e.persist();
    var button = buttonRef.current;
    var div = document.createElement('div');

    var _button$getBoundingCl = button.getBoundingClientRect(),
      left = _button$getBoundingCl.left,
      top = _button$getBoundingCl.top;

    div.classList.add('hd-button-point');
    div.style.left = ''.concat(e.clientX - left, 'px');
    div.style.top = ''.concat(e.clientY - top, 'px');
    buttonRef.current.appendChild(div);

    var handleUp = function handleUp() {
      div.classList.add('del');
      setTimeout(function () {
        div === null || div === void 0 ? void 0 : div.remove();
      }, 300);
      button.removeEventListener('mouseup', handleUp);
    };

    button.addEventListener('mouseup', handleUp);
  };

  return /*#__PURE__*/ _jsxs('div', {
    className: 'hd-button',
    children: [
      /*#__PURE__*/ _jsx(
        'button',
        _objectSpread(
          _objectSpread(
            {
              ref: buttonRef,
              className: 'hd-button__inner '
                .concat(className, ' ')
                .concat(type, ' ')
                .concat(animation ? 'animation' : '', ' ')
                .concat(plain ? 'hd-plain' : 'hd-weight'),
              style: _objectSpread(
                _objectSpread({}, useButtonCustomStyle(color, dark, plain, disabled)),
                style,
              ),
              onClick: handleClick,
              onMouseDown: handleMouseDown,
              onMouseLeave: onMouseOut,
              onMouseEnter: onMouseOver,
            },
            resetProps,
          ),
          {},
          {
            children: animation
              ? /*#__PURE__*/ _jsx('span', {
                  className: 'hd-text',
                  children: children,
                })
              : children,
          },
        ),
      ),
      disabled &&
        /*#__PURE__*/ _jsx('div', {
          className: 'hd-button-disabled',
        }),
      loading &&
        /*#__PURE__*/ _jsx('div', {
          className: 'hd-button-loading',
        }),
    ],
  });
};

export { ButtonGroup } from './components/ButtonGroup';
export default Button;
