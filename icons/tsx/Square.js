"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSquare = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;border-radius:1px;border:3px solid transparent;box-shadow:0 0 0 3px,inset 0 0 0 3px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;border-radius:1px;border:3px solid transparent;box-shadow:0 0 0 3px,inset 0 0 0 3px}\n"])));
exports.Square = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSquare, tslib_1.__assign({}, props, { ref: ref, "icon-role": "square" }))));
});
var templateObject_1;
//# sourceMappingURL=Square.js.map