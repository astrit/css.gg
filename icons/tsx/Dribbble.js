"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDribbble = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{background:radial-gradient(circle at 50%,transparent 0,transparent 9px,currentColor 9.2px,currentColor 11px,transparent 11.2px)no-repeat -8px center;box-sizing:border-box;position:relative;display:block;transform:rotate(-25deg)scale(var(--ggs,1));width:22px;height:22px;box-shadow:inset 0 0 0 2px;border-radius:50%;overflow:hidden}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:50%;border:2px solid;height:26px}&::before{width:36px;left:-6px;top:-15px}&::after{top:13px;left:-7px;width:31px}\n"], ["\n  &{background:radial-gradient(circle at 50%,transparent 0,transparent 9px,currentColor 9.2px,currentColor 11px,transparent 11.2px)no-repeat -8px center;box-sizing:border-box;position:relative;display:block;transform:rotate(-25deg)scale(var(--ggs,1));width:22px;height:22px;box-shadow:inset 0 0 0 2px;border-radius:50%;overflow:hidden}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:50%;border:2px solid;height:26px}&::before{width:36px;left:-6px;top:-15px}&::after{top:13px;left:-7px;width:31px}\n"])));
exports.Dribbble = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDribbble, tslib_1.__assign({}, props, { ref: ref, "icon-role": "dribbble" }))));
});
var templateObject_1;
//# sourceMappingURL=Dribbble.js.map