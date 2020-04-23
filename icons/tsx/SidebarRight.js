"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSidebarRight = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:16px;border-right:2px solid}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:14px;height:16px;border:2px solid;top:0;right:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:16px;border-right:2px solid}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:14px;height:16px;border:2px solid;top:0;right:2px}\n"])));
exports.SidebarRight = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSidebarRight, tslib_1.__assign({}, props, { ref: ref, "icon-role": "sidebar-right" }))));
});
var templateObject_1;
//# sourceMappingURL=SidebarRight.js.map