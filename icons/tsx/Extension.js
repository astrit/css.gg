"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledExtension = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{box-sizing:border-box;display:block;border:2px solid}&{position:relative;transform:translateX(-10px) scale(var(--ggs,1));width:8px;height:14px}&::after,&::before{content:\"\";position:absolute;height:8px}&::before{bottom:-2px;left:-2px;width:14px}&::after{top:-6px;right:-12px;width:8px}\n"], ["\n  &,&::after,&::before{box-sizing:border-box;display:block;border:2px solid}&{position:relative;transform:translateX(-10px) scale(var(--ggs,1));width:8px;height:14px}&::after,&::before{content:\"\";position:absolute;height:8px}&::before{bottom:-2px;left:-2px;width:14px}&::after{top:-6px;right:-12px;width:8px}\n"])));
exports.Extension = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledExtension, tslib_1.__assign({}, props, { ref: ref, "icon-role": "extension" }))));
});
var templateObject_1;
//# sourceMappingURL=Extension.js.map