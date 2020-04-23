"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMathPercent = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:16px;height:2px;background:currentColor;border-radius:20px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:4px;height:4px;background:currentColor;border-radius:20px;top:-7px;left:6px}&::after{top:5px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:16px;height:2px;background:currentColor;border-radius:20px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:4px;height:4px;background:currentColor;border-radius:20px;top:-7px;left:6px}&::after{top:5px}\n"])));
exports.MathPercent = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMathPercent, tslib_1.__assign({}, props, { ref: ref, "icon-role": "math-percent" }))));
});
var templateObject_1;
//# sourceMappingURL=MathPercent.js.map