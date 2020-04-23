"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledUser = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;transform:scale(var(--ggs,1));box-sizing:border-box;width:12px;height:18px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border:2px solid}&::before{width:8px;height:8px;border-radius:30px;top:0;left:2px}&::after{width:12px;height:9px;border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px;top:9px}\n"], ["\n  &{display:block;transform:scale(var(--ggs,1));box-sizing:border-box;width:12px;height:18px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border:2px solid}&::before{width:8px;height:8px;border-radius:30px;top:0;left:2px}&::after{width:12px;height:9px;border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px;top:9px}\n"])));
exports.User = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledUser, tslib_1.__assign({}, props, { ref: ref, "icon-role": "user" }))));
});
var templateObject_1;
//# sourceMappingURL=User.js.map