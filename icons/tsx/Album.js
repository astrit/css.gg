"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledAlbum = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:18px;height:18px;transform:scale(var(--ggs,1));border-left:7px solid transparent;border-right:3px solid transparent;border-bottom:8px solid transparent;box-shadow:0 0 0 2px,inset 6px 4px 0 -4px,inset -6px 4px 0 -4px;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:5px;background:currentColor;transform:rotate(46deg);top:5px;right:4px}&::after{transform:rotate(-46deg);right:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:18px;height:18px;transform:scale(var(--ggs,1));border-left:7px solid transparent;border-right:3px solid transparent;border-bottom:8px solid transparent;box-shadow:0 0 0 2px,inset 6px 4px 0 -4px,inset -6px 4px 0 -4px;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:5px;background:currentColor;transform:rotate(46deg);top:5px;right:4px}&::after{transform:rotate(-46deg);right:2px}\n"])));
exports.Album = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledAlbum, tslib_1.__assign({}, props, { ref: ref, "icon-role": "album" }))));
});
var templateObject_1;
//# sourceMappingURL=Album.js.map