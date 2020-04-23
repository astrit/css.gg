"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledArrowTopLeft = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:8px;height:8px;transform:scale(var(--ggs,1));border-top:2px solid;border-left:2px solid}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:14px;height:2px;background:currentColor;transform:rotate(45deg);top:3px;left:-3px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:8px;height:8px;transform:scale(var(--ggs,1));border-top:2px solid;border-left:2px solid}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:14px;height:2px;background:currentColor;transform:rotate(45deg);top:3px;left:-3px}\n"])));
exports.ArrowTopLeft = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledArrowTopLeft, tslib_1.__assign({}, props, { ref: ref, "icon-role": "arrow-top-left" }))));
});
var templateObject_1;
//# sourceMappingURL=ArrowTopLeft.js.map