"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledShapeRhombus = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:14px;height:14px;border:3px solid}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:14px;height:14px;border:3px solid}\n"])));
exports.ShapeRhombus = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledShapeRhombus, tslib_1.__assign({}, props, { ref: ref, "icon-role": "shape-rhombus" }))));
});
var templateObject_1;
//# sourceMappingURL=ShapeRhombus.js.map