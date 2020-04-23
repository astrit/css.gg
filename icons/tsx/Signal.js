"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSignal = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;width:2px;border-radius:4px;background:currentColor}&{position:relative;transform:scale(var(--ggs,1));height:8px}&::after,&::before{content:\"\";position:absolute}&::before{height:12px;left:4px;bottom:0}&::after{height:4px;left:-4px;bottom:0}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;width:2px;border-radius:4px;background:currentColor}&{position:relative;transform:scale(var(--ggs,1));height:8px}&::after,&::before{content:\"\";position:absolute}&::before{height:12px;left:4px;bottom:0}&::after{height:4px;left:-4px;bottom:0}\n"])));
exports.Signal = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSignal, tslib_1.__assign({}, props, { ref: ref, "icon-role": "signal" }))));
});
var templateObject_1;
//# sourceMappingURL=Signal.js.map