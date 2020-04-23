"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledAlignCenter = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;height:12px;width:12px;border-top:2px solid transparent;transform:scale(var(--ggs,1));margin-left:-4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:4px;background:currentColor}&::before{left:2px;width:12px;top:-2px}&::after{width:6px;right:1px;top:4px;opacity:.5}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;height:12px;width:12px;border-top:2px solid transparent;transform:scale(var(--ggs,1));margin-left:-4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:4px;background:currentColor}&::before{left:2px;width:12px;top:-2px}&::after{width:6px;right:1px;top:4px;opacity:.5}\n"])));
exports.AlignCenter = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledAlignCenter, tslib_1.__assign({}, props, { ref: ref, "icon-role": "align-center" }))));
});
var templateObject_1;
//# sourceMappingURL=AlignCenter.js.map