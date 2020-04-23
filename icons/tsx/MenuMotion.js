"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMenuMotion = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:18px;height:14px;transform:scale(var(--ggs,1))}&::before{content:\"\";position:absolute;box-sizing:border-box;display:block;width:10px;height:2px;bottom:0;box-shadow:4px -6px 0,8px -12px 0;border-radius:4px;background:currentColor}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:18px;height:14px;transform:scale(var(--ggs,1))}&::before{content:\"\";position:absolute;box-sizing:border-box;display:block;width:10px;height:2px;bottom:0;box-shadow:4px -6px 0,8px -12px 0;border-radius:4px;background:currentColor}\n"])));
exports.MenuMotion = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMenuMotion, tslib_1.__assign({}, props, { ref: ref, "icon-role": "menu-motion" }))));
});
var templateObject_1;
//# sourceMappingURL=MenuMotion.js.map