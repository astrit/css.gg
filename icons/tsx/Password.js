"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPassword = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:30px;height:12px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:4px;background:currentColor}&::before{left:2px;top:2px;box-shadow:6px 0 0,12px 0 0;height:4px;border-radius:100%}&::after{height:2px;right:2px;bottom:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:30px;height:12px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:4px;background:currentColor}&::before{left:2px;top:2px;box-shadow:6px 0 0,12px 0 0;height:4px;border-radius:100%}&::after{height:2px;right:2px;bottom:2px}\n"])));
exports.Password = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPassword, tslib_1.__assign({}, props, { ref: ref, "icon-role": "password" }))));
});
var templateObject_1;
//# sourceMappingURL=Password.js.map