"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledExport = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:14px;border:2px solid;border-top:0;box-shadow:-6px -8px 0 -6px,6px -8px 0 -6px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:currentColor;width:2px;height:14px;right:6px;bottom:5px}&::after{width:6px;height:6px;border-left:2px solid;border-top:2px solid;right:4px;bottom:14px;transform:rotate(45deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:14px;border:2px solid;border-top:0;box-shadow:-6px -8px 0 -6px,6px -8px 0 -6px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:currentColor;width:2px;height:14px;right:6px;bottom:5px}&::after{width:6px;height:6px;border-left:2px solid;border-top:2px solid;right:4px;bottom:14px;transform:rotate(45deg)}\n"])));
exports.Export = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledExport, tslib_1.__assign({}, props, { ref: ref, "icon-role": "export" }))));
});
var templateObject_1;
//# sourceMappingURL=Export.js.map