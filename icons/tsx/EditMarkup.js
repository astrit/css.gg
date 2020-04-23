"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledEditMarkup = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:22px;overflow:hidden;perspective:20px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box}&::before{width:0;height:6px;border-bottom:6px solid;border-left:3px solid transparent;border-right:3px solid transparent;bottom:9px;left:6px}&::after{width:10px;height:12px;border:2px solid;border-top:4px solid;border-bottom:0;bottom:0;left:4px;transform:rotateX(60deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:22px;overflow:hidden;perspective:20px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box}&::before{width:0;height:6px;border-bottom:6px solid;border-left:3px solid transparent;border-right:3px solid transparent;bottom:9px;left:6px}&::after{width:10px;height:12px;border:2px solid;border-top:4px solid;border-bottom:0;bottom:0;left:4px;transform:rotateX(60deg)}\n"])));
exports.EditMarkup = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledEditMarkup, tslib_1.__assign({}, props, { ref: ref, "icon-role": "edit-markup" }))));
});
var templateObject_1;
//# sourceMappingURL=EditMarkup.js.map