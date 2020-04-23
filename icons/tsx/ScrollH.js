"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledScrollH = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;width:6px;height:6px}&{position:relative;transform:scale(var(--ggs,1));border:2px solid;border-radius:10px}&::after,&::before{content:\"\";position:absolute;transform:rotate(45deg);top:-2px}&::after{border-top:2px solid;border-right:2px solid;right:-8px}&::before{border-bottom:2px solid;border-left:2px solid;left:-8px}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;width:6px;height:6px}&{position:relative;transform:scale(var(--ggs,1));border:2px solid;border-radius:10px}&::after,&::before{content:\"\";position:absolute;transform:rotate(45deg);top:-2px}&::after{border-top:2px solid;border-right:2px solid;right:-8px}&::before{border-bottom:2px solid;border-left:2px solid;left:-8px}\n"])));
exports.ScrollH = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledScrollH, tslib_1.__assign({}, props, { ref: ref, "icon-role": "scroll-h" }))));
});
var templateObject_1;
//# sourceMappingURL=ScrollH.js.map