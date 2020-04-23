"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPatreon = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:4px;height:16px;background:currentColor;left:-6px}&::after{content:\"\";position:absolute;width:12px;height:12px;opacity:.5;border-radius:100px;left:6px}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:4px;height:16px;background:currentColor;left:-6px}&::after{content:\"\";position:absolute;width:12px;height:12px;opacity:.5;border-radius:100px;left:6px}\n"])));
exports.Patreon = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPatreon, tslib_1.__assign({}, props, { ref: ref, "icon-role": "patreon" }))));
});
var templateObject_1;
//# sourceMappingURL=Patreon.js.map