"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledThermometer = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}&::after,&::before{content:\"\";display:block;position:absolute;width:2px;border-radius:22px;transform:rotate(45deg)}&::before{height:12px;border:2px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 6px;right:6px;top:1px}&::after{height:8px;background:currentColor;bottom:0;left:3px}\n"], ["\n  &{position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}&::after,&::before{content:\"\";display:block;position:absolute;width:2px;border-radius:22px;transform:rotate(45deg)}&::before{height:12px;border:2px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 6px;right:6px;top:1px}&::after{height:8px;background:currentColor;bottom:0;left:3px}\n"])));
exports.Thermometer = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledThermometer, tslib_1.__assign({}, props, { ref: ref, "icon-role": "thermometer" }))));
});
var templateObject_1;
//# sourceMappingURL=Thermometer.js.map