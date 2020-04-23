"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPinAlt = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:2px;height:8px;border-radius:3px;transform:scale(var(--ggs,1));background:currentColor}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:12px;height:12px;border:6px double;border-radius:100px;top:-10px;left:-5px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:2px;height:8px;border-radius:3px;transform:scale(var(--ggs,1));background:currentColor}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:12px;height:12px;border:6px double;border-radius:100px;top:-10px;left:-5px}\n"])));
exports.PinAlt = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPinAlt, tslib_1.__assign({}, props, { ref: ref, "icon-role": "pin-alt" }))));
});
var templateObject_1;
//# sourceMappingURL=PinAlt.js.map