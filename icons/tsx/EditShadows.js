"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledEditShadows = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:100px;overflow:hidden}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:14px;right:0;top:-1px;background:repeating-linear-gradient( to bottom,currentColor,currentColor 2px,transparent 0px,transparent 3px)}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:14px;left:0;background:currentColor}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:100px;overflow:hidden}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:14px;right:0;top:-1px;background:repeating-linear-gradient( to bottom,currentColor,currentColor 2px,transparent 0px,transparent 3px)}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:14px;left:0;background:currentColor}\n"])));
exports.EditShadows = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledEditShadows, tslib_1.__assign({}, props, { ref: ref, "icon-role": "edit-shadows" }))));
});
var templateObject_1;
//# sourceMappingURL=EditShadows.js.map