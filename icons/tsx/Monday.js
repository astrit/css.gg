"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMonday = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:21px;height:16px}&::after,&::before{background:currentColor;content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;border-radius:22px}&::before{height:16px;transform:rotate(35deg);box-shadow:7px -5px 0 0}&::after{height:6px;bottom:1px;right:0}\n"], ["\n  &{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:21px;height:16px}&::after,&::before{background:currentColor;content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;border-radius:22px}&::before{height:16px;transform:rotate(35deg);box-shadow:7px -5px 0 0}&::after{height:6px;bottom:1px;right:0}\n"])));
exports.Monday = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMonday, tslib_1.__assign({}, props, { ref: ref, "icon-role": "monday" }))));
});
var templateObject_1;
//# sourceMappingURL=Monday.js.map