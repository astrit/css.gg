"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFormatItalic = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:skewX(-20deg) scale(var(--ggs,1));width:6px;height:12px;border-top:2px solid;border-bottom:2px solid}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:10px;width:2px;background:currentColor;left:2px;top:-2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:skewX(-20deg) scale(var(--ggs,1));width:6px;height:12px;border-top:2px solid;border-bottom:2px solid}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:10px;width:2px;background:currentColor;left:2px;top:-2px}\n"])));
exports.FormatItalic = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFormatItalic, tslib_1.__assign({}, props, { ref: ref, "icon-role": "format-italic" }))));
});
var templateObject_1;
//# sourceMappingURL=FormatItalic.js.map