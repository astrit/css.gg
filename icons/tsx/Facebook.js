"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFacebook = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box}&::before{width:8px;height:20px;border-left:4px solid;border-top:4px solid;border-top-left-radius:5px;left:6px}&::after{width:10px;height:4px;background:currentColor;top:7px;left:4px;transform:skew(-5deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box}&::before{width:8px;height:20px;border-left:4px solid;border-top:4px solid;border-top-left-radius:5px;left:6px}&::after{width:10px;height:4px;background:currentColor;top:7px;left:4px;transform:skew(-5deg)}\n"])));
exports.Facebook = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFacebook, tslib_1.__assign({}, props, { ref: ref, "icon-role": "facebook" }))));
});
var templateObject_1;
//# sourceMappingURL=Facebook.js.map