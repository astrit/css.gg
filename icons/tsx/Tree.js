"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTree = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:20px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:8px}&::before{width:10px;height:16px;border:2px solid}&::after{width:2px;height:12px;background:currentColor;left:4px;bottom:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:20px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:8px}&::before{width:10px;height:16px;border:2px solid}&::after{width:2px;height:12px;background:currentColor;left:4px;bottom:0}\n"])));
exports.Tree = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTree, tslib_1.__assign({}, props, { ref: ref, "icon-role": "tree" }))));
});
var templateObject_1;
//# sourceMappingURL=Tree.js.map