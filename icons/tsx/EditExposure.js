"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledEditExposure = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:100px;overflow:hidden}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:8px;border-top:2px solid;border-bottom:2px solid;left:3px;top:3px;}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:6px;background:currentColor;left:5px;top:1px;}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:100px;overflow:hidden}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:8px;border-top:2px solid;border-bottom:2px solid;left:3px;top:3px;}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:6px;background:currentColor;left:5px;top:1px;}\n"])));
exports.EditExposure = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledEditExposure, tslib_1.__assign({}, props, { ref: ref, "icon-role": "edit-exposure" }))));
});
var templateObject_1;
//# sourceMappingURL=EditExposure.js.map