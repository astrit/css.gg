"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledShare = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:6px;background:currentColor;border-radius:100px;box-shadow:10px -6px 0,10px 6px 0}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:10px;height:2px;background:currentColor;left:2px}&::before{top:0;transform:rotate(-35deg)}&::after{bottom:0;transform:rotate(35deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:6px;background:currentColor;border-radius:100px;box-shadow:10px -6px 0,10px 6px 0}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:10px;height:2px;background:currentColor;left:2px}&::before{top:0;transform:rotate(-35deg)}&::after{bottom:0;transform:rotate(35deg)}\n"])));
exports.Share = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledShare, tslib_1.__assign({}, props, { ref: ref, "icon-role": "share" }))));
});
var templateObject_1;
//# sourceMappingURL=Share.js.map