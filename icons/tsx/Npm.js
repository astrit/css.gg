"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledNpm = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::before{box-sizing:border-box;display:block}&{position:relative;width:18px;height:18px;transform:scale(var(--ggs,1));border:3px solid;border-radius:2px}&::before{content:\"\";position:absolute;width:3px;height:12px;background:currentColor;bottom:-3px;right:3px}\n"], ["\n  &,&::before{box-sizing:border-box;display:block}&{position:relative;width:18px;height:18px;transform:scale(var(--ggs,1));border:3px solid;border-radius:2px}&::before{content:\"\";position:absolute;width:3px;height:12px;background:currentColor;bottom:-3px;right:3px}\n"])));
exports.Npm = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledNpm, tslib_1.__assign({}, props, { ref: ref, "icon-role": "npm" }))));
});
var templateObject_1;
//# sourceMappingURL=Npm.js.map