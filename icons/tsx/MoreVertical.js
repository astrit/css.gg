"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMoreVertical = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:6px;height:6px;border:2px solid;border-radius:100%}&::after,&::before{content:\"\";position:absolute;top:6px;left:-2px}&::before{top:-10px}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:6px;height:6px;border:2px solid;border-radius:100%}&::after,&::before{content:\"\";position:absolute;top:6px;left:-2px}&::before{top:-10px}\n"])));
exports.MoreVertical = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMoreVertical, tslib_1.__assign({}, props, { ref: ref, "icon-role": "more-vertical" }))));
});
var templateObject_1;
//# sourceMappingURL=MoreVertical.js.map