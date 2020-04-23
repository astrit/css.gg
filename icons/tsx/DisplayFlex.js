"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDisplayFlex = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));height:14px;width:16px;border:2px solid transparent;box-shadow:0 0 0 2px,inset -2px 0 0 0,inset 2px 0 0 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));height:14px;width:16px;border:2px solid transparent;box-shadow:0 0 0 2px,inset -2px 0 0 0,inset 2px 0 0 0}\n"])));
exports.DisplayFlex = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDisplayFlex, tslib_1.__assign({}, props, { ref: ref, "icon-role": "display-flex" }))));
});
var templateObject_1;
//# sourceMappingURL=DisplayFlex.js.map