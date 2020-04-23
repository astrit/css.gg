"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledStudio = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:4px;height:4px;background:currentColor;right:2px;bottom:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:4px;height:4px;background:currentColor;right:2px;bottom:2px}\n"])));
exports.Studio = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledStudio, tslib_1.__assign({}, props, { ref: ref, "icon-role": "studio" }))));
});
var templateObject_1;
//# sourceMappingURL=Studio.js.map