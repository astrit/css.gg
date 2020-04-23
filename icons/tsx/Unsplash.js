"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledUnsplash = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:15px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:16px;height:9px;border:5px solid;border-top:0;bottom:0}&::after{width:6px;height:4px;background:currentColor;top:0;left:5px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:15px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:16px;height:9px;border:5px solid;border-top:0;bottom:0}&::after{width:6px;height:4px;background:currentColor;top:0;left:5px}\n"])));
exports.Unsplash = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledUnsplash, tslib_1.__assign({}, props, { ref: ref, "icon-role": "unsplash" }))));
});
var templateObject_1;
//# sourceMappingURL=Unsplash.js.map