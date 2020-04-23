"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledViewMonth = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:20px;height:14px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:14px;top:-2px;left:3px;background:currentColor;box-shadow:4px 0 0,8px 0 0}&::before{width:20px;height:2px;left:-2px;top:2px;box-shadow:0 4px 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:20px;height:14px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:14px;top:-2px;left:3px;background:currentColor;box-shadow:4px 0 0,8px 0 0}&::before{width:20px;height:2px;left:-2px;top:2px;box-shadow:0 4px 0}\n"])));
exports.ViewMonth = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledViewMonth, tslib_1.__assign({}, props, { ref: ref, "icon-role": "view-month" }))));
});
var templateObject_1;
//# sourceMappingURL=ViewMonth.js.map