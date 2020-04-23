"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledLayoutPin = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:3px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-radius:4px;top:3px;left:3px;box-shadow:-7px 0 0,7px 0 0,0 -7px 0,0 7px 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:3px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-radius:4px;top:3px;left:3px;box-shadow:-7px 0 0,7px 0 0,0 -7px 0,0 7px 0}\n"])));
exports.LayoutPin = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledLayoutPin, tslib_1.__assign({}, props, { ref: ref, "icon-role": "layout-pin" }))));
});
var templateObject_1;
//# sourceMappingURL=LayoutPin.js.map