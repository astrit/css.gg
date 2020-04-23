"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledScreenMirror = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:10px;border:2px solid;border-bottom:0}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{border-bottom:5px solid;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;bottom:-2px;left:3px}&::before{width:18px;height:2px;left:-2px;bottom:0;border-left:5px solid;border-right:5px solid}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:10px;border:2px solid;border-bottom:0}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{border-bottom:5px solid;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;bottom:-2px;left:3px}&::before{width:18px;height:2px;left:-2px;bottom:0;border-left:5px solid;border-right:5px solid}\n"])));
exports.ScreenMirror = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledScreenMirror, tslib_1.__assign({}, props, { ref: ref, "icon-role": "screen-mirror" }))));
});
var templateObject_1;
//# sourceMappingURL=ScreenMirror.js.map