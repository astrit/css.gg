"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDockWindow = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;transform:scale(var(--ggs,1));position:relative;box-sizing:border-box;width:20px;height:16px;border:2px solid;border-left-width:4px;border-bottom-width:4px}\n"], ["\n  &{display:block;transform:scale(var(--ggs,1));position:relative;box-sizing:border-box;width:20px;height:16px;border:2px solid;border-left-width:4px;border-bottom-width:4px}\n"])));
exports.DockWindow = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDockWindow, tslib_1.__assign({}, props, { ref: ref, "icon-role": "dock-window" }))));
});
var templateObject_1;
//# sourceMappingURL=DockWindow.js.map