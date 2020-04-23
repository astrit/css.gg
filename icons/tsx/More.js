"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMore = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:6px;height:6px;border:2px solid;border-radius:100%}&::after,&::before{content:\"\";position:absolute;top:-2px}&::after{left:-9px}&::before{right:-9px}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:6px;height:6px;border:2px solid;border-radius:100%}&::after,&::before{content:\"\";position:absolute;top:-2px}&::after{left:-9px}&::before{right:-9px}\n"])));
exports.More = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMore, tslib_1.__assign({}, props, { ref: ref, "icon-role": "more" }))));
});
var templateObject_1;
//# sourceMappingURL=More.js.map