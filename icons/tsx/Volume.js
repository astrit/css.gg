"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledVolume = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:8px;border:2px solid;border-right:0;-webkit-perspective:12px;perspective:12px;border-top-left-radius:4px;border-bottom-left-radius:4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{left:2px;transform:rotateY(-90deg);width:10px;height:10px;border:2px solid;border-left:0;top:-3px}&::after{width:8px;height:16px;border:6px double;border-left:0;border-top-right-radius:100px;border-bottom-right-radius:100px;right:-14px;top:-6px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:8px;border:2px solid;border-right:0;-webkit-perspective:12px;perspective:12px;border-top-left-radius:4px;border-bottom-left-radius:4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{left:2px;transform:rotateY(-90deg);width:10px;height:10px;border:2px solid;border-left:0;top:-3px}&::after{width:8px;height:16px;border:6px double;border-left:0;border-top-right-radius:100px;border-bottom-right-radius:100px;right:-14px;top:-6px}\n"])));
exports.Volume = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledVolume, tslib_1.__assign({}, props, { ref: ref, "icon-role": "volume" }))));
});
var templateObject_1;
//# sourceMappingURL=Volume.js.map