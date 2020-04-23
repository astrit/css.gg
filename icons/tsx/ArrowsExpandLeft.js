"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledArrowsExpandLeft = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;box-shadow:6px 6px 0 -4px,-6px -6px 0 -4px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:22px;top:-4px;left:6px;transform:rotate(-45deg);border-top:9px solid;border-bottom:9px solid}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;box-shadow:6px 6px 0 -4px,-6px -6px 0 -4px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:22px;top:-4px;left:6px;transform:rotate(-45deg);border-top:9px solid;border-bottom:9px solid}\n"])));
exports.ArrowsExpandLeft = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledArrowsExpandLeft, tslib_1.__assign({}, props, { ref: ref, "icon-role": "arrows-expand-left" }))));
});
var templateObject_1;
//# sourceMappingURL=ArrowsExpandLeft.js.map