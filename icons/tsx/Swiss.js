"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSwiss = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:4px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:5px;height:5px;background:currentColor;box-shadow:0 9px 0;top:-2px}&::after{left:-2px}&::before{right:-2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:4px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:5px;height:5px;background:currentColor;box-shadow:0 9px 0;top:-2px}&::after{left:-2px}&::before{right:-2px}\n"])));
exports.Swiss = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSwiss, tslib_1.__assign({}, props, { ref: ref, "icon-role": "swiss" }))));
});
var templateObject_1;
//# sourceMappingURL=Swiss.js.map