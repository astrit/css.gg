"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMic = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:12px;border-bottom-left-radius:120px;border-bottom-right-radius:120px;border:2px solid;border-top:0;margin-top:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{border:2px solid;width:8px;height:18px;left:2px;top:-10px;border-radius:4px}&::before{width:10px;height:4px;top:12px;left:1px;border-right:4px solid transparent;box-shadow:0 2px 0,inset -2px 0 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:12px;border-bottom-left-radius:120px;border-bottom-right-radius:120px;border:2px solid;border-top:0;margin-top:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{border:2px solid;width:8px;height:18px;left:2px;top:-10px;border-radius:4px}&::before{width:10px;height:4px;top:12px;left:1px;border-right:4px solid transparent;box-shadow:0 2px 0,inset -2px 0 0}\n"])));
exports.Mic = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMic, tslib_1.__assign({}, props, { ref: ref, "icon-role": "mic" }))));
});
var templateObject_1;
//# sourceMappingURL=Mic.js.map