"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTimer = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::before{border:2px solid;width:18px;height:18px;border-radius:40px}&{background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 6px -2px/2px 6px;box-sizing:border-box;transform:scale(var(--ggs,1));position:relative;display:block;border-top-color:transparent}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border-right-color:transparent;border-left-color:transparent;border-bottom-color:transparent;right:-2px;top:-2px;transform:rotate(45deg)}&::after{width:2px;height:6px;background:currentColor;transform:rotate(-50deg);left:4px;bottom:5px;border-radius:100px}\n"], ["\n  &,&::before{border:2px solid;width:18px;height:18px;border-radius:40px}&{background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 6px -2px/2px 6px;box-sizing:border-box;transform:scale(var(--ggs,1));position:relative;display:block;border-top-color:transparent}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border-right-color:transparent;border-left-color:transparent;border-bottom-color:transparent;right:-2px;top:-2px;transform:rotate(45deg)}&::after{width:2px;height:6px;background:currentColor;transform:rotate(-50deg);left:4px;bottom:5px;border-radius:100px}\n"])));
exports.Timer = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTimer, tslib_1.__assign({}, props, { ref: ref, "icon-role": "timer" }))));
});
var templateObject_1;
//# sourceMappingURL=Timer.js.map