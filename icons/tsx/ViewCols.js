"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledViewCols = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:20px;height:14px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:12px;top:-2px;left:4px;background:currentColor;box-shadow:6px 0 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:20px;height:14px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:12px;top:-2px;left:4px;background:currentColor;box-shadow:6px 0 0}\n"])));
exports.ViewCols = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledViewCols, tslib_1.__assign({}, props, { ref: ref, "icon-role": "view-cols" }))));
});
var templateObject_1;
//# sourceMappingURL=ViewCols.js.map