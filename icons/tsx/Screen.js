"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledScreen = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:14px;border:2px solid;border-radius:3px;margin-top:-4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:10px;height:2px;background:currentColor;top:14px;left:4px}&::before{width:2px;height:6px;top:10px;left:8px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:14px;border:2px solid;border-radius:3px;margin-top:-4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:10px;height:2px;background:currentColor;top:14px;left:4px}&::before{width:2px;height:6px;top:10px;left:8px}\n"])));
exports.Screen = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledScreen, tslib_1.__assign({}, props, { ref: ref, "icon-role": "screen" }))));
});
var templateObject_1;
//# sourceMappingURL=Screen.js.map