"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDebug = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:18px;border:2px solid;border-radius:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:8px;height:4px;border:2px solid;top:-4px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-top:0}&::after{background:currentColor;width:4px;height:2px;border-radius:5px;top:4px;left:2px;box-shadow:0 4px 0,-6px -2px 0,-6px 2px 0,-6px 6px 0,6px -2px 0,6px 2px 0,6px 6px 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:18px;border:2px solid;border-radius:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:8px;height:4px;border:2px solid;top:-4px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-top:0}&::after{background:currentColor;width:4px;height:2px;border-radius:5px;top:4px;left:2px;box-shadow:0 4px 0,-6px -2px 0,-6px 2px 0,-6px 6px 0,6px -2px 0,6px 2px 0,6px 6px 0}\n"])));
exports.Debug = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDebug, tslib_1.__assign({}, props, { ref: ref, "icon-role": "debug" }))));
});
var templateObject_1;
//# sourceMappingURL=Debug.js.map