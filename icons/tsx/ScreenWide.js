"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledScreenWide = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:11px;border:2px solid;border-radius:3px;margin-top:-4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:8px;height:2px;background:currentColor;top:10px;left:6px}&::before{width:2px;height:4px;top:8px;left:9px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:11px;border:2px solid;border-radius:3px;margin-top:-4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:8px;height:2px;background:currentColor;top:10px;left:6px}&::before{width:2px;height:4px;top:8px;left:9px}\n"])));
exports.ScreenWide = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledScreenWide, tslib_1.__assign({}, props, { ref: ref, "icon-role": "screen-wide" }))));
});
var templateObject_1;
//# sourceMappingURL=ScreenWide.js.map