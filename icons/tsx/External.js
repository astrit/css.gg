"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledExternal = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;box-shadow:-2px 2px 0 0,-4px -4px 0 -2px,4px 4px 0 -2px;margin-left:-2px;margin-top:1px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;right:-4px}&::before{background:currentColor;transform:rotate(-45deg);width:12px;height:2px;top:1px}&::after{width:8px;height:8px;border-right:2px solid;border-top:2px solid;top:-4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;box-shadow:-2px 2px 0 0,-4px -4px 0 -2px,4px 4px 0 -2px;margin-left:-2px;margin-top:1px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;right:-4px}&::before{background:currentColor;transform:rotate(-45deg);width:12px;height:2px;top:1px}&::after{width:8px;height:8px;border-right:2px solid;border-top:2px solid;top:-4px}\n"])));
exports.External = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledExternal, tslib_1.__assign({}, props, { ref: ref, "icon-role": "external" }))));
});
var templateObject_1;
//# sourceMappingURL=External.js.map