"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMenuLeft = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:20px;height:2px;border-radius:3px;background:currentColor}&::after,&::before{content:\"\";position:absolute;top:-6px;width:10px}&::after{top:6px;width:14px}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:20px;height:2px;border-radius:3px;background:currentColor}&::after,&::before{content:\"\";position:absolute;top:-6px;width:10px}&::after{top:6px;width:14px}\n"])));
exports.MenuLeft = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMenuLeft, tslib_1.__assign({}, props, { ref: ref, "icon-role": "menu-left" }))));
});
var templateObject_1;
//# sourceMappingURL=MenuLeft.js.map