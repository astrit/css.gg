"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledGym = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(-35deg) scale(var(--ggs,1));width:8px;height:20px;border-top:9px solid transparent;border-bottom:9px solid transparent;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{box-shadow:-3px 0 0 -1px,3px 0 0 -1px,inset 2px 0 0 0,inset -2px 0 0 0;width:14px;height:8px;border-left:1px solid transparent;border-right:1px solid transparent;top:-3px;left:-3px}&::after{width:22px;height:2px;border-left:2px solid;border-right:2px solid;top:0;left:-7px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(-35deg) scale(var(--ggs,1));width:8px;height:20px;border-top:9px solid transparent;border-bottom:9px solid transparent;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{box-shadow:-3px 0 0 -1px,3px 0 0 -1px,inset 2px 0 0 0,inset -2px 0 0 0;width:14px;height:8px;border-left:1px solid transparent;border-right:1px solid transparent;top:-3px;left:-3px}&::after{width:22px;height:2px;border-left:2px solid;border-right:2px solid;top:0;left:-7px}\n"])));
exports.Gym = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledGym, tslib_1.__assign({}, props, { ref: ref, "icon-role": "gym" }))));
});
var templateObject_1;
//# sourceMappingURL=Gym.js.map