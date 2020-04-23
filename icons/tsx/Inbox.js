"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledInbox = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;box-shadow:inset 0 -2px 0 0;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;background:currentColor;height:7px;width:7px;border-radius:2px;bottom:-2px}&::before{left:-2px}&::after{right:-2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;box-shadow:inset 0 -2px 0 0;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;background:currentColor;height:7px;width:7px;border-radius:2px;bottom:-2px}&::before{left:-2px}&::after{right:-2px}\n"])));
exports.Inbox = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledInbox, tslib_1.__assign({}, props, { ref: ref, "icon-role": "inbox" }))));
});
var templateObject_1;
//# sourceMappingURL=Inbox.js.map