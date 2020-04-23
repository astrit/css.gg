"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFormatRight = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::before{display:block;box-sizing:border-box;height:2px;background:currentColor;border-radius:3px;box-shadow:0 8px 0}&{margin-top:-11px;position:relative;transform:scale(var(--ggs,1));width:16px}&::before{content:\"\";position:absolute;width:10px;top:4px;left:6px}\n"], ["\n  &,&::before{display:block;box-sizing:border-box;height:2px;background:currentColor;border-radius:3px;box-shadow:0 8px 0}&{margin-top:-11px;position:relative;transform:scale(var(--ggs,1));width:16px}&::before{content:\"\";position:absolute;width:10px;top:4px;left:6px}\n"])));
exports.FormatRight = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFormatRight, tslib_1.__assign({}, props, { ref: ref, "icon-role": "format-right" }))));
});
var templateObject_1;
//# sourceMappingURL=FormatRight.js.map