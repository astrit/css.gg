"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSpinner = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:20px;height:20px}&::after,&::before{content:\"\";position:absolute;border-radius:100px}&::before{animation:spinner 1s cubic-bezier(.6,0,.4,1) infinite;border:3px solid transparent;border-top-color:currentColor}&::after{border:3px solid;opacity:.2}@keyframes spinner{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:20px;height:20px}&::after,&::before{content:\"\";position:absolute;border-radius:100px}&::before{animation:spinner 1s cubic-bezier(.6,0,.4,1) infinite;border:3px solid transparent;border-top-color:currentColor}&::after{border:3px solid;opacity:.2}@keyframes spinner{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}\n"])));
exports.Spinner = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSpinner, tslib_1.__assign({}, props, { ref: ref, "icon-role": "spinner" }))));
});
var templateObject_1;
//# sourceMappingURL=Spinner.js.map