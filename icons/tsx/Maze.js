"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMaze = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:24px;height:14px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;height:12px;transform:rotate(45deg)}&::before{width:12px;right:2px;bottom:-2px;border-left:4px solid;border-top:4px solid}&::after{width:4px;background:currentColor;left:3px;bottom:1px}\n"], ["\n  &{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:24px;height:14px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;height:12px;transform:rotate(45deg)}&::before{width:12px;right:2px;bottom:-2px;border-left:4px solid;border-top:4px solid}&::after{width:4px;background:currentColor;left:3px;bottom:1px}\n"])));
exports.Maze = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMaze, tslib_1.__assign({}, props, { ref: ref, "icon-role": "maze" }))));
});
var templateObject_1;
//# sourceMappingURL=Maze.js.map