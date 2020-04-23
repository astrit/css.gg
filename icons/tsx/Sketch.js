"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSketch = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:22px;height:18px;background:linear-gradient(to left,currentColor 16px,transparent 0) no-repeat center 6px/6px 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:14px;border:2px solid;left:4px}&::before{height:14px;border-top-color:transparent;border-right-color:transparent;transform:rotate(-45deg)skew(-8deg,-8deg);bottom:4px}&::after{height:7px;border-bottom:0;transform:perspective(12px)rotateX(35deg)}\n"], ["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:22px;height:18px;background:linear-gradient(to left,currentColor 16px,transparent 0) no-repeat center 6px/6px 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:14px;border:2px solid;left:4px}&::before{height:14px;border-top-color:transparent;border-right-color:transparent;transform:rotate(-45deg)skew(-8deg,-8deg);bottom:4px}&::after{height:7px;border-bottom:0;transform:perspective(12px)rotateX(35deg)}\n"])));
exports.Sketch = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSketch, tslib_1.__assign({}, props, { ref: ref, "icon-role": "sketch" }))));
});
var templateObject_1;
//# sourceMappingURL=Sketch.js.map