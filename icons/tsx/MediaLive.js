"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMediaLive = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after{border-top-color:transparent;border-bottom-color:transparent}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;border:2px solid;border-radius:50%;width:14px;height:14px}&::after,&::before{content:\"\";position:absolute;width:6px;height:6px;top:2px;left:2px}&::after{width:22px;height:22px;top:-6px;left:-6px}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after{border-top-color:transparent;border-bottom-color:transparent}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;border:2px solid;border-radius:50%;width:14px;height:14px}&::after,&::before{content:\"\";position:absolute;width:6px;height:6px;top:2px;left:2px}&::after{width:22px;height:22px;top:-6px;left:-6px}\n"])));
exports.MediaLive = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMediaLive, tslib_1.__assign({}, props, { ref: ref, "icon-role": "media-live" }))));
});
var templateObject_1;
//# sourceMappingURL=MediaLive.js.map