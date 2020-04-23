"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSpinnerTwo = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  @keyframes spinner-two{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}&{transform:scale(var(--ggs,1));box-sizing:border-box;position:relative;display:block;width:20px;height:20px}&::after,&::before{box-sizing:border-box;display:block;width:20px;height:20px;content:\"\";position:absolute;border-radius:100px}&::before{animation:spinner-two 1s cubic-bezier(.6,0,.4,1) infinite;border:3px solid transparent;border-bottom-color:currentColor;border-top-color:currentColor}&::after{border:3px solid;opacity:.2}\n"], ["\n  @keyframes spinner-two{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}&{transform:scale(var(--ggs,1));box-sizing:border-box;position:relative;display:block;width:20px;height:20px}&::after,&::before{box-sizing:border-box;display:block;width:20px;height:20px;content:\"\";position:absolute;border-radius:100px}&::before{animation:spinner-two 1s cubic-bezier(.6,0,.4,1) infinite;border:3px solid transparent;border-bottom-color:currentColor;border-top-color:currentColor}&::after{border:3px solid;opacity:.2}\n"])));
exports.SpinnerTwo = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSpinnerTwo, tslib_1.__assign({}, props, { ref: ref, "icon-role": "spinner-two" }))));
});
var templateObject_1;
//# sourceMappingURL=SpinnerTwo.js.map