"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFormatUppercase = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:8px;height:8px;border-left:3px solid transparent;border-right:3px solid transparent;box-shadow:0 -2px 0 0,inset 0 0 0 2px}&::after{content:\"\";position:absolute;width:6px;height:4px;border-left:2px solid transparent;border-right:2px solid transparent;bottom:0;right:-8px}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:8px;height:8px;border-left:3px solid transparent;border-right:3px solid transparent;box-shadow:0 -2px 0 0,inset 0 0 0 2px}&::after{content:\"\";position:absolute;width:6px;height:4px;border-left:2px solid transparent;border-right:2px solid transparent;bottom:0;right:-8px}\n"])));
exports.FormatUppercase = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFormatUppercase, tslib_1.__assign({}, props, { ref: ref, "icon-role": "format-uppercase" }))));
});
var templateObject_1;
//# sourceMappingURL=FormatUppercase.js.map