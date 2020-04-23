"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCalendarNext = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;border:2px solid transparent;border-bottom:4px solid transparent;border-right:4px solid transparent;border-left:3px solid transparent;box-shadow:0 0 0 2px,inset 0 -2px 0;border-radius:1px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:currentColor;border-radius:2px;top:0;left:-1px;width:10px;height:2px}&::after{width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:5px solid;bottom:-2px;right:-2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;border:2px solid transparent;border-bottom:4px solid transparent;border-right:4px solid transparent;border-left:3px solid transparent;box-shadow:0 0 0 2px,inset 0 -2px 0;border-radius:1px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:currentColor;border-radius:2px;top:0;left:-1px;width:10px;height:2px}&::after{width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:5px solid;bottom:-2px;right:-2px}\n"])));
exports.CalendarNext = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCalendarNext, tslib_1.__assign({}, props, { ref: ref, "icon-role": "calendar-next" }))));
});
var templateObject_1;
//# sourceMappingURL=CalendarNext.js.map