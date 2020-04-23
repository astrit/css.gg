"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledEnter = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:18px;border:2px solid;border-left:0;box-shadow:-8px -6px 0 -6px,-8px 6px 0 -6px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;right:4px}&::before{background:currentColor;width:16px;height:2px;top:6px}&::after{width:6px;height:6px;border-right:2px solid;border-top:2px solid;top:4px;transform:rotate(45deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:18px;border:2px solid;border-left:0;box-shadow:-8px -6px 0 -6px,-8px 6px 0 -6px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;right:4px}&::before{background:currentColor;width:16px;height:2px;top:6px}&::after{width:6px;height:6px;border-right:2px solid;border-top:2px solid;top:4px;transform:rotate(45deg)}\n"])));
exports.Enter = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledEnter, tslib_1.__assign({}, props, { ref: ref, "icon-role": "enter" }))));
});
var templateObject_1;
//# sourceMappingURL=Enter.js.map