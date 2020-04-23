"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMusicSpeaker = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:22px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border:2px solid;border-radius:100px}&::before{bottom:2px;width:8px;height:8px;left:2px}&::after{width:4px;height:4px;left:4px;top:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:22px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border:2px solid;border-radius:100px}&::before{bottom:2px;width:8px;height:8px;left:2px}&::after{width:4px;height:4px;left:4px;top:2px}\n"])));
exports.MusicSpeaker = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMusicSpeaker, tslib_1.__assign({}, props, { ref: ref, "icon-role": "music-speaker" }))));
});
var templateObject_1;
//# sourceMappingURL=MusicSpeaker.js.map