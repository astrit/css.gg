"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledAwards = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;transform:scale(var(--ggs,1));box-sizing:border-box;width:16px;height:20px;border:4px solid transparent;border-top:12px solid transparent;border-bottom:0;box-shadow:inset 4px 0 0 -2px,inset -4px 0 0 -2px}&::after,&::before{content:\"\";box-sizing:border-box;position:absolute;display:block;border:2px solid}&::before{width:14px;height:14px;border-radius:22px;top:-12px;left:-3px}&::after{width:6px;height:6px;border-right-color:transparent;border-bottom-color:transparent;border-bottom-left-radius:1px;border-top-right-radius:1px;transform:rotate(45deg);bottom:-3px;left:1px}\n"], ["\n  &{display:block;position:relative;transform:scale(var(--ggs,1));box-sizing:border-box;width:16px;height:20px;border:4px solid transparent;border-top:12px solid transparent;border-bottom:0;box-shadow:inset 4px 0 0 -2px,inset -4px 0 0 -2px}&::after,&::before{content:\"\";box-sizing:border-box;position:absolute;display:block;border:2px solid}&::before{width:14px;height:14px;border-radius:22px;top:-12px;left:-3px}&::after{width:6px;height:6px;border-right-color:transparent;border-bottom-color:transparent;border-bottom-left-radius:1px;border-top-right-radius:1px;transform:rotate(45deg);bottom:-3px;left:1px}\n"])));
exports.Awards = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledAwards, tslib_1.__assign({}, props, { ref: ref, "icon-role": "awards" }))));
});
var templateObject_1;
//# sourceMappingURL=Awards.js.map