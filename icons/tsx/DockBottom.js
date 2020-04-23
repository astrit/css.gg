"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDockBottom = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;transform:scale(var(--ggs,1));position:relative;box-sizing:border-box;width:20px;height:16px;border:2px solid;border-bottom-width:6px}\n"], ["\n  &{display:block;transform:scale(var(--ggs,1));position:relative;box-sizing:border-box;width:20px;height:16px;border:2px solid;border-bottom-width:6px}\n"])));
exports.DockBottom = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDockBottom, tslib_1.__assign({}, props, { ref: ref, "icon-role": "dock-bottom" }))));
});
var templateObject_1;
//# sourceMappingURL=DockBottom.js.map