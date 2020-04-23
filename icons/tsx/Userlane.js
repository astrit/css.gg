"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledUserlane = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:8px;border-radius:20px;border-top-left-radius:0;border-top-right-radius:0;border:4px solid;border-top-color:transparent}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;background:currentColor;top:-12px}&::before{border-radius:20px;left:-4px}&::after{right:-4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:8px;border-radius:20px;border-top-left-radius:0;border-top-right-radius:0;border:4px solid;border-top-color:transparent}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;background:currentColor;top:-12px}&::before{border-radius:20px;left:-4px}&::after{right:-4px}\n"])));
exports.Userlane = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledUserlane, tslib_1.__assign({}, props, { ref: ref, "icon-role": "userlane" }))));
});
var templateObject_1;
//# sourceMappingURL=Userlane.js.map