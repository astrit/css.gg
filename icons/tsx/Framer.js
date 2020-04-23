"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFramer = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:20px;overflow:hidden}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;background:currentColor}&::before{width:20px;height:6px;transform:skewX(45deg);top:6px;left:-11px;box-shadow:20px -6px 0}&::after{width:6px;height:8px;transform:skewY(45deg);bottom:4px;border-top-left-radius:4px;opacity:.5}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:20px;overflow:hidden}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;background:currentColor}&::before{width:20px;height:6px;transform:skewX(45deg);top:6px;left:-11px;box-shadow:20px -6px 0}&::after{width:6px;height:8px;transform:skewY(45deg);bottom:4px;border-top-left-radius:4px;opacity:.5}\n"])));
exports.Framer = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFramer, tslib_1.__assign({}, props, { ref: ref, "icon-role": "framer" }))));
});
var templateObject_1;
//# sourceMappingURL=Framer.js.map