"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledNotifications = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat right bottom/2px 8px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat left top/8px 2px}&::after,&::before{content:\"\";position:absolute;display:block;box-sizing:border-box}&::before{width:14px;height:14px;border-left:2px solid;border-bottom:2px solid}&::after{width:6px;height:6px;border-radius:4px;background:currentColor;top:-2px;right:-2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat right bottom/2px 8px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat left top/8px 2px}&::after,&::before{content:\"\";position:absolute;display:block;box-sizing:border-box}&::before{width:14px;height:14px;border-left:2px solid;border-bottom:2px solid}&::after{width:6px;height:6px;border-radius:4px;background:currentColor;top:-2px;right:-2px}\n"])));
exports.Notifications = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledNotifications, tslib_1.__assign({}, props, { ref: ref, "icon-role": "notifications" }))));
});
var templateObject_1;
//# sourceMappingURL=Notifications.js.map