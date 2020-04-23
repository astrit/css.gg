"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTerminal = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:20px;border:2px solid;border-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border-right:2px solid;border-bottom:2px solid;transform:rotate(-45deg);width:6px;height:6px;top:5px;left:3px}&::after{width:4px;height:2px;background:currentColor;top:10px;left:11px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:20px;border:2px solid;border-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border-right:2px solid;border-bottom:2px solid;transform:rotate(-45deg);width:6px;height:6px;top:5px;left:3px}&::after{width:4px;height:2px;background:currentColor;top:10px;left:11px}\n"])));
exports.Terminal = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTerminal, tslib_1.__assign({}, props, { ref: ref, "icon-role": "terminal" }))));
});
var templateObject_1;
//# sourceMappingURL=Terminal.js.map