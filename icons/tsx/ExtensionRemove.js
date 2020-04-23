"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledExtensionRemove = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 10px 4px/6px 2px;width:16px;height:16px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;width:8px;height:14px;border:2px solid;bottom:0}&::after{width:14px;height:8px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 10px 4px/6px 2px;width:16px;height:16px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;width:8px;height:14px;border:2px solid;bottom:0}&::after{width:14px;height:8px}\n"])));
exports.ExtensionRemove = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledExtensionRemove, tslib_1.__assign({}, props, { ref: ref, "icon-role": "extension-remove" }))));
});
var templateObject_1;
//# sourceMappingURL=ExtensionRemove.js.map