"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSpaceBetween = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:8px;border-left:6px solid transparent;border-right:6px solid transparent;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:12px;width:4px;border:2px solid;top:-2px}&::before{left:-6px;border-left:0}&::after{right:-6px;border-right:0}\n"], ["\n  &{display:block;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:8px;border-left:6px solid transparent;border-right:6px solid transparent;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:12px;width:4px;border:2px solid;top:-2px}&::before{left:-6px;border-left:0}&::after{right:-6px;border-right:0}\n"])));
exports.SpaceBetween = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSpaceBetween, tslib_1.__assign({}, props, { ref: ref, "icon-role": "space-between" }))));
});
var templateObject_1;
//# sourceMappingURL=SpaceBetween.js.map