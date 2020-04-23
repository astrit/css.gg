"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSleep = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after{display:block;box-sizing:border-box}&{transform:scale(var(--ggs,1));position:relative;width:18px;height:18px;border:2px solid;border-radius:22px}&::after{content:\"\";position:absolute;width:14px;height:2px;background:currentColor;bottom:2px}\n"], ["\n  &,&::after{display:block;box-sizing:border-box}&{transform:scale(var(--ggs,1));position:relative;width:18px;height:18px;border:2px solid;border-radius:22px}&::after{content:\"\";position:absolute;width:14px;height:2px;background:currentColor;bottom:2px}\n"])));
exports.Sleep = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSleep, tslib_1.__assign({}, props, { ref: ref, "icon-role": "sleep" }))));
});
var templateObject_1;
//# sourceMappingURL=Sleep.js.map