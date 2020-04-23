"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDrop = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:16px;height:16px;border-radius:0 100% 100% 100%;box-shadow:inset 0 0 0 2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:16px;height:16px;border-radius:0 100% 100% 100%;box-shadow:inset 0 0 0 2px}\n"])));
exports.Drop = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDrop, tslib_1.__assign({}, props, { ref: ref, "icon-role": "drop" }))));
});
var templateObject_1;
//# sourceMappingURL=Drop.js.map