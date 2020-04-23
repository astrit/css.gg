"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBox = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:20px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;height:2px;background:currentColor}&::before{left:6px;width:6px;top:8px}&::after{width:22px;left:-2px;top:4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:20px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;height:2px;background:currentColor}&::before{left:6px;width:6px;top:8px}&::after{width:22px;left:-2px;top:4px}\n"])));
exports.Box = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBox, tslib_1.__assign({}, props, { ref: ref, "icon-role": "box" }))));
});
var templateObject_1;
//# sourceMappingURL=Box.js.map