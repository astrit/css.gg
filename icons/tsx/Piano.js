"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPiano = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:23px;height:18px;border:2px solid;border-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:10px;background:currentColor;box-shadow:5px 0 0,10px 0 0}&::before{top:-2px;width:3px;left:3px}&::after{width:1px;bottom:-2px;left:4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:23px;height:18px;border:2px solid;border-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:10px;background:currentColor;box-shadow:5px 0 0,10px 0 0}&::before{top:-2px;width:3px;left:3px}&::after{width:1px;bottom:-2px;left:4px}\n"])));
exports.Piano = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPiano, tslib_1.__assign({}, props, { ref: ref, "icon-role": "piano" }))));
});
var templateObject_1;
//# sourceMappingURL=Piano.js.map