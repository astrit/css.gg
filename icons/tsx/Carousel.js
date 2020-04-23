"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCarousel = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:18px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px}&::before{width:22px;height:10px;border:2px solid}&::after{width:10px;height:2px;background:currentColor;top:16px;left:6px;box-shadow:-3px -4px 0,3px -4px 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:18px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px}&::before{width:22px;height:10px;border:2px solid}&::after{width:10px;height:2px;background:currentColor;top:16px;left:6px;box-shadow:-3px -4px 0,3px -4px 0}\n"])));
exports.Carousel = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCarousel, tslib_1.__assign({}, props, { ref: ref, "icon-role": "carousel" }))));
});
var templateObject_1;
//# sourceMappingURL=Carousel.js.map