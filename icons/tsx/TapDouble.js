"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTapDouble = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:20px;height:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:22px}&::before{width:20px;height:20px;border:6px double transparent;border-top:6px double}&::after{width:6px;height:10px;border:2px solid transparent;border-bottom-width:5px;box-shadow:0 0 0 2px,inset 0 0 0 2px;left:7px;bottom:2px}\n"], ["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:20px;height:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:22px}&::before{width:20px;height:20px;border:6px double transparent;border-top:6px double}&::after{width:6px;height:10px;border:2px solid transparent;border-bottom-width:5px;box-shadow:0 0 0 2px,inset 0 0 0 2px;left:7px;bottom:2px}\n"])));
exports.TapDouble = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTapDouble, tslib_1.__assign({}, props, { ref: ref, "icon-role": "tap-double" }))));
});
var templateObject_1;
//# sourceMappingURL=TapDouble.js.map