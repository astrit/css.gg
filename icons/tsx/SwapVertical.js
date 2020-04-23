"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSwapVertical = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(90deg) scale(var(--ggs,1));box-shadow:-2px 2px 0,2px -2px 0;width:6px;height:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent}&::before{border-left:3px solid;top:-4px;right:-4px}&::after{border-right:3px solid;bottom:-4px;left:-4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(90deg) scale(var(--ggs,1));box-shadow:-2px 2px 0,2px -2px 0;width:6px;height:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent}&::before{border-left:3px solid;top:-4px;right:-4px}&::after{border-right:3px solid;bottom:-4px;left:-4px}\n"])));
exports.SwapVertical = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSwapVertical, tslib_1.__assign({}, props, { ref: ref, "icon-role": "swap-vertical" }))));
});
var templateObject_1;
//# sourceMappingURL=SwapVertical.js.map