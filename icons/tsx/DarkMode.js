"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDarkMode = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:100px;width:20px;height:20px}&::after,&::before{content:\"\";box-sizing:border-box;position:absolute;display:block}&::before{border:5px solid;border-top-left-radius:100px;border-bottom-left-radius:100px;border-right:0;width:9px;height:18px;top:-1px;left:-1px}&::after{border:4px solid;border-top-right-radius:100px;border-bottom-right-radius:100px;border-left:0;width:4px;height:8px;right:4px;top:4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:100px;width:20px;height:20px}&::after,&::before{content:\"\";box-sizing:border-box;position:absolute;display:block}&::before{border:5px solid;border-top-left-radius:100px;border-bottom-left-radius:100px;border-right:0;width:9px;height:18px;top:-1px;left:-1px}&::after{border:4px solid;border-top-right-radius:100px;border-bottom-right-radius:100px;border-left:0;width:4px;height:8px;right:4px;top:4px}\n"])));
exports.DarkMode = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDarkMode, tslib_1.__assign({}, props, { ref: ref, "icon-role": "dark-mode" }))));
});
var templateObject_1;
//# sourceMappingURL=DarkMode.js.map