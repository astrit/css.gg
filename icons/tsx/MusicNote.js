"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMusicNote = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:14px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border:2px solid}&::before{bottom:-4px;width:8px;height:8px;left:-6px;border-radius:10px}&::after{width:10px;height:6px;top:-4px;left:0;border-radius:2px;transform:skewY(-15deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:14px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border:2px solid}&::before{bottom:-4px;width:8px;height:8px;left:-6px;border-radius:10px}&::after{width:10px;height:6px;top:-4px;left:0;border-radius:2px;transform:skewY(-15deg)}\n"])));
exports.MusicNote = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMusicNote, tslib_1.__assign({}, props, { ref: ref, "icon-role": "music-note" }))));
});
var templateObject_1;
//# sourceMappingURL=MusicNote.js.map