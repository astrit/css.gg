"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledGoogleTasks = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px}&::after,&::before{content:\"\";position:absolute;display:block;background:currentColor}&::before{width:6px;height:6px;border-radius:10px;bottom:6px;left:2px}&::after{height:18px;width:4px;border-radius:20px;transform:rotate(40deg);right:2px;bottom:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px}&::after,&::before{content:\"\";position:absolute;display:block;background:currentColor}&::before{width:6px;height:6px;border-radius:10px;bottom:6px;left:2px}&::after{height:18px;width:4px;border-radius:20px;transform:rotate(40deg);right:2px;bottom:0}\n"])));
exports.GoogleTasks = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledGoogleTasks, tslib_1.__assign({}, props, { ref: ref, "icon-role": "google-tasks" }))));
});
var templateObject_1;
//# sourceMappingURL=GoogleTasks.js.map