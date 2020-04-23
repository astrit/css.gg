"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledEthernet = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:20px;border:2px solid;box-shadow:0 10px 0 -7px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;top:6px}&::before{width:8px;height:8px;border:2px solid;border-top:0;left:2px}&::after{width:16px;height:2px;border-left:6px solid;border-right:6px solid;left:-2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:20px;border:2px solid;box-shadow:0 10px 0 -7px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;top:6px}&::before{width:8px;height:8px;border:2px solid;border-top:0;left:2px}&::after{width:16px;height:2px;border-left:6px solid;border-right:6px solid;left:-2px}\n"])));
exports.Ethernet = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledEthernet, tslib_1.__assign({}, props, { ref: ref, "icon-role": "ethernet" }))));
});
var templateObject_1;
//# sourceMappingURL=Ethernet.js.map