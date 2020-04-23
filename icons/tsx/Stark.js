"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledStark = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{background:currentColor;box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:3px;height:16px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:16px;border:3px solid}&::before{border-top-left-radius:100px;border-bottom-left-radius:100px;border-right:0;border-top-color:transparent;left:-7px;bottom:0}&::after{border-top-right-radius:100px;border-bottom-right-radius:100px;border-left:0;border-bottom-color:transparent;right:-7px;top:0}\n"], ["\n  &{background:currentColor;box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:3px;height:16px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:16px;border:3px solid}&::before{border-top-left-radius:100px;border-bottom-left-radius:100px;border-right:0;border-top-color:transparent;left:-7px;bottom:0}&::after{border-top-right-radius:100px;border-bottom-right-radius:100px;border-left:0;border-bottom-color:transparent;right:-7px;top:0}\n"])));
exports.Stark = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledStark, tslib_1.__assign({}, props, { ref: ref, "icon-role": "stark" }))));
});
var templateObject_1;
//# sourceMappingURL=Stark.js.map