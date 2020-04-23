"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledScreenShot = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:20px;border:2px solid;border-radius:1px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:4px;height:4px}&::before{border-bottom:2px solid;border-right:2px solid;bottom:2px;right:2px}&::after{border-top:2px solid;border-left:2px solid;top:2px;left:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:20px;border:2px solid;border-radius:1px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:4px;height:4px}&::before{border-bottom:2px solid;border-right:2px solid;bottom:2px;right:2px}&::after{border-top:2px solid;border-left:2px solid;top:2px;left:2px}\n"])));
exports.ScreenShot = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledScreenShot, tslib_1.__assign({}, props, { ref: ref, "icon-role": "screen-shot" }))));
});
var templateObject_1;
//# sourceMappingURL=ScreenShot.js.map