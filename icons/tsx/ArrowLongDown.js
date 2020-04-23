"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledArrowLongDown = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-right:2px solid transparent;border-left:2px solid transparent;box-shadow:inset 0 0 0 2px;height:24px;width:6px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);bottom:0;left:-2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-right:2px solid transparent;border-left:2px solid transparent;box-shadow:inset 0 0 0 2px;height:24px;width:6px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);bottom:0;left:-2px}\n"])));
exports.ArrowLongDown = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledArrowLongDown, tslib_1.__assign({}, props, { ref: ref, "icon-role": "arrow-long-down" }))));
});
var templateObject_1;
//# sourceMappingURL=ArrowLongDown.js.map