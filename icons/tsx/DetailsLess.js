"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDetailsLess = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:14px;border:2px solid transparent}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:2px;border-radius:3px;background:currentColor}&::before{top:2px;width:16px}&::after{width:10px;bottom:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:14px;border:2px solid transparent}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:2px;border-radius:3px;background:currentColor}&::before{top:2px;width:16px}&::after{width:10px;bottom:2px}\n"])));
exports.DetailsLess = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDetailsLess, tslib_1.__assign({}, props, { ref: ref, "icon-role": "details-less" }))));
});
var templateObject_1;
//# sourceMappingURL=DetailsLess.js.map