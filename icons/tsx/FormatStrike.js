"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFormatStrike = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:3px;border-left:4px solid transparent;border-right:4px solid transparent;box-shadow:0 -2px 0 0,inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:14px;height:2px;background:currentColor;left:-6px;top:4px}&::after{width:2px;height:4px;left:0;top:7px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:3px;border-left:4px solid transparent;border-right:4px solid transparent;box-shadow:0 -2px 0 0,inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:14px;height:2px;background:currentColor;left:-6px;top:4px}&::after{width:2px;height:4px;left:0;top:7px}\n"])));
exports.FormatStrike = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFormatStrike, tslib_1.__assign({}, props, { ref: ref, "icon-role": "format-strike" }))));
});
var templateObject_1;
//# sourceMappingURL=FormatStrike.js.map