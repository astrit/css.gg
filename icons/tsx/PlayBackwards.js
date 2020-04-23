"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPlayBackwards = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:3px;height:10px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:0;height:10px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:6px solid;right:-7px}&::before{right:-14px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:3px;height:10px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:0;height:10px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:6px solid;right:-7px}&::before{right:-14px}\n"])));
exports.PlayBackwards = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPlayBackwards, tslib_1.__assign({}, props, { ref: ref, "icon-role": "play-backwards" }))));
});
var templateObject_1;
//# sourceMappingURL=PlayBackwards.js.map