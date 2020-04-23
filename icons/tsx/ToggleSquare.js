"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledToggleSquare = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:14px;border:2px solid;border-radius:2px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;background:currentColor;top:2px;left:2px;border-radius:1px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:14px;border:2px solid;border-radius:2px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;background:currentColor;top:2px;left:2px;border-radius:1px}\n"])));
exports.ToggleSquare = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledToggleSquare, tslib_1.__assign({}, props, { ref: ref, "icon-role": "toggle-square" }))));
});
var templateObject_1;
//# sourceMappingURL=ToggleSquare.js.map