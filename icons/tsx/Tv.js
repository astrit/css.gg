"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTv = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:11px;border:2px solid;border-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border-left:2px solid;border-bottom:2px solid;border-bottom-left-radius:2px;top:-6px;left:3px;transform:rotate(-45deg);width:6px;height:5px}&::after{width:8px;height:1px;background:currentColor;border-radius:10px;bottom:-4px;right:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:11px;border:2px solid;border-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border-left:2px solid;border-bottom:2px solid;border-bottom-left-radius:2px;top:-6px;left:3px;transform:rotate(-45deg);width:6px;height:5px}&::after{width:8px;height:1px;background:currentColor;border-radius:10px;bottom:-4px;right:2px}\n"])));
exports.Tv = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTv, tslib_1.__assign({}, props, { ref: ref, "icon-role": "tv" }))));
});
var templateObject_1;
//# sourceMappingURL=Tv.js.map