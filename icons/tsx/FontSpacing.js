"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFontSpacing = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:18px;height:16px;transform:scale(var(--ggs,1));border-left:2px solid;border-right:2px solid;background:linear-gradient(to left,currentColor 10px,transparent 0) no-repeat center 8px/6px 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:10px;background:currentColor;top:2px}&::before{transform:rotate(25deg);left:4px}&::after{transform:rotate(-25deg);right:4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:18px;height:16px;transform:scale(var(--ggs,1));border-left:2px solid;border-right:2px solid;background:linear-gradient(to left,currentColor 10px,transparent 0) no-repeat center 8px/6px 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:10px;background:currentColor;top:2px}&::before{transform:rotate(25deg);left:4px}&::after{transform:rotate(-25deg);right:4px}\n"])));
exports.FontSpacing = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFontSpacing, tslib_1.__assign({}, props, { ref: ref, "icon-role": "font-spacing" }))));
});
var templateObject_1;
//# sourceMappingURL=FontSpacing.js.map