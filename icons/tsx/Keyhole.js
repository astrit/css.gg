"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledKeyhole = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;border-radius:20px}&{position:relative;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid}&::after,&::before{content:\"\";position:absolute}&::before{width:6px;height:6px;border:2px solid;left:5px;top:3px}&::after{background:currentColor;width:2px;height:5px;left:7px;bottom:3px}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;border-radius:20px}&{position:relative;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid}&::after,&::before{content:\"\";position:absolute}&::before{width:6px;height:6px;border:2px solid;left:5px;top:3px}&::after{background:currentColor;width:2px;height:5px;left:7px;bottom:3px}\n"])));
exports.Keyhole = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledKeyhole, tslib_1.__assign({}, props, { ref: ref, "icon-role": "keyhole" }))));
});
var templateObject_1;
//# sourceMappingURL=Keyhole.js.map