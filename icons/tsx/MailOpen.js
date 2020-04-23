"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMailOpen = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after{display:block;box-sizing:border-box;height:14px;border:2px solid}&{border-top:0;transform:scale(var(--ggs,1));position:relative;width:18px;border-radius:2px}&::after{content:\"\";position:absolute;border-radius:3px;width:14px;transform:rotate(-45deg);bottom:3px;left:0}\n"], ["\n  &,&::after{display:block;box-sizing:border-box;height:14px;border:2px solid}&{border-top:0;transform:scale(var(--ggs,1));position:relative;width:18px;border-radius:2px}&::after{content:\"\";position:absolute;border-radius:3px;width:14px;transform:rotate(-45deg);bottom:3px;left:0}\n"])));
exports.MailOpen = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMailOpen, tslib_1.__assign({}, props, { ref: ref, "icon-role": "mail-open" }))));
});
var templateObject_1;
//# sourceMappingURL=MailOpen.js.map