"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSpinnerAlt = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  @keyframes spinneralt{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}&{transform:scale(var(--ggs,1))}&,&::before{box-sizing:border-box;position:relative;display:block;width:20px;height:20px}&::before{content:\"\";position:absolute;border-radius:100px;animation:spinneralt 1s cubic-bezier(.6,0,.4,1) infinite;border:3px solid transparent;border-top-color:currentColor}\n"], ["\n  @keyframes spinneralt{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}&{transform:scale(var(--ggs,1))}&,&::before{box-sizing:border-box;position:relative;display:block;width:20px;height:20px}&::before{content:\"\";position:absolute;border-radius:100px;animation:spinneralt 1s cubic-bezier(.6,0,.4,1) infinite;border:3px solid transparent;border-top-color:currentColor}\n"])));
exports.SpinnerAlt = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSpinnerAlt, tslib_1.__assign({}, props, { ref: ref, "icon-role": "spinner-alt" }))));
});
var templateObject_1;
//# sourceMappingURL=SpinnerAlt.js.map