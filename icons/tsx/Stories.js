"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledStories = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;border-radius:3px}&{position:relative;transform:scale(var(--ggs,1));width:12px;height:16px;border:2px solid}&::after,&::before{content:\"\";position:absolute;background:currentColor;width:2px;height:14px;top:-1px}&::before{left:-6px}&::after{right:-6px}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;border-radius:3px}&{position:relative;transform:scale(var(--ggs,1));width:12px;height:16px;border:2px solid}&::after,&::before{content:\"\";position:absolute;background:currentColor;width:2px;height:14px;top:-1px}&::before{left:-6px}&::after{right:-6px}\n"])));
exports.Stories = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledStories, tslib_1.__assign({}, props, { ref: ref, "icon-role": "stories" }))));
});
var templateObject_1;
//# sourceMappingURL=Stories.js.map