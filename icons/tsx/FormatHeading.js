"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFormatHeading = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:14px;border-left:2px solid;border-right:2px solid}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:12px;height:2px;background:currentColor;top:6px;left:-2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:14px;border-left:2px solid;border-right:2px solid}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:12px;height:2px;background:currentColor;top:6px;left:-2px}\n"])));
exports.FormatHeading = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFormatHeading, tslib_1.__assign({}, props, { ref: ref, "icon-role": "format-heading" }))));
});
var templateObject_1;
//# sourceMappingURL=FormatHeading.js.map