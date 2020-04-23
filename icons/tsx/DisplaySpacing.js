"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDisplaySpacing = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));height:14px;width:14px;box-shadow:inset 0 0 0 2px,2px 0 0 0,-2px 0 0 0;border-left:2px solid transparent;border-right:2px solid transparent}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));height:14px;width:14px;box-shadow:inset 0 0 0 2px,2px 0 0 0,-2px 0 0 0;border-left:2px solid transparent;border-right:2px solid transparent}\n"])));
exports.DisplaySpacing = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDisplaySpacing, tslib_1.__assign({}, props, { ref: ref, "icon-role": "display-spacing" }))));
});
var templateObject_1;
//# sourceMappingURL=DisplaySpacing.js.map