"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledClipboard = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:2px;width:10px;left:2px}&::before{border:2px solid;border-bottom-left-radius:3px;border-bottom-right-radius:3px;top:-2px;height:6px}&::after{height:2px;background:currentColor;box-shadow:0 -4px 0 0;bottom:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:2px;width:10px;left:2px}&::before{border:2px solid;border-bottom-left-radius:3px;border-bottom-right-radius:3px;top:-2px;height:6px}&::after{height:2px;background:currentColor;box-shadow:0 -4px 0 0;bottom:2px}\n"])));
exports.Clipboard = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledClipboard, tslib_1.__assign({}, props, { ref: ref, "icon-role": "clipboard" }))));
});
var templateObject_1;
//# sourceMappingURL=Clipboard.js.map