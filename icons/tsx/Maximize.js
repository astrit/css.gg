"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMaximize = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;box-shadow:-6px -6px 0 -4px,6px 6px 0 -4px,6px -6px 0 -4px,-6px 6px 0 -4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;box-shadow:-6px -6px 0 -4px,6px 6px 0 -4px,6px -6px 0 -4px,-6px 6px 0 -4px}\n"])));
exports.Maximize = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMaximize, tslib_1.__assign({}, props, { ref: ref, "icon-role": "maximize" }))));
});
var templateObject_1;
//# sourceMappingURL=Maximize.js.map