"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledChevronDoubleLeft = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border-left:2px solid;border-bottom:2px solid;transform:rotate(45deg);top:7px;left:6px}&::after{left:11px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border-left:2px solid;border-bottom:2px solid;transform:rotate(45deg);top:7px;left:6px}&::after{left:11px}\n"])));
exports.ChevronDoubleLeft = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledChevronDoubleLeft, tslib_1.__assign({}, props, { ref: ref, "icon-role": "chevron-double-left" }))));
});
var templateObject_1;
//# sourceMappingURL=ChevronDoubleLeft.js.map