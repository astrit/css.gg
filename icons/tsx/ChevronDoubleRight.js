"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledChevronDoubleRight = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border-right:2px solid;border-top:2px solid;transform:rotate(45deg);top:7px;right:6px}&::after{right:11px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border-right:2px solid;border-top:2px solid;transform:rotate(45deg);top:7px;right:6px}&::after{right:11px}\n"])));
exports.ChevronDoubleRight = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledChevronDoubleRight, tslib_1.__assign({}, props, { ref: ref, "icon-role": "chevron-double-right" }))));
});
var templateObject_1;
//# sourceMappingURL=ChevronDoubleRight.js.map