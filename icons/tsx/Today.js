"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledToday = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:18px;height:22px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;left:2px;background:currentColor;border-radius:1px}&::before{bottom:2px;width:10px;height:10px;opacity:.5}&::after{top:2px;width:6px;height:2px}\n"], ["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:18px;height:22px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;left:2px;background:currentColor;border-radius:1px}&::before{bottom:2px;width:10px;height:10px;opacity:.5}&::after{top:2px;width:6px;height:2px}\n"])));
exports.Today = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledToday, tslib_1.__assign({}, props, { ref: ref, "icon-role": "today" }))));
});
var templateObject_1;
//# sourceMappingURL=Today.js.map