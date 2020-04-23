"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFormatUnderline = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;border:2px solid;border-top:0;border-bottom-left-radius:100px;border-bottom-right-radius:100px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:12px;height:2px;background:currentColor;left:-2px;bottom:-6px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;border:2px solid;border-top:0;border-bottom-left-radius:100px;border-bottom-right-radius:100px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:12px;height:2px;background:currentColor;left:-2px;bottom:-6px}\n"])));
exports.FormatUnderline = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFormatUnderline, tslib_1.__assign({}, props, { ref: ref, "icon-role": "format-underline" }))));
});
var templateObject_1;
//# sourceMappingURL=FormatUnderline.js.map