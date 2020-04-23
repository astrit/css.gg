"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCodeClimate = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:24px;height:16px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;width:12px;border-left:4px solid;border-top:4px solid;transform:rotate(45deg)}&::before{height:12px;left:2px;bottom:-2px}&::after{height:6px;right:0;bottom:6px}\n"], ["\n  &{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:24px;height:16px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;width:12px;border-left:4px solid;border-top:4px solid;transform:rotate(45deg)}&::before{height:12px;left:2px;bottom:-2px}&::after{height:6px;right:0;bottom:6px}\n"])));
exports.CodeClimate = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCodeClimate, tslib_1.__assign({}, props, { ref: ref, "icon-role": "code-climate" }))));
});
var templateObject_1;
//# sourceMappingURL=CodeClimate.js.map