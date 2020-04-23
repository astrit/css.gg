"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledUnblock = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:100%}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:7px;background:currentColor;border-radius:5px;left:6px}&::before{top:-2px}&::after{bottom:-2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:100%}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:7px;background:currentColor;border-radius:5px;left:6px}&::before{top:-2px}&::after{bottom:-2px}\n"])));
exports.Unblock = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledUnblock, tslib_1.__assign({}, props, { ref: ref, "icon-role": "unblock" }))));
});
var templateObject_1;
//# sourceMappingURL=Unblock.js.map