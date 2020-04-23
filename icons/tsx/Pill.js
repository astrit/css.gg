"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPill = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after{display:block;box-sizing:border-box;width:12px}&{border-top-left-radius:140px;border-top-right-radius:140px;border:2px solid;transform:rotate(45deg) scale(var(--ggs,1));position:relative;height:14px}&::after{content:\"\";position:absolute;height:12px;background:currentColor;left:-2px;bottom:-12px;border-bottom-left-radius:140px;border-bottom-right-radius:140px}\n"], ["\n  &,&::after{display:block;box-sizing:border-box;width:12px}&{border-top-left-radius:140px;border-top-right-radius:140px;border:2px solid;transform:rotate(45deg) scale(var(--ggs,1));position:relative;height:14px}&::after{content:\"\";position:absolute;height:12px;background:currentColor;left:-2px;bottom:-12px;border-bottom-left-radius:140px;border-bottom-right-radius:140px}\n"])));
exports.Pill = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPill, tslib_1.__assign({}, props, { ref: ref, "icon-role": "pill" }))));
});
var templateObject_1;
//# sourceMappingURL=Pill.js.map