"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMathEqual = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:2px;background:currentColor;border-radius:10px;margin-top:-6px;box-shadow:0 6px 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:2px;background:currentColor;border-radius:10px;margin-top:-6px;box-shadow:0 6px 0}\n"])));
exports.MathEqual = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMathEqual, tslib_1.__assign({}, props, { ref: ref, "icon-role": "math-equal" }))));
});
var templateObject_1;
//# sourceMappingURL=MathEqual.js.map