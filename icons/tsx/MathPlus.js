"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMathPlus = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after{display:block;box-sizing:border-box;background:currentColor;border-radius:10px}&{margin-top:-2px;position:relative;transform:scale(var(--ggs,1));width:16px;height:2px}&::after{content:\"\";position:absolute;width:2px;height:16px;top:-7px;left:7px}\n"], ["\n  &,&::after{display:block;box-sizing:border-box;background:currentColor;border-radius:10px}&{margin-top:-2px;position:relative;transform:scale(var(--ggs,1));width:16px;height:2px}&::after{content:\"\";position:absolute;width:2px;height:16px;top:-7px;left:7px}\n"])));
exports.MathPlus = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMathPlus, tslib_1.__assign({}, props, { ref: ref, "icon-role": "math-plus" }))));
});
var templateObject_1;
//# sourceMappingURL=MathPlus.js.map