"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCap = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:12px;border:2px solid;border-bottom-color:transparent;border-top-left-radius:100px;border-top-right-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{border-top:2px solid transparent;border-bottom:2px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;box-shadow:0 0 0 2px,inset 12px 0 0 0;bottom:-8px;width:18px;height:6px;border-radius:1px;left:-2px}&::before{width:4px;height:4px;background:currentColor;border-radius:2px;left:5px;top:-4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:12px;border:2px solid;border-bottom-color:transparent;border-top-left-radius:100px;border-top-right-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{border-top:2px solid transparent;border-bottom:2px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;box-shadow:0 0 0 2px,inset 12px 0 0 0;bottom:-8px;width:18px;height:6px;border-radius:1px;left:-2px}&::before{width:4px;height:4px;background:currentColor;border-radius:2px;left:5px;top:-4px}\n"])));
exports.Cap = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCap, tslib_1.__assign({}, props, { ref: ref, "icon-role": "cap" }))));
});
var templateObject_1;
//# sourceMappingURL=Cap.js.map