"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledShapeHalfCircle = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:16px;border:3px solid;border-top-left-radius:100px;border-bottom-left-radius:100px;border-right:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:16px;border:3px solid;border-top-left-radius:100px;border-bottom-left-radius:100px;border-right:0}\n"])));
exports.ShapeHalfCircle = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledShapeHalfCircle, tslib_1.__assign({}, props, { ref: ref, "icon-role": "shape-half-circle" }))));
});
var templateObject_1;
//# sourceMappingURL=ShapeHalfCircle.js.map