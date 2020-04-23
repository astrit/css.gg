"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledShapeZigzag = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;width:5px;height:7px;border-left:2px solid;border-bottom:2px solid}&{margin-left:-18px;transform:rotate(-49deg) scale(var(--ggs,1));position:relative}&::after,&::before{content:\"\";position:absolute;left:2px;top:5px}&::before{left:7px;top:10px}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;width:5px;height:7px;border-left:2px solid;border-bottom:2px solid}&{margin-left:-18px;transform:rotate(-49deg) scale(var(--ggs,1));position:relative}&::after,&::before{content:\"\";position:absolute;left:2px;top:5px}&::before{left:7px;top:10px}\n"])));
exports.ShapeZigzag = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledShapeZigzag, tslib_1.__assign({}, props, { ref: ref, "icon-role": "shape-zigzag" }))));
});
var templateObject_1;
//# sourceMappingURL=ShapeZigzag.js.map