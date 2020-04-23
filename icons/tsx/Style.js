"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledStyle = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;width:8px;height:8px}&{position:relative;transform:scale(var(--ggs,1));box-shadow:-3px 3px 0 -1px,3px -3px 0 -1px}&::after,&::before{content:\"\";position:absolute;border:2px solid}&::before{top:-5px;left:-5px}&::after{bottom:-5px;right:-5px}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;width:8px;height:8px}&{position:relative;transform:scale(var(--ggs,1));box-shadow:-3px 3px 0 -1px,3px -3px 0 -1px}&::after,&::before{content:\"\";position:absolute;border:2px solid}&::before{top:-5px;left:-5px}&::after{bottom:-5px;right:-5px}\n"])));
exports.Style = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledStyle, tslib_1.__assign({}, props, { ref: ref, "icon-role": "style" }))));
});
var templateObject_1;
//# sourceMappingURL=Style.js.map