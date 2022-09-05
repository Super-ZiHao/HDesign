import React, { useEffect, useRef } from 'react';
import './style/index.scss';
import { jsx as _jsx } from 'react/jsx-runtime';

var Input = function Input(_ref) {
  var value = _ref.value,
    placeholder = _ref.placeholder,
    onChange = _ref.onChange,
    onFocus = _ref.onFocus,
    onBlur = _ref.onBlur,
    onEnter = _ref.onEnter;
  var inputRef = useRef(null);

  var handleChage = function handleChage(e) {
    var input = e.target;
    onChange === null || onChange === void 0 ? void 0 : onChange(input.value, e);
    if (value) input.value = input.value.slice(0, input.value.length - 1);
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 13 || e.key === 'Enter') {
      onEnter === null || onEnter === void 0 ? void 0 : onEnter(e.target.value, e);
    }
  };

  var handleFocus = function handleFocus(e) {
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e.target.value, e);
  };

  var handleBlur = function handleBlur(e) {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e.target.value, e);
  };

  var handleClear = function handleClear(e) {};

  useEffect(
    function () {
      if (!inputRef.current || !value) return;
      inputRef.current.value = value;
    },
    [value],
  );
  return /*#__PURE__*/ _jsx('div', {
    className: 'hd-input',
    children: /*#__PURE__*/ _jsx('input', {
      className: 'hd-input__inner',
      ref: inputRef,
      onInput: handleChage,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
    }),
  });
};

export default Input;
