"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSortAz = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;height:2px;border-radius:4px;background:currentColor}&{position:relative;transform:scale(var(--ggs,1));width:8px}&::after,&::before{content:\"\";position:absolute}&::before{width:12px;top:-4px;left:-2px}&::after{width:4px;top:4px;left:2px}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;height:2px;border-radius:4px;background:currentColor}&{position:relative;transform:scale(var(--ggs,1));width:8px}&::after,&::before{content:\"\";position:absolute}&::before{width:12px;top:-4px;left:-2px}&::after{width:4px;top:4px;left:2px}\n"])));
exports.SortAz = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSortAz, tslib_1.__assign({}, props, { ref: ref, "icon-role": "sort-az" }))));
});
var templateObject_1;
//# sourceMappingURL=SortAz.js.map