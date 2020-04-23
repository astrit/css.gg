"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMathDivide = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:16px;height:2px;background:currentColor;border-radius:20px}&::after,&::before{content:\"\";position:absolute;width:4px;height:4px;top:-6px;left:6px}&::after{top:4px}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:16px;height:2px;background:currentColor;border-radius:20px}&::after,&::before{content:\"\";position:absolute;width:4px;height:4px;top:-6px;left:6px}&::after{top:4px}\n"])));
exports.MathDivide = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMathDivide, tslib_1.__assign({}, props, { ref: ref, "icon-role": "math-divide" }))));
});
var templateObject_1;
//# sourceMappingURL=MathDivide.js.map