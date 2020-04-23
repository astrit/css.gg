"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTouchpad = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:22px;height:18px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:6px;bottom:-2px;left:8px;background:currentColor;}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:20px;height:2px;left:-2px;bottom:3px;background:currentColor;}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:22px;height:18px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:6px;bottom:-2px;left:8px;background:currentColor;}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:20px;height:2px;left:-2px;bottom:3px;background:currentColor;}\n"])));
exports.Touchpad = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTouchpad, tslib_1.__assign({}, props, { ref: ref, "icon-role": "touchpad" }))));
});
var templateObject_1;
//# sourceMappingURL=Touchpad.js.map