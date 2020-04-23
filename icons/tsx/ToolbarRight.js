"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledToolbarRight = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:12px;box-shadow:0 0 0 2px,inset -2px 0 0;border:2px solid transparent;border-radius:1px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:12px;box-shadow:0 0 0 2px,inset -2px 0 0;border:2px solid transparent;border-radius:1px}\n"])));
exports.ToolbarRight = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledToolbarRight, tslib_1.__assign({}, props, { ref: ref, "icon-role": "toolbar-right" }))));
});
var templateObject_1;
//# sourceMappingURL=ToolbarRight.js.map