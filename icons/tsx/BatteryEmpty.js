"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBatteryEmpty = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:20px;height:12px;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;margin-left:-3px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:4px;height:6px;right:-4px;top:1px;background:currentColor}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:20px;height:12px;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;margin-left:-3px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:4px;height:6px;right:-4px;top:1px;background:currentColor}\n"])));
exports.BatteryEmpty = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBatteryEmpty, tslib_1.__assign({}, props, { ref: ref, "icon-role": "battery-empty" }))));
});
var templateObject_1;
//# sourceMappingURL=BatteryEmpty.js.map