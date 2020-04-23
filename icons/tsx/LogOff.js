"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledLogOff = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;border-radius:16px;border:2px solid;transform:scale(var(--ggs,1));width:16px;height:16px;border-top:2px solid transparent}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;height:8px;width:2px;background:currentColor;left:5px;bottom:6px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;border-radius:16px;border:2px solid;transform:scale(var(--ggs,1));width:16px;height:16px;border-top:2px solid transparent}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;height:8px;width:2px;background:currentColor;left:5px;bottom:6px}\n"])));
exports.LogOff = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledLogOff, tslib_1.__assign({}, props, { ref: ref, "icon-role": "log-off" }))));
});
var templateObject_1;
//# sourceMappingURL=LogOff.js.map