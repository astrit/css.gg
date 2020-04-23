"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledGlobeAlt = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;height:18px;border:2px solid}&{position:relative;transform:scale(var(--ggs,1));width:18px;border-radius:22px}&::after,&::before{content:\"\";position:absolute;width:8px;border-radius:100%;top:-2px;left:3px}&::after{width:24px;height:20px;border:2px solid transparent;border-bottom:2px solid;top:-11px;left:-5px}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;height:18px;border:2px solid}&{position:relative;transform:scale(var(--ggs,1));width:18px;border-radius:22px}&::after,&::before{content:\"\";position:absolute;width:8px;border-radius:100%;top:-2px;left:3px}&::after{width:24px;height:20px;border:2px solid transparent;border-bottom:2px solid;top:-11px;left:-5px}\n"])));
exports.GlobeAlt = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledGlobeAlt, tslib_1.__assign({}, props, { ref: ref, "icon-role": "globe-alt" }))));
});
var templateObject_1;
//# sourceMappingURL=GlobeAlt.js.map