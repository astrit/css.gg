"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledRead = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;border:2px solid}&{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-color:transparent;margin-left:-1px;position:relative;transform:scale(var(--ggs,1));width:6px;height:5px;border-radius:50px}&::after,&::before{content:\"\";position:absolute;width:10px;height:10px;border-radius:10px;left:-10px;top:-5px;box-shadow:-6px 0 0 -4px currentColor}&::after{left:2px;box-shadow:6px 0 0 -4px currentColor}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;border:2px solid}&{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-color:transparent;margin-left:-1px;position:relative;transform:scale(var(--ggs,1));width:6px;height:5px;border-radius:50px}&::after,&::before{content:\"\";position:absolute;width:10px;height:10px;border-radius:10px;left:-10px;top:-5px;box-shadow:-6px 0 0 -4px currentColor}&::after{left:2px;box-shadow:6px 0 0 -4px currentColor}\n"])));
exports.Read = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledRead, tslib_1.__assign({}, props, { ref: ref, "icon-role": "read" }))));
});
var templateObject_1;
//# sourceMappingURL=Read.js.map