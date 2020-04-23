"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledUsb = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::before{display:block;box-sizing:border-box}&{position:relative;width:14px;height:14px;border:2px solid;transform:scale(var(--ggs,1));margin-bottom:-6px;border-bottom-left-radius:3px;border-bottom-right-radius:3px}&::before{content:\"\";position:absolute;width:6px;height:5px;border-left:1px solid transparent;border-right:1px solid transparent;border-top:1px solid transparent;border-bottom:2px solid transparent;box-shadow:0 0 0 2px,inset 5px 4px 0 -4px,inset -5px 4px 0 -4px;top:-7px;left:2px}\n"], ["\n  &,&::before{display:block;box-sizing:border-box}&{position:relative;width:14px;height:14px;border:2px solid;transform:scale(var(--ggs,1));margin-bottom:-6px;border-bottom-left-radius:3px;border-bottom-right-radius:3px}&::before{content:\"\";position:absolute;width:6px;height:5px;border-left:1px solid transparent;border-right:1px solid transparent;border-top:1px solid transparent;border-bottom:2px solid transparent;box-shadow:0 0 0 2px,inset 5px 4px 0 -4px,inset -5px 4px 0 -4px;top:-7px;left:2px}\n"])));
exports.Usb = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledUsb, tslib_1.__assign({}, props, { ref: ref, "icon-role": "usb" }))));
});
var templateObject_1;
//# sourceMappingURL=Usb.js.map