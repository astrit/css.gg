"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMediaPodcast = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;border:2px solid;border-bottom-color:transparent;border-radius:50%}&::after,&::before{content:\"\";position:absolute;width:6px;height:6px;top:2px;left:2px}&::after{width:22px;height:22px;top:-6px;left:-6px}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;border:2px solid;border-bottom-color:transparent;border-radius:50%}&::after,&::before{content:\"\";position:absolute;width:6px;height:6px;top:2px;left:2px}&::after{width:22px;height:22px;top:-6px;left:-6px}\n"])));
exports.MediaPodcast = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMediaPodcast, tslib_1.__assign({}, props, { ref: ref, "icon-role": "media-podcast" }))));
});
var templateObject_1;
//# sourceMappingURL=MediaPodcast.js.map