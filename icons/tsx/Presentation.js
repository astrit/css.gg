"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPresentation = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:12px;height:6px;border:2px solid;border-top-left-radius:100px;border-top-right-radius:100px;top:2px;left:2px;border-bottom:0}&::after{width:18px;height:2px;background:currentColor;left:-1px;top:8px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:12px;height:6px;border:2px solid;border-top-left-radius:100px;border-top-right-radius:100px;top:2px;left:2px;border-bottom:0}&::after{width:18px;height:2px;background:currentColor;left:-1px;top:8px}\n"])));
exports.Presentation = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPresentation, tslib_1.__assign({}, props, { ref: ref, "icon-role": "presentation" }))));
});
var templateObject_1;
//# sourceMappingURL=Presentation.js.map