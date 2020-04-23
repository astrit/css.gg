"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledRing = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px}&::after,&::before{content:\"\";display:block;position:absolute;border:2px solid;box-sizing:border-box}&::before{border-top-right-radius:100px;transform:rotate(-45deg);width:8px;height:8px;left:6px;top:-1px}&::after{width:18px;height:18px;border-radius:100px;border-top-color:transparent;left:1px;top:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px}&::after,&::before{content:\"\";display:block;position:absolute;border:2px solid;box-sizing:border-box}&::before{border-top-right-radius:100px;transform:rotate(-45deg);width:8px;height:8px;left:6px;top:-1px}&::after{width:18px;height:18px;border-radius:100px;border-top-color:transparent;left:1px;top:2px}\n"])));
exports.Ring = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledRing, tslib_1.__assign({}, props, { ref: ref, "icon-role": "ring" }))));
});
var templateObject_1;
//# sourceMappingURL=Ring.js.map