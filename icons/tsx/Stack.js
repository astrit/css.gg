"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledStack = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;width:14px;height:14px;border:2px solid}&{margin-right:8px;margin-top:8px;transform:scale(var(--ggs,1));position:relative}&::after,&::before{content:\"\";position:absolute;border-left:0;border-bottom:0;right:-5px;top:-5px}&::before{right:-8px;top:-8px}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;width:14px;height:14px;border:2px solid}&{margin-right:8px;margin-top:8px;transform:scale(var(--ggs,1));position:relative}&::after,&::before{content:\"\";position:absolute;border-left:0;border-bottom:0;right:-5px;top:-5px}&::before{right:-8px;top:-8px}\n"])));
exports.Stack = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledStack, tslib_1.__assign({}, props, { ref: ref, "icon-role": "stack" }))));
});
var templateObject_1;
//# sourceMappingURL=Stack.js.map