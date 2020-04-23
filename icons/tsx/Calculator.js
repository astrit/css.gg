"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCalculator = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:22px;border:2px solid;border-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;top:2px;left:2px}&::after{width:2px;box-shadow:4px 0 0,8px 0 0,0 4px 0,4px 4px 0,8px 4px 0,0 8px 0,4px 8px 0,8px 8px 0,8px 6px 0;top:6px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:22px;border:2px solid;border-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;top:2px;left:2px}&::after{width:2px;box-shadow:4px 0 0,8px 0 0,0 4px 0,4px 4px 0,8px 4px 0,0 8px 0,4px 8px 0,8px 8px 0,8px 6px 0;top:6px}\n"])));
exports.Calculator = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCalculator, tslib_1.__assign({}, props, { ref: ref, "icon-role": "calculator" }))));
});
var templateObject_1;
//# sourceMappingURL=Calculator.js.map