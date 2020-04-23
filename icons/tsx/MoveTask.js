"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMoveTask = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:10px;border-top:2px solid;border-bottom:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:currentColor;top:2px;width:8px;height:2px;left:0}&::after{width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:5px solid;left:-6px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:10px;border-top:2px solid;border-bottom:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:currentColor;top:2px;width:8px;height:2px;left:0}&::after{width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:5px solid;left:-6px}\n"])));
exports.MoveTask = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMoveTask, tslib_1.__assign({}, props, { ref: ref, "icon-role": "move-task" }))));
});
var templateObject_1;
//# sourceMappingURL=MoveTask.js.map