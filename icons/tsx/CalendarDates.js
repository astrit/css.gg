"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCalendarDates = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;height:2px;left:2px}&::before{background:currentColor;width:2px;box-shadow:4px 0 0,8px 0 0,0 4px 0,4px 4px 0,8px 4px 0;top:6px}&::after{width:10px;top:-4px;box-shadow:0 6px 0 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;height:2px;left:2px}&::before{background:currentColor;width:2px;box-shadow:4px 0 0,8px 0 0,0 4px 0,4px 4px 0,8px 4px 0;top:6px}&::after{width:10px;top:-4px;box-shadow:0 6px 0 0}\n"])));
exports.CalendarDates = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCalendarDates, tslib_1.__assign({}, props, { ref: ref, "icon-role": "calendar-dates" }))));
});
var templateObject_1;
//# sourceMappingURL=CalendarDates.js.map