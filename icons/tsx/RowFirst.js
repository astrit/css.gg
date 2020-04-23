"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledRowFirst = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:10px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;height:2px;background:currentColor}&::before{width:10px;top:4px;opacity:.5;box-shadow:0 4px 0}&::after{width:14px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:10px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;height:2px;background:currentColor}&::before{width:10px;top:4px;opacity:.5;box-shadow:0 4px 0}&::after{width:14px}\n"])));
exports.RowFirst = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledRowFirst, tslib_1.__assign({}, props, { ref: ref, "icon-role": "row-first" }))));
});
var templateObject_1;
//# sourceMappingURL=RowFirst.js.map