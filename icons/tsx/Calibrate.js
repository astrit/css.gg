"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCalibrate = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:18px;height:18px;overflow:hidden}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:22px}&::before{width:6px;height:6px;background:currentColor;top:10px;left:6px}&::after{width:22px;height:22px;border:6px solid transparent;border-top:6px solid;left:-2px;top:1px}\n"], ["\n  &{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:18px;height:18px;overflow:hidden}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:22px}&::before{width:6px;height:6px;background:currentColor;top:10px;left:6px}&::after{width:22px;height:22px;border:6px solid transparent;border-top:6px solid;left:-2px;top:1px}\n"])));
exports.Calibrate = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCalibrate, tslib_1.__assign({}, props, { ref: ref, "icon-role": "calibrate" }))));
});
var templateObject_1;
//# sourceMappingURL=Calibrate.js.map