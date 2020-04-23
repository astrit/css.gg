"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledHomeScreen = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:22px;border-radius:3px;border:2px solid}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;border-radius:2px;width:2px;height:2px;left:1px;background:currentColor}&::after{top:1px;box-shadow:3px 0,6px 0,0 3px,3px 3px,6px 3px,0 6px}&::before{bottom:1px;box-shadow:3px 0 0,6px 0 0}\n"], ["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:22px;border-radius:3px;border:2px solid}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;border-radius:2px;width:2px;height:2px;left:1px;background:currentColor}&::after{top:1px;box-shadow:3px 0,6px 0,0 3px,3px 3px,6px 3px,0 6px}&::before{bottom:1px;box-shadow:3px 0 0,6px 0 0}\n"])));
exports.HomeScreen = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledHomeScreen, tslib_1.__assign({}, props, { ref: ref, "icon-role": "home-screen" }))));
});
var templateObject_1;
//# sourceMappingURL=HomeScreen.js.map