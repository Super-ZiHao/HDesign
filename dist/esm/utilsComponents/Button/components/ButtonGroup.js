import React from 'react';
import { jsx as _jsx } from 'react/jsx-runtime';
export var ButtonGroup = function ButtonGroup(_ref) {
  var theme = _ref.theme,
    _ref$radius = _ref.radius,
    radius = _ref$radius === void 0 ? 4 : _ref$radius,
    value = _ref.value,
    data = _ref.data,
    onChange = _ref.onChange,
    children = _ref.children;
  return /*#__PURE__*/ _jsx('div', {
    className: 'hd-buttonGroup',
    style: {
      borderRadius: radius,
    },
    children: children,
  });
};
