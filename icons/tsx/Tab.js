"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTab = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::before{display:block;box-sizing:border-box}&{position:relative;transform:scale(var(--ggs,1));width:20px;height:16px;border:2px solid;border-radius:3px}&::before{content:\"\";position:absolute;width:10px;height:6px;background:currentColor;border-radius:1px;transform:skewX(20deg);top:-2px;right:-1px}\n"], ["\n  &,&::before{display:block;box-sizing:border-box}&{position:relative;transform:scale(var(--ggs,1));width:20px;height:16px;border:2px solid;border-radius:3px}&::before{content:\"\";position:absolute;width:10px;height:6px;background:currentColor;border-radius:1px;transform:skewX(20deg);top:-2px;right:-1px}\n"])));
exports.Tab = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTab, tslib_1.__assign({}, props, { ref: ref, "icon-role": "tab" }))));
});
var templateObject_1;
//# sourceMappingURL=Tab.js.map