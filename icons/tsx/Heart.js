"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledHeart = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after{border:2px solid;border-top-left-radius:100px;border-top-right-radius:100px;width:10px;height:8px;border-bottom:0}&{box-sizing:border-box;position:relative;transform:translate(calc(-10px / 2 * var(--ggs,1)),calc(-6px / 2 * var(--ggs,1)))rotate(-45deg)scale(var(--ggs,1));display:block}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{right:-9px;transform:rotate(90deg);top:5px}&::before{width:11px;height:11px;border-left:2px solid;border-bottom:2px solid;left:-2px;top:3px}\n"], ["\n  &,&::after{border:2px solid;border-top-left-radius:100px;border-top-right-radius:100px;width:10px;height:8px;border-bottom:0}&{box-sizing:border-box;position:relative;transform:translate(calc(-10px / 2 * var(--ggs,1)),calc(-6px / 2 * var(--ggs,1)))rotate(-45deg)scale(var(--ggs,1));display:block}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{right:-9px;transform:rotate(90deg);top:5px}&::before{width:11px;height:11px;border-left:2px solid;border-bottom:2px solid;left:-2px;top:3px}\n"])));
exports.Heart = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledHeart, tslib_1.__assign({}, props, { ref: ref, "icon-role": "heart" }))));
});
var templateObject_1;
//# sourceMappingURL=Heart.js.map