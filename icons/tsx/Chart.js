"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledChart = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px;border-bottom:2px solid;border-left:2px solid}&::after,&::before{content:\"\";display:block;position:absolute;border:2px solid;box-sizing:border-box}&::before{border-top-right-radius:100px;right:-2px;top:-2px;width:8px;height:8px}&::after{width:18px;height:18px;border-radius:100px;border-right-color:transparent;left:-10px;transform:rotate(-45deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px;border-bottom:2px solid;border-left:2px solid}&::after,&::before{content:\"\";display:block;position:absolute;border:2px solid;box-sizing:border-box}&::before{border-top-right-radius:100px;right:-2px;top:-2px;width:8px;height:8px}&::after{width:18px;height:18px;border-radius:100px;border-right-color:transparent;left:-10px;transform:rotate(-45deg)}\n"])));
exports.Chart = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledChart, tslib_1.__assign({}, props, { ref: ref, "icon-role": "chart" }))));
});
var templateObject_1;
//# sourceMappingURL=Chart.js.map