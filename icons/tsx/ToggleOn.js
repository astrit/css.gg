"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledToggleOn = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::before{display:block;box-sizing:border-box;border-radius:20px}&{border:2px solid;position:relative;transform:scale(var(--ggs,1));width:24px;height:14px}&::before{content:\"\";position:absolute;width:6px;height:6px;background:currentColor;top:2px;left:2px}\n"], ["\n  &,&::before{display:block;box-sizing:border-box;border-radius:20px}&{border:2px solid;position:relative;transform:scale(var(--ggs,1));width:24px;height:14px}&::before{content:\"\";position:absolute;width:6px;height:6px;background:currentColor;top:2px;left:2px}\n"])));
exports.ToggleOn = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledToggleOn, tslib_1.__assign({}, props, { ref: ref, "icon-role": "toggle-on" }))));
});
var templateObject_1;
//# sourceMappingURL=ToggleOn.js.map