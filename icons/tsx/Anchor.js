"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledAnchor = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:14px;background:currentColor;border-radius:8px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:6px;border:2px solid}&::after{width:12px;border-bottom-left-radius:20px;border-bottom-right-radius:20px;border-top-color:transparent;left:-5px;bottom:2px}&::before{width:6px;border-radius:8px;top:-4px;left:-2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:14px;background:currentColor;border-radius:8px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:6px;border:2px solid}&::after{width:12px;border-bottom-left-radius:20px;border-bottom-right-radius:20px;border-top-color:transparent;left:-5px;bottom:2px}&::before{width:6px;border-radius:8px;top:-4px;left:-2px}\n"])));
exports.Anchor = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledAnchor, tslib_1.__assign({}, props, { ref: ref, "icon-role": "anchor" }))));
});
var templateObject_1;
//# sourceMappingURL=Anchor.js.map