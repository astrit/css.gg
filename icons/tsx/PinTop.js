"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPinTop = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:8px;background:currentColor;margin-top:-8px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{background:currentColor;top:-2px;border-radius:3px;width:10px;height:2px;left:-4px}&::before{width:8px;height:8px;border:6px double;border-radius:100px;bottom:-10px;left:-5px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:8px;background:currentColor;margin-top:-8px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{background:currentColor;top:-2px;border-radius:3px;width:10px;height:2px;left:-4px}&::before{width:8px;height:8px;border:6px double;border-radius:100px;bottom:-10px;left:-5px}\n"])));
exports.PinTop = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPinTop, tslib_1.__assign({}, props, { ref: ref, "icon-role": "pin-top" }))));
});
var templateObject_1;
//# sourceMappingURL=PinTop.js.map