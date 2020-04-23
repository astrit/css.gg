"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledArrowLongRight = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-top:2px solid transparent;border-bottom:2px solid transparent;box-shadow:inset 0 0 0 2px;width:24px;height:6px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-right:2px solid;transform:rotate(45deg);right:0;bottom:-2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-top:2px solid transparent;border-bottom:2px solid transparent;box-shadow:inset 0 0 0 2px;width:24px;height:6px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-right:2px solid;transform:rotate(45deg);right:0;bottom:-2px}\n"])));
exports.ArrowLongRight = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledArrowLongRight, tslib_1.__assign({}, props, { ref: ref, "icon-role": "arrow-long-right" }))));
});
var templateObject_1;
//# sourceMappingURL=ArrowLongRight.js.map