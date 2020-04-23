"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledAtlasian = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{position:relative;box-sizing:border-box;display:block;width:22px;height:18px;transform:scale(var(--ggs,1));overflow:hidden}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;background:currentColor;border-radius:4px}&::before{height:12px;border-top-right-radius:10px;bottom:-4px;left:3px;transform:rotate(30deg) skewY(35deg);opacity:.8}&::after{height:24px;border-top-left-radius:10px;bottom:-8px;right:3px;transform:rotate(-30deg) skewY(-35deg)}\n"], ["\n  &{position:relative;box-sizing:border-box;display:block;width:22px;height:18px;transform:scale(var(--ggs,1));overflow:hidden}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;background:currentColor;border-radius:4px}&::before{height:12px;border-top-right-radius:10px;bottom:-4px;left:3px;transform:rotate(30deg) skewY(35deg);opacity:.8}&::after{height:24px;border-top-left-radius:10px;bottom:-8px;right:3px;transform:rotate(-30deg) skewY(-35deg)}\n"])));
exports.Atlasian = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledAtlasian, tslib_1.__assign({}, props, { ref: ref, "icon-role": "atlasian" }))));
});
var templateObject_1;
//# sourceMappingURL=Atlasian.js.map