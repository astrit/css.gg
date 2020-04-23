"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledLoadbarSound = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  @keyframes gg-bar{10%{box-shadow:inset 0 -4px 0}30%{box-shadow:inset 0 -10px 0}60%{box-shadow:inset 0 -6px 0}80%{box-shadow:inset 0 -8px 0}to{box-shadow:inset 0 -2px 0}}&,&::after,&::before{display:block;box-sizing:border-box;width:2px;height:12px;box-shadow:inset 0 -12px 0;animation:gg-bar 1.3s ease infinite alternate}&{position:relative;transform:scale(var(--ggs,1))}&::after,&::before{content:\"\";position:absolute;bottom:0}&::before{left:-4px;animation-delay:-2.4s}&::after{right:-4px;animation-delay:-3.7s}\n"], ["\n  @keyframes gg-bar{10%{box-shadow:inset 0 -4px 0}30%{box-shadow:inset 0 -10px 0}60%{box-shadow:inset 0 -6px 0}80%{box-shadow:inset 0 -8px 0}to{box-shadow:inset 0 -2px 0}}&,&::after,&::before{display:block;box-sizing:border-box;width:2px;height:12px;box-shadow:inset 0 -12px 0;animation:gg-bar 1.3s ease infinite alternate}&{position:relative;transform:scale(var(--ggs,1))}&::after,&::before{content:\"\";position:absolute;bottom:0}&::before{left:-4px;animation-delay:-2.4s}&::after{right:-4px;animation-delay:-3.7s}\n"])));
exports.LoadbarSound = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledLoadbarSound, tslib_1.__assign({}, props, { ref: ref, "icon-role": "loadbar-sound" }))));
});
var templateObject_1;
//# sourceMappingURL=LoadbarSound.js.map