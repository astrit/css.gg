"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCalendarDue = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:6px;background:currentColor}&::before{top:2px;width:10px;height:2px;left:2px}&::after{width:4px;height:4px;bottom:3px;left:5px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:6px;background:currentColor}&::before{top:2px;width:10px;height:2px;left:2px}&::after{width:4px;height:4px;bottom:3px;left:5px}\n"])));
exports.CalendarDue = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCalendarDue, tslib_1.__assign({}, props, { ref: ref, "icon-role": "calendar-due" }))));
});
var templateObject_1;
//# sourceMappingURL=CalendarDue.js.map