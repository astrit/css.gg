"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledErase = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:18px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:6px;height:14px;border-bottom:4px solid transparent;border-radius:1px;box-shadow:0 0 0 2px,inset 0 -2px 0 0;left:7px;top:2px;transform:rotate(45deg)}&::after{background:currentColor;width:22px;height:2px;bottom:0;border-radius:20px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:18px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:6px;height:14px;border-bottom:4px solid transparent;border-radius:1px;box-shadow:0 0 0 2px,inset 0 -2px 0 0;left:7px;top:2px;transform:rotate(45deg)}&::after{background:currentColor;width:22px;height:2px;bottom:0;border-radius:20px}\n"])));
exports.Erase = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledErase, tslib_1.__assign({}, props, { ref: ref, "icon-role": "erase" }))));
});
var templateObject_1;
//# sourceMappingURL=Erase.js.map