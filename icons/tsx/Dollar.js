"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDollar = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:20px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:8px;border:2px solid}&::before{border-right:0;border-top-left-radius:100px;border-bottom-left-radius:100px;top:3px;left:-6px;box-shadow:4px -2px 0 -2px}&::after{border-left:0;border-top-right-radius:100px;border-bottom-right-radius:100px;bottom:3px;right:-6px;box-shadow:-4px 2px 0 -2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:20px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:8px;border:2px solid}&::before{border-right:0;border-top-left-radius:100px;border-bottom-left-radius:100px;top:3px;left:-6px;box-shadow:4px -2px 0 -2px}&::after{border-left:0;border-top-right-radius:100px;border-bottom-right-radius:100px;bottom:3px;right:-6px;box-shadow:-4px 2px 0 -2px}\n"])));
exports.Dollar = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDollar, tslib_1.__assign({}, props, { ref: ref, "icon-role": "dollar" }))));
});
var templateObject_1;
//# sourceMappingURL=Dollar.js.map