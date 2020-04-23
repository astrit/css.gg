"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledGirl = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;border-radius:42px}&{position:relative;transform:scale(var(--ggs,1));width:20px;height:20px;overflow:hidden;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";position:absolute;width:2px;height:2px;background:currentColor;box-shadow:6px 0 0;left:6px;top:10px}&::after{width:20px;height:20px;top:-11px;left:-12px;box-shadow:17px -4px 0 3px}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;border-radius:42px}&{position:relative;transform:scale(var(--ggs,1));width:20px;height:20px;overflow:hidden;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";position:absolute;width:2px;height:2px;background:currentColor;box-shadow:6px 0 0;left:6px;top:10px}&::after{width:20px;height:20px;top:-11px;left:-12px;box-shadow:17px -4px 0 3px}\n"])));
exports.Girl = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledGirl, tslib_1.__assign({}, props, { ref: ref, "icon-role": "girl" }))));
});
var templateObject_1;
//# sourceMappingURL=Girl.js.map