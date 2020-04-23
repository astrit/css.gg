"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMenuRight = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:20px;height:2px;border-radius:3px;background:currentColor}&::after,&::before{content:\"\";position:absolute;top:-6px;right:0;width:10px}&::after{top:6px;width:14px}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:20px;height:2px;border-radius:3px;background:currentColor}&::after,&::before{content:\"\";position:absolute;top:-6px;right:0;width:10px}&::after{top:6px;width:14px}\n"])));
exports.MenuRight = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMenuRight, tslib_1.__assign({}, props, { ref: ref, "icon-role": "menu-right" }))));
});
var templateObject_1;
//# sourceMappingURL=MenuRight.js.map