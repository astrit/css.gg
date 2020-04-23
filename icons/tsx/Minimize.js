"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMinimize = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:4px;height:4px;box-shadow:-8px -4px 0 -1px,-6px -4px 0 -1px,8px 4px 0 -1px,6px 4px 0 -1px,8px -4px 0 -1px,6px -4px 0 -1px,-8px 4px 0 -1px,-6px 4px 0 -1px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:18px;border-top:6px solid;border-bottom:6px solid;box-shadow:18px 0 0 -2px;top:-7px}&::after{left:-3px}&::before{right:-3px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:4px;height:4px;box-shadow:-8px -4px 0 -1px,-6px -4px 0 -1px,8px 4px 0 -1px,6px 4px 0 -1px,8px -4px 0 -1px,6px -4px 0 -1px,-8px 4px 0 -1px,-6px 4px 0 -1px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:18px;border-top:6px solid;border-bottom:6px solid;box-shadow:18px 0 0 -2px;top:-7px}&::after{left:-3px}&::before{right:-3px}\n"])));
exports.Minimize = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMinimize, tslib_1.__assign({}, props, { ref: ref, "icon-role": "minimize" }))));
});
var templateObject_1;
//# sourceMappingURL=Minimize.js.map