"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledLayoutList = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:10px;height:2px;border-left:6px double;border-right:4px solid}&::after,&::before{content:\"\";position:absolute;left:-6px}&::after{bottom:4px}&::before{top:4px}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:10px;height:2px;border-left:6px double;border-right:4px solid}&::after,&::before{content:\"\";position:absolute;left:-6px}&::after{bottom:4px}&::before{top:4px}\n"])));
exports.LayoutList = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledLayoutList, tslib_1.__assign({}, props, { ref: ref, "icon-role": "layout-list" }))));
});
var templateObject_1;
//# sourceMappingURL=LayoutList.js.map