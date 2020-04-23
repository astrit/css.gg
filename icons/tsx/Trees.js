"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTrees = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:20px;border-left:4px solid transparent;border-right:3px solid transparent;border-top:10px solid transparent;box-shadow:inset 2px 0 0,inset -2px 0 0}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;width:10px;height:16px;border:2px solid;border-radius:8px;left:-4px;top:-10px}&::after{width:8px;height:12px;top:-6px;left:4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:20px;border-left:4px solid transparent;border-right:3px solid transparent;border-top:10px solid transparent;box-shadow:inset 2px 0 0,inset -2px 0 0}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;width:10px;height:16px;border:2px solid;border-radius:8px;left:-4px;top:-10px}&::after{width:8px;height:12px;top:-6px;left:4px}\n"])));
exports.Trees = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTrees, tslib_1.__assign({}, props, { ref: ref, "icon-role": "trees" }))));
});
var templateObject_1;
//# sourceMappingURL=Trees.js.map