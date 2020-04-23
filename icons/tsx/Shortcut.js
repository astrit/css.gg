"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledShortcut = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after{display:block;box-sizing:border-box;border-radius:3px}&{border:2px solid;position:relative;transform:scale(var(--ggs,1));width:18px;height:18px}&::after{content:\"\";position:absolute;width:2px;height:12px;background:currentColor;left:6px;top:1px;transform:rotate(45deg)}\n"], ["\n  &,&::after{display:block;box-sizing:border-box;border-radius:3px}&{border:2px solid;position:relative;transform:scale(var(--ggs,1));width:18px;height:18px}&::after{content:\"\";position:absolute;width:2px;height:12px;background:currentColor;left:6px;top:1px;transform:rotate(45deg)}\n"])));
exports.Shortcut = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledShortcut, tslib_1.__assign({}, props, { ref: ref, "icon-role": "shortcut" }))));
});
var templateObject_1;
//# sourceMappingURL=Shortcut.js.map