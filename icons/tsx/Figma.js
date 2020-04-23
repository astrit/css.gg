"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFigma = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:14px;height:20px;transform:scale(var(--ggs,1));background:linear-gradient(to left,currentColor 3px,transparent 0) no-repeat 3px 7px/3px 6px,linear-gradient(to left,currentColor 3px,transparent 0) no-repeat 3px 14px/3px 3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:13px;height:6px;background:currentColor;border-radius:22px}&::after{width:6px;top:7px;box-shadow:7px 0 0,0 7px 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:14px;height:20px;transform:scale(var(--ggs,1));background:linear-gradient(to left,currentColor 3px,transparent 0) no-repeat 3px 7px/3px 6px,linear-gradient(to left,currentColor 3px,transparent 0) no-repeat 3px 14px/3px 3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:13px;height:6px;background:currentColor;border-radius:22px}&::after{width:6px;top:7px;box-shadow:7px 0 0,0 7px 0}\n"])));
exports.Figma = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFigma, tslib_1.__assign({}, props, { ref: ref, "icon-role": "figma" }))));
});
var templateObject_1;
//# sourceMappingURL=Figma.js.map