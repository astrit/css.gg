"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSmartphoneChip = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:6px double;border-radius:3px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:2px;left:-3px;top:-9px;background:currentColor;box-shadow:4px 0 0,8px 0 0,0 20px 0,4px 20px 0,-6px 6px 0,14px 6px 0,14px 10px 0,14px 14px 0,-6px 10px 0,-6px 14px 0,8px 20px 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:6px double;border-radius:3px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:2px;left:-3px;top:-9px;background:currentColor;box-shadow:4px 0 0,8px 0 0,0 20px 0,4px 20px 0,-6px 6px 0,14px 6px 0,14px 10px 0,14px 14px 0,-6px 10px 0,-6px 14px 0,8px 20px 0}\n"])));
exports.SmartphoneChip = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSmartphoneChip, tslib_1.__assign({}, props, { ref: ref, "icon-role": "smartphone-chip" }))));
});
var templateObject_1;
//# sourceMappingURL=SmartphoneChip.js.map