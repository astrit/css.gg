"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledYinyang = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(95deg) scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border-radius:10px;top:4px}&::before{border:2px solid;left:0}&::after{border:2px solid transparent;right:0;box-shadow:inset 0 0 0 4px,0 -3px 0 1px,-2px -4px 0 1px,-8px -5px 0 -1px,-11px -3px 0 -2px,-12px -1px 0 -3px,-6px -6px 0 -1px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(95deg) scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border-radius:10px;top:4px}&::before{border:2px solid;left:0}&::after{border:2px solid transparent;right:0;box-shadow:inset 0 0 0 4px,0 -3px 0 1px,-2px -4px 0 1px,-8px -5px 0 -1px,-11px -3px 0 -2px,-12px -1px 0 -3px,-6px -6px 0 -1px}\n"])));
exports.Yinyang = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledYinyang, tslib_1.__assign({}, props, { ref: ref, "icon-role": "yinyang" }))));
});
var templateObject_1;
//# sourceMappingURL=Yinyang.js.map