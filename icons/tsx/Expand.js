"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledExpand = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:6px;border-bottom:2px solid;border-left:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;}&::after{background:currentColor;bottom:4px;transform:rotate(-44deg);width:14px;height:2px;left:-2px}&::before{width:6px;height:6px;border-top:2px solid;border-right:2px solid;left:5px;top:-7px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:6px;border-bottom:2px solid;border-left:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;}&::after{background:currentColor;bottom:4px;transform:rotate(-44deg);width:14px;height:2px;left:-2px}&::before{width:6px;height:6px;border-top:2px solid;border-right:2px solid;left:5px;top:-7px}\n"])));
exports.Expand = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledExpand, tslib_1.__assign({}, props, { ref: ref, "icon-role": "expand" }))));
});
var templateObject_1;
//# sourceMappingURL=Expand.js.map