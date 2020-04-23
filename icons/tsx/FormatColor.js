"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFormatColor = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:9px;height:2px;background:currentColor;transform:scale(var(--ggs,1));border-radius:3px;box-shadow:-2px 8px 0 0,2px 8px 0 0}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:14px;background:currentColor;top:-8px}&::before{transform:rotate(25deg);left:1px}&::after{transform:rotate(-25deg);right:1px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:9px;height:2px;background:currentColor;transform:scale(var(--ggs,1));border-radius:3px;box-shadow:-2px 8px 0 0,2px 8px 0 0}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:14px;background:currentColor;top:-8px}&::before{transform:rotate(25deg);left:1px}&::after{transform:rotate(-25deg);right:1px}\n"])));
exports.FormatColor = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFormatColor, tslib_1.__assign({}, props, { ref: ref, "icon-role": "format-color" }))));
});
var templateObject_1;
//# sourceMappingURL=FormatColor.js.map