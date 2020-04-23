"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledLogOut = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:6px;height:16px;border:2px solid;transform:scale(var(--ggs,1));border-right:0;border-top-left-radius:2px;border-bottom-left-radius:2px;margin-left:-10px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{border-top:2px solid;border-left:2px solid;transform:rotate(-45deg);width:8px;height:8px;left:4px;bottom:2px}&::before{border-radius:3px;width:10px;height:2px;background:currentColor;left:5px;bottom:5px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:6px;height:16px;border:2px solid;transform:scale(var(--ggs,1));border-right:0;border-top-left-radius:2px;border-bottom-left-radius:2px;margin-left:-10px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{border-top:2px solid;border-left:2px solid;transform:rotate(-45deg);width:8px;height:8px;left:4px;bottom:2px}&::before{border-radius:3px;width:10px;height:2px;background:currentColor;left:5px;bottom:5px}\n"])));
exports.LogOut = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledLogOut, tslib_1.__assign({}, props, { ref: ref, "icon-role": "log-out" }))));
});
var templateObject_1;
//# sourceMappingURL=LogOut.js.map