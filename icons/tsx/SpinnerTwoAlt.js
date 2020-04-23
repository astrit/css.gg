"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSpinnerTwoAlt = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  @keyframes spinner-two-alt{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}&,&::before{box-sizing:border-box;display:block;width:20px;height:20px}&{transform:scale(var(--ggs,1));position:relative}&::before{content:\"\";position:absolute;border-radius:100px;animation:spinner-two-alt 1s cubic-bezier(.6,0,.4,1) infinite;border:3px solid transparent;border-bottom-color:currentColor;border-top-color:currentColor}\n"], ["\n  @keyframes spinner-two-alt{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}&,&::before{box-sizing:border-box;display:block;width:20px;height:20px}&{transform:scale(var(--ggs,1));position:relative}&::before{content:\"\";position:absolute;border-radius:100px;animation:spinner-two-alt 1s cubic-bezier(.6,0,.4,1) infinite;border:3px solid transparent;border-bottom-color:currentColor;border-top-color:currentColor}\n"])));
exports.SpinnerTwoAlt = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSpinnerTwoAlt, tslib_1.__assign({}, props, { ref: ref, "icon-role": "spinner-two-alt" }))));
});
var templateObject_1;
//# sourceMappingURL=SpinnerTwoAlt.js.map