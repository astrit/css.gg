"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMaximizeAlt = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;box-shadow:-6px -6px 0 -4px,6px 6px 0 -4px,6px -6px 0 -4px,-6px 6px 0 -4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:22px;height:2px;border-left:8px solid;border-right:8px solid;transform:rotate(-45deg);bottom:6px;left:-4px}&::before{transform:rotate(45deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;box-shadow:-6px -6px 0 -4px,6px 6px 0 -4px,6px -6px 0 -4px,-6px 6px 0 -4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:22px;height:2px;border-left:8px solid;border-right:8px solid;transform:rotate(-45deg);bottom:6px;left:-4px}&::before{transform:rotate(45deg)}\n"])));
exports.MaximizeAlt = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMaximizeAlt, tslib_1.__assign({}, props, { ref: ref, "icon-role": "maximize-alt" }))));
});
var templateObject_1;
//# sourceMappingURL=MaximizeAlt.js.map