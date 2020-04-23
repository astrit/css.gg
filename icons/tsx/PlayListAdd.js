"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPlayListAdd = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:6px;border-top:0 solid transparent;border-bottom:2px solid transparent;box-shadow:inset 0 -2px 0,-2px 4px 0 -2px,0 -2px 0 0}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;top:6px;right:-8px}&::before{width:2px;height:10px;top:2px;right:-4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:6px;border-top:0 solid transparent;border-bottom:2px solid transparent;box-shadow:inset 0 -2px 0,-2px 4px 0 -2px,0 -2px 0 0}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;top:6px;right:-8px}&::before{width:2px;height:10px;top:2px;right:-4px}\n"])));
exports.PlayListAdd = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPlayListAdd, tslib_1.__assign({}, props, { ref: ref, "icon-role": "play-list-add" }))));
});
var templateObject_1;
//# sourceMappingURL=PlayListAdd.js.map