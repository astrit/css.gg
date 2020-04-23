"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMusic = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;border:2px solid}&{border-top-left-radius:4px;border-top-right-radius:4px;border-bottom:0;margin-top:-4px;position:relative;transform:skewY(-15deg) scale(var(--ggs,1));width:14px;height:16px}&::after,&::before{content:\"\";position:absolute;width:7px;height:7px;top:9px;left:-7px;transform:skewY(15deg);border-radius:10px}&::after{left:5px}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;border:2px solid}&{border-top-left-radius:4px;border-top-right-radius:4px;border-bottom:0;margin-top:-4px;position:relative;transform:skewY(-15deg) scale(var(--ggs,1));width:14px;height:16px}&::after,&::before{content:\"\";position:absolute;width:7px;height:7px;top:9px;left:-7px;transform:skewY(15deg);border-radius:10px}&::after{left:5px}\n"])));
exports.Music = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMusic, tslib_1.__assign({}, props, { ref: ref, "icon-role": "music" }))));
});
var templateObject_1;
//# sourceMappingURL=Music.js.map