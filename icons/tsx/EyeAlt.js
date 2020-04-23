"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledEyeAlt = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:18px;border-bottom-right-radius:100px;border-bottom-left-radius:100px;overflow:hidden;box-sizing:border-box}&::after,&::before{content:\"\";display:block;border-radius:100px;position:absolute;box-sizing:border-box}&::after{top:2px;box-shadow:inset 0 -8px 0 2px,inset 0 0 0 2px;width:24px;height:24px}&::before{width:8px;height:8px;border:2px solid transparent;box-shadow:inset 0 0 0 6px,0 0 0 4px,6px 0 0 0,-6px 0 0 0 ;bottom:4px;left:8px}\n"], ["\n  &{position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:18px;border-bottom-right-radius:100px;border-bottom-left-radius:100px;overflow:hidden;box-sizing:border-box}&::after,&::before{content:\"\";display:block;border-radius:100px;position:absolute;box-sizing:border-box}&::after{top:2px;box-shadow:inset 0 -8px 0 2px,inset 0 0 0 2px;width:24px;height:24px}&::before{width:8px;height:8px;border:2px solid transparent;box-shadow:inset 0 0 0 6px,0 0 0 4px,6px 0 0 0,-6px 0 0 0 ;bottom:4px;left:8px}\n"])));
exports.EyeAlt = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledEyeAlt, tslib_1.__assign({}, props, { ref: ref, "icon-role": "eye-alt" }))));
});
var templateObject_1;
//# sourceMappingURL=EyeAlt.js.map