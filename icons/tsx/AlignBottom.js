"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledAlignBottom = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;height:12px;width:12px;border-bottom:2px solid;transform:scale(var(--ggs,1));margin-top:4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:4px;background:currentColor;bottom:2px}&::before{left:1px;height:12px}&::after{height:6px;right:1px;opacity:.5}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;height:12px;width:12px;border-bottom:2px solid;transform:scale(var(--ggs,1));margin-top:4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:4px;background:currentColor;bottom:2px}&::before{left:1px;height:12px}&::after{height:6px;right:1px;opacity:.5}\n"])));
exports.AlignBottom = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledAlignBottom, tslib_1.__assign({}, props, { ref: ref, "icon-role": "align-bottom" }))));
});
var templateObject_1;
//# sourceMappingURL=AlignBottom.js.map