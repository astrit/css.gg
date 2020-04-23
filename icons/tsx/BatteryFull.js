"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBatteryFull = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:20px;height:12px;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;margin-left:-3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:6px;background:currentColor;top:1px}&::before{right:-4px;border-radius:3px;width:4px}&::after{width:14px;left:1px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:20px;height:12px;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;margin-left:-3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:6px;background:currentColor;top:1px}&::before{right:-4px;border-radius:3px;width:4px}&::after{width:14px;left:1px}\n"])));
exports.BatteryFull = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBatteryFull, tslib_1.__assign({}, props, { ref: ref, "icon-role": "battery-full" }))));
});
var templateObject_1;
//# sourceMappingURL=BatteryFull.js.map