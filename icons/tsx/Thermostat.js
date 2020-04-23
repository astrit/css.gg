"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledThermostat = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{position:relative;display:block;box-sizing:border-box;transform:scale(var(--ggs,1));width:10px;height:24px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border:2px solid}&::after{width:12px;height:12px;border-top-color:transparent;bottom:0;border-radius:100px;background:radial-gradient(circle,currentColor 20%,transparent 20%) no-repeat center}&::before{width:8px;height:16px;border-bottom-color:transparent;left:2px;border-top-left-radius:100px;border-top-right-radius:100px}\n"], ["\n  &{position:relative;display:block;box-sizing:border-box;transform:scale(var(--ggs,1));width:10px;height:24px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border:2px solid}&::after{width:12px;height:12px;border-top-color:transparent;bottom:0;border-radius:100px;background:radial-gradient(circle,currentColor 20%,transparent 20%) no-repeat center}&::before{width:8px;height:16px;border-bottom-color:transparent;left:2px;border-top-left-radius:100px;border-top-right-radius:100px}\n"])));
exports.Thermostat = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledThermostat, tslib_1.__assign({}, props, { ref: ref, "icon-role": "thermostat" }))));
});
var templateObject_1;
//# sourceMappingURL=Thermostat.js.map