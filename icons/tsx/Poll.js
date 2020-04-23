"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPoll = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:3px solid transparent;border-top:6px solid transparent;box-shadow:0 0 0 2px,inset 2px 0 0;border-radius:1px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:10px;background:currentColor;top:-3px;left:4px}&::after{height:4px;top:3px;left:8px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:3px solid transparent;border-top:6px solid transparent;box-shadow:0 0 0 2px,inset 2px 0 0;border-radius:1px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:10px;background:currentColor;top:-3px;left:4px}&::after{height:4px;top:3px;left:8px}\n"])));
exports.Poll = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPoll, tslib_1.__assign({}, props, { ref: ref, "icon-role": "poll" }))));
});
var templateObject_1;
//# sourceMappingURL=Poll.js.map