"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledUsbC = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:6px;border:2px solid transparent;border-radius:100px;box-shadow:0 0 0 2px,inset 0 0 0 10px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:6px;border:2px solid transparent;border-radius:100px;box-shadow:0 0 0 2px,inset 0 0 0 10px}\n"])));
exports.UsbC = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledUsbC, tslib_1.__assign({}, props, { ref: ref, "icon-role": "usb-c" }))));
});
var templateObject_1;
//# sourceMappingURL=UsbC.js.map