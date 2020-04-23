"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTrophy = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:12px;border:2px solid;border-bottom-left-radius:100px;border-bottom-right-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{box-shadow:inset 0 0 0 2px,0 2px 0 0;bottom:-4px;width:6px;height:4px;border-left:2px solid transparent;border-right:2px solid transparent;left:0}&::after{width:16px;height:6px;border-left:2px solid;border-right:2px solid;left:-5px;top:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:12px;border:2px solid;border-bottom-left-radius:100px;border-bottom-right-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{box-shadow:inset 0 0 0 2px,0 2px 0 0;bottom:-4px;width:6px;height:4px;border-left:2px solid transparent;border-right:2px solid transparent;left:0}&::after{width:16px;height:6px;border-left:2px solid;border-right:2px solid;left:-5px;top:0}\n"])));
exports.Trophy = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTrophy, tslib_1.__assign({}, props, { ref: ref, "icon-role": "trophy" }))));
});
var templateObject_1;
//# sourceMappingURL=Trophy.js.map