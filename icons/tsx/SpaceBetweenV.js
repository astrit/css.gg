"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSpaceBetweenV = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;box-sizing:border-box;transform:scale(var(--ggs,1));width:8px;height:14px;border-top:6px solid transparent;border-bottom:6px solid transparent;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:12px;height:4px;border:2px solid;left:-2px}&::before{top:-6px;border-top:0}&::after{bottom:-6px;border-bottom:0}\n"], ["\n  &{display:block;box-sizing:border-box;transform:scale(var(--ggs,1));width:8px;height:14px;border-top:6px solid transparent;border-bottom:6px solid transparent;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:12px;height:4px;border:2px solid;left:-2px}&::before{top:-6px;border-top:0}&::after{bottom:-6px;border-bottom:0}\n"])));
exports.SpaceBetweenV = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSpaceBetweenV, tslib_1.__assign({}, props, { ref: ref, "icon-role": "space-between-v" }))));
});
var templateObject_1;
//# sourceMappingURL=SpaceBetweenV.js.map