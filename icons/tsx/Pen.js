"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPen = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:14px;height:4px;border-right:2px solid transparent;box-shadow:0 0 0 2px,inset -2px 0 0;border-top-right-radius:1px;border-bottom-right-radius:1px;margin-right:-2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:currentColor;border-left:0;right:-6px;width:3px;height:4px;border-radius:1px;top:0}&::after{width:8px;height:7px;border-top:4px solid transparent;border-bottom:4px solid transparent;border-right:7px solid;left:-11px;top:-2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:14px;height:4px;border-right:2px solid transparent;box-shadow:0 0 0 2px,inset -2px 0 0;border-top-right-radius:1px;border-bottom-right-radius:1px;margin-right:-2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:currentColor;border-left:0;right:-6px;width:3px;height:4px;border-radius:1px;top:0}&::after{width:8px;height:7px;border-top:4px solid transparent;border-bottom:4px solid transparent;border-right:7px solid;left:-11px;top:-2px}\n"])));
exports.Pen = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPen, tslib_1.__assign({}, props, { ref: ref, "icon-role": "pen" }))));
});
var templateObject_1;
//# sourceMappingURL=Pen.js.map