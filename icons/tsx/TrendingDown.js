"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTrendingDown = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:10px;height:8px;border-bottom:2px solid;border-right:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:currentColor;left:8px;width:10px;height:2px;top:0}&::after{width:0;height:0;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:6px solid;top:-3px;right:-14px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:10px;height:8px;border-bottom:2px solid;border-right:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:currentColor;left:8px;width:10px;height:2px;top:0}&::after{width:0;height:0;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:6px solid;top:-3px;right:-14px}\n"])));
exports.TrendingDown = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTrendingDown, tslib_1.__assign({}, props, { ref: ref, "icon-role": "trending-down" }))));
});
var templateObject_1;
//# sourceMappingURL=TrendingDown.js.map