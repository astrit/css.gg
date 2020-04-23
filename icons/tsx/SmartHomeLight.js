"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSmartHomeLight = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:10px;height:14px;border:2px solid;border-radius:14px;box-shadow:0 11px 0 -4px}&::after,&::before{content:\"\";position:absolute;display:block;box-sizing:border-box;background:currentColor;width:2px;height:6px;border-radius:6px;bottom:-8px}&::before{transform:rotate(20deg);left:-2px}&::after{transform:rotate(-20deg);right:-2px}\n"], ["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:10px;height:14px;border:2px solid;border-radius:14px;box-shadow:0 11px 0 -4px}&::after,&::before{content:\"\";position:absolute;display:block;box-sizing:border-box;background:currentColor;width:2px;height:6px;border-radius:6px;bottom:-8px}&::before{transform:rotate(20deg);left:-2px}&::after{transform:rotate(-20deg);right:-2px}\n"])));
exports.SmartHomeLight = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSmartHomeLight, tslib_1.__assign({}, props, { ref: ref, "icon-role": "smart-home-light" }))));
});
var templateObject_1;
//# sourceMappingURL=SmartHomeLight.js.map