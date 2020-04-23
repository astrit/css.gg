"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledArrowLongUp = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after{display:block;box-sizing:border-box;width:6px}&{position:relative;transform:scale(var(--ggs,1));border-right:2px solid transparent;border-left:2px solid transparent;box-shadow:inset 0 0 0 2px;height:24px}&::after{content:\"\";position:absolute;height:6px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);top:0;left:-2px}\n"], ["\n  &,&::after{display:block;box-sizing:border-box;width:6px}&{position:relative;transform:scale(var(--ggs,1));border-right:2px solid transparent;border-left:2px solid transparent;box-shadow:inset 0 0 0 2px;height:24px}&::after{content:\"\";position:absolute;height:6px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);top:0;left:-2px}\n"])));
exports.ArrowLongUp = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledArrowLongUp, tslib_1.__assign({}, props, { ref: ref, "icon-role": "arrow-long-up" }))));
});
var templateObject_1;
//# sourceMappingURL=ArrowLongUp.js.map