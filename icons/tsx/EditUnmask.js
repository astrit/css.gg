"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledEditUnmask = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after{display:block;box-sizing:border-box;border-radius:22px}&{position:relative;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid transparent}&::after{content:\"\";position:absolute;width:4px;height:4px;background:currentColor;top:6px;left:6px;box-shadow:0 7px 0 1px,0 -7px 0 1px,-7px 0 0 1px,7px 0 0 1px}\n"], ["\n  &,&::after{display:block;box-sizing:border-box;border-radius:22px}&{position:relative;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid transparent}&::after{content:\"\";position:absolute;width:4px;height:4px;background:currentColor;top:6px;left:6px;box-shadow:0 7px 0 1px,0 -7px 0 1px,-7px 0 0 1px,7px 0 0 1px}\n"])));
exports.EditUnmask = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledEditUnmask, tslib_1.__assign({}, props, { ref: ref, "icon-role": "edit-unmask" }))));
});
var templateObject_1;
//# sourceMappingURL=EditUnmask.js.map