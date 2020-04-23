"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCalendarTwo = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:3px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:3px;top:2px;left:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:3px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:3px;top:2px;left:2px}\n"])));
exports.CalendarTwo = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCalendarTwo, tslib_1.__assign({}, props, { ref: ref, "icon-role": "calendar-two" }))));
});
var templateObject_1;
//# sourceMappingURL=CalendarTwo.js.map