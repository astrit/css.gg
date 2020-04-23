"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCalendar = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::before{display:block;box-sizing:border-box}&{position:relative;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-top:4px solid;border-radius:3px}&::before{content:\"\";position:absolute;width:10px;border-radius:3px;left:2px;background:currentColor;height:2px;top:2px}\n"], ["\n  &,&::before{display:block;box-sizing:border-box}&{position:relative;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-top:4px solid;border-radius:3px}&::before{content:\"\";position:absolute;width:10px;border-radius:3px;left:2px;background:currentColor;height:2px;top:2px}\n"])));
exports.Calendar = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCalendar, tslib_1.__assign({}, props, { ref: ref, "icon-role": "calendar" }))));
});
var templateObject_1;
//# sourceMappingURL=Calendar.js.map