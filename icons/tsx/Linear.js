"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledLinear = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:18px;height:18px;overflow:hidden;border-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:25px;height:25px;transform:rotate(-45deg);background:currentColor;top:-14px;left:4px}&::after{width:2px;box-shadow:-3px 4px 0 0,-6px -2px 0 0;top:-3px;left:6px}\n"], ["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:18px;height:18px;overflow:hidden;border-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:25px;height:25px;transform:rotate(-45deg);background:currentColor;top:-14px;left:4px}&::after{width:2px;box-shadow:-3px 4px 0 0,-6px -2px 0 0;top:-3px;left:6px}\n"])));
exports.Linear = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledLinear, tslib_1.__assign({}, props, { ref: ref, "icon-role": "linear" }))));
});
var templateObject_1;
//# sourceMappingURL=Linear.js.map