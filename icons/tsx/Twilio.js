"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTwilio = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:24px;height:24px;border-radius:22px;box-shadow:inset 0 0 0 3px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;background:currentColor;border-radius:6px;width:4px;height:4px;top:7px;box-shadow:0 6px 0}&::before{left:7px}&::after{right:7px}\n"], ["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:24px;height:24px;border-radius:22px;box-shadow:inset 0 0 0 3px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;background:currentColor;border-radius:6px;width:4px;height:4px;top:7px;box-shadow:0 6px 0}&::before{left:7px}&::after{right:7px}\n"])));
exports.Twilio = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTwilio, tslib_1.__assign({}, props, { ref: ref, "icon-role": "twilio" }))));
});
var templateObject_1;
//# sourceMappingURL=Twilio.js.map