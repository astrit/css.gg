"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledOverflow = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border-radius:20px;border-bottom:8px solid}&::after,&::before{content:\"\";box-sizing:border-box;position:absolute;display:block;border-radius:20px}&::before{width:20px;height:20px;border-bottom:10px solid;opacity:.6;left:-2px;top:-2px}&::after{width:16px;height:16px;border-top:8px solid;opacity:.2;left:0;top:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border-radius:20px;border-bottom:8px solid}&::after,&::before{content:\"\";box-sizing:border-box;position:absolute;display:block;border-radius:20px}&::before{width:20px;height:20px;border-bottom:10px solid;opacity:.6;left:-2px;top:-2px}&::after{width:16px;height:16px;border-top:8px solid;opacity:.2;left:0;top:0}\n"])));
exports.Overflow = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledOverflow, tslib_1.__assign({}, props, { ref: ref, "icon-role": "overflow" }))));
});
var templateObject_1;
//# sourceMappingURL=Overflow.js.map