"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledArrowUpR = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;top:4px}&::after{width:6px;height:6px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);left:6px}&::before{width:2px;height:10px;left:8px;background:currentColor}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;top:4px}&::after{width:6px;height:6px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);left:6px}&::before{width:2px;height:10px;left:8px;background:currentColor}\n"])));
exports.ArrowUpR = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledArrowUpR, tslib_1.__assign({}, props, { ref: ref, "icon-role": "arrow-up-r" }))));
});
var templateObject_1;
//# sourceMappingURL=ArrowUpR.js.map