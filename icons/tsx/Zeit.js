"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledVercel = styled_components_1.default.i(
  templateObject_1 ||
    (templateObject_1 = tslib_1.__makeTemplateObject(
      [
        "\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:0px;height:0px;border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:18px solid currentColor;}\n",
      ],
      [
        "\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:0px;height:0px;border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:18px solid currentColor;}\n",
      ]
    ))
);
exports.Vercel = react_1.default.forwardRef(function (props, ref) {
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    react_1.default.createElement(
      StyledVercel,
      tslib_1.__assign({}, props, { ref: ref, "icon-role": "vercel" })
    )
  );
});
var templateObject_1;
//# sourceMappingURL=Vercel.js.map
