"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSidebar = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::before{display:block;box-sizing:border-box;height:16px}&{border-left:2px solid;position:relative;transform:scale(var(--ggs,1));width:18px}&::before{content:\"\";position:absolute;width:14px;border:2px solid;top:0;left:2px}\n"], ["\n  &,&::before{display:block;box-sizing:border-box;height:16px}&{border-left:2px solid;position:relative;transform:scale(var(--ggs,1));width:18px}&::before{content:\"\";position:absolute;width:14px;border:2px solid;top:0;left:2px}\n"])));
exports.Sidebar = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSidebar, tslib_1.__assign({}, props, { ref: ref, "icon-role": "sidebar" }))));
});
var templateObject_1;
//# sourceMappingURL=Sidebar.js.map