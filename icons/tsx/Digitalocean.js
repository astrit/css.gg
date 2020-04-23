"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDigitalocean = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;background:linear-gradient(to left,currentColor 4px,transparent 0 ) no-repeat 1px 14px/2px 2px,linear-gradient(to left,currentColor 4px,transparent 0 ) no-repeat 3px 16px/3px 3px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box}&::after{width:4px;height:4px;background:currentColor;bottom:4px;left:6px}&::before{width:20px;height:20px;border:4px solid;transform:rotate(-45deg);border-radius:100px;border-left-color:transparent}\n"], ["\n  &{position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;background:linear-gradient(to left,currentColor 4px,transparent 0 ) no-repeat 1px 14px/2px 2px,linear-gradient(to left,currentColor 4px,transparent 0 ) no-repeat 3px 16px/3px 3px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box}&::after{width:4px;height:4px;background:currentColor;bottom:4px;left:6px}&::before{width:20px;height:20px;border:4px solid;transform:rotate(-45deg);border-radius:100px;border-left-color:transparent}\n"])));
exports.Digitalocean = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDigitalocean, tslib_1.__assign({}, props, { ref: ref, "icon-role": "digitalocean" }))));
});
var templateObject_1;
//# sourceMappingURL=Digitalocean.js.map