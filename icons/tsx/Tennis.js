"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTennis = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;border:2px solid;width:20px;height:20px;border-radius:20px}&{position:relative;transform:scale(var(--ggs,1));overflow:hidden}&::after,&::before{content:\"\";position:absolute}&::before{left:-11px;top:-11px}&::after{right:-11px;bottom:-11px}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;border:2px solid;width:20px;height:20px;border-radius:20px}&{position:relative;transform:scale(var(--ggs,1));overflow:hidden}&::after,&::before{content:\"\";position:absolute}&::before{left:-11px;top:-11px}&::after{right:-11px;bottom:-11px}\n"])));
exports.Tennis = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTennis, tslib_1.__assign({}, props, { ref: ref, "icon-role": "tennis" }))));
});
var templateObject_1;
//# sourceMappingURL=Tennis.js.map