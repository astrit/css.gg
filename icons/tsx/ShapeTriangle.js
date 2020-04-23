"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledShapeTriangle = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{position:relative;transform:scale(var(--ggs,1));width:22px;height:17px;border-left:3px solid transparent;border-bottom:3px solid}&,&::before{display:block;box-sizing:border-box;border-right:3px solid transparent}&::before{content:\"\";position:absolute;width:20px;height:20px;border-left:3px solid;border-top:3px solid;border-bottom:3px solid transparent;transform:rotate(45deg) skew(10deg,10deg);left:-2px;bottom:-13px}\n"], ["\n  &{position:relative;transform:scale(var(--ggs,1));width:22px;height:17px;border-left:3px solid transparent;border-bottom:3px solid}&,&::before{display:block;box-sizing:border-box;border-right:3px solid transparent}&::before{content:\"\";position:absolute;width:20px;height:20px;border-left:3px solid;border-top:3px solid;border-bottom:3px solid transparent;transform:rotate(45deg) skew(10deg,10deg);left:-2px;bottom:-13px}\n"])));
exports.ShapeTriangle = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledShapeTriangle, tslib_1.__assign({}, props, { ref: ref, "icon-role": "shape-triangle" }))));
});
var templateObject_1;
//# sourceMappingURL=ShapeTriangle.js.map