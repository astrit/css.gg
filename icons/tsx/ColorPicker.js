"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledColorPicker = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:18px;height:10px;border-left:0;border-top-left-radius:100px;border-bottom-left-radius:100px;border-top:2px solid transparent;border-bottom:2px solid transparent;border-right:2px solid transparent;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;background:currentColor}&::before{top:-2px;border-radius:3px;width:2px;height:10px;right:-3px}&::after{width:8px;height:6px;right:-9px;box-shadow:-21px 0 0 -2px;border-top-right-radius:100px;border-bottom-right-radius:100px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:18px;height:10px;border-left:0;border-top-left-radius:100px;border-bottom-left-radius:100px;border-top:2px solid transparent;border-bottom:2px solid transparent;border-right:2px solid transparent;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;background:currentColor}&::before{top:-2px;border-radius:3px;width:2px;height:10px;right:-3px}&::after{width:8px;height:6px;right:-9px;box-shadow:-21px 0 0 -2px;border-top-right-radius:100px;border-bottom-right-radius:100px}\n"])));
exports.ColorPicker = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledColorPicker, tslib_1.__assign({}, props, { ref: ref, "icon-role": "color-picker" }))));
});
var templateObject_1;
//# sourceMappingURL=ColorPicker.js.map