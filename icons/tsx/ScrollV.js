"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledScrollV = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;width:6px;height:6px}&{position:relative;transform:scale(var(--ggs,1));border:2px solid;border-radius:10px}&::after,&::before{content:\"\";position:absolute;transform:rotate(-45deg);left:-2px}&::after{border-bottom:2px solid;border-left:2px solid;bottom:-8px}&::before{border-top:2px solid;border-right:2px solid;top:-8px}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;width:6px;height:6px}&{position:relative;transform:scale(var(--ggs,1));border:2px solid;border-radius:10px}&::after,&::before{content:\"\";position:absolute;transform:rotate(-45deg);left:-2px}&::after{border-bottom:2px solid;border-left:2px solid;bottom:-8px}&::before{border-top:2px solid;border-right:2px solid;top:-8px}\n"])));
exports.ScrollV = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledScrollV, tslib_1.__assign({}, props, { ref: ref, "icon-role": "scroll-v" }))));
});
var templateObject_1;
//# sourceMappingURL=ScrollV.js.map