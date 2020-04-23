"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPlug = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{position:relative;display:block;box-sizing:border-box;transform:scale(var(--ggs,1));width:12px;height:20px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:12px;height:10px;border:2px solid;border-bottom-left-radius:8px;border-bottom-right-radius:8px;top:5px}&::after{width:2px;height:4px;background:currentColor;left:2px;border-radius:22px;box-shadow:6px 0 0,3px 14px 0,3px 16px 0}\n"], ["\n  &{position:relative;display:block;box-sizing:border-box;transform:scale(var(--ggs,1));width:12px;height:20px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:12px;height:10px;border:2px solid;border-bottom-left-radius:8px;border-bottom-right-radius:8px;top:5px}&::after{width:2px;height:4px;background:currentColor;left:2px;border-radius:22px;box-shadow:6px 0 0,3px 14px 0,3px 16px 0}\n"])));
exports.Plug = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPlug, tslib_1.__assign({}, props, { ref: ref, "icon-role": "plug" }))));
});
var templateObject_1;
//# sourceMappingURL=Plug.js.map