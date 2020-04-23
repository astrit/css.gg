"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledQr = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;box-shadow:-6px -6px 0 -4px,6px 6px 0 -4px,6px -6px 0 -4px,-6px 6px 0 -4px}&::after{content:\"\";position:absolute;width:4px;height:4px;background:currentColor;box-shadow:0 6px 0,6px 6px 0,6px 0 0;top:2px;left:2px}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;box-shadow:-6px -6px 0 -4px,6px 6px 0 -4px,6px -6px 0 -4px,-6px 6px 0 -4px}&::after{content:\"\";position:absolute;width:4px;height:4px;background:currentColor;box-shadow:0 6px 0,6px 6px 0,6px 0 0;top:2px;left:2px}\n"])));
exports.Qr = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledQr, tslib_1.__assign({}, props, { ref: ref, "icon-role": "qr" }))));
});
var templateObject_1;
//# sourceMappingURL=Qr.js.map