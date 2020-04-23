"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledShapeHexagon = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;width:18px;height:10px;border-left:3px solid currentColor;border-right:3px solid currentColor}&{position:relative;transform:scale(var(--ggs,1))}&::after,&::before{content:\"\";position:absolute;left:-3px}&::before{transform:rotate(60deg)}&::after{transform:rotate(-60deg)}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;width:18px;height:10px;border-left:3px solid currentColor;border-right:3px solid currentColor}&{position:relative;transform:scale(var(--ggs,1))}&::after,&::before{content:\"\";position:absolute;left:-3px}&::before{transform:rotate(60deg)}&::after{transform:rotate(-60deg)}\n"])));
exports.ShapeHexagon = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledShapeHexagon, tslib_1.__assign({}, props, { ref: ref, "icon-role": "shape-hexagon" }))));
});
var templateObject_1;
//# sourceMappingURL=ShapeHexagon.js.map