"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBowl = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;transform:scale(var(--ggs,1));box-sizing:border-box;width:20px;height:18px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:20px;height:12px;border:2px solid;border-bottom-left-radius:10px;border-bottom-right-radius:10px;bottom:0}&::after{background:currentColor;width:2px;height:10px;border-radius:4px;transform:rotate(45deg);right:4px;top:-1px}\n"], ["\n  &{display:block;position:relative;transform:scale(var(--ggs,1));box-sizing:border-box;width:20px;height:18px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:20px;height:12px;border:2px solid;border-bottom-left-radius:10px;border-bottom-right-radius:10px;bottom:0}&::after{background:currentColor;width:2px;height:10px;border-radius:4px;transform:rotate(45deg);right:4px;top:-1px}\n"])));
exports.Bowl = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBowl, tslib_1.__assign({}, props, { ref: ref, "icon-role": "bowl" }))));
});
var templateObject_1;
//# sourceMappingURL=Bowl.js.map