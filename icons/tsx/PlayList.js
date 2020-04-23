"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPlayList = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:6px;border-top:0 solid transparent;border-bottom:2px solid transparent;box-shadow:inset 0 -2px 0,-2px 4px 0 -2px,0 -2px 0 0}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:5px solid;top:6px;right:-3px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:6px;border-top:0 solid transparent;border-bottom:2px solid transparent;box-shadow:inset 0 -2px 0,-2px 4px 0 -2px,0 -2px 0 0}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:5px solid;top:6px;right:-3px}\n"])));
exports.PlayList = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPlayList, tslib_1.__assign({}, props, { ref: ref, "icon-role": "play-list" }))));
});
var templateObject_1;
//# sourceMappingURL=PlayList.js.map