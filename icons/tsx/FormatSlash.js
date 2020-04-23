"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFormatSlash = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(25deg) scale(var(--ggs,1));width:2px;height:14px;background:currentColor;border-radius:3px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(25deg) scale(var(--ggs,1));width:2px;height:14px;background:currentColor;border-radius:3px}\n"])));
exports.FormatSlash = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFormatSlash, tslib_1.__assign({}, props, { ref: ref, "icon-role": "format-slash" }))));
});
var templateObject_1;
//# sourceMappingURL=FormatSlash.js.map