"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledLayoutGrid = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:10px;height:10px}&::after,&::before{content:\"\";position:absolute;height:4px;border-left:4px solid;border-right:4px solid}&::before{top:0}&::after{bottom:0}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:10px;height:10px}&::after,&::before{content:\"\";position:absolute;height:4px;border-left:4px solid;border-right:4px solid}&::before{top:0}&::after{bottom:0}\n"])));
exports.LayoutGrid = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledLayoutGrid, tslib_1.__assign({}, props, { ref: ref, "icon-role": "layout-grid" }))));
});
var templateObject_1;
//# sourceMappingURL=LayoutGrid.js.map