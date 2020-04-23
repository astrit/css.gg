"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledClapperBoard = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;transform:scale(var(--ggs,1));box-sizing:border-box;width:22px;height:18px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:10px;height:8px;border-left:2px solid;border-right:2px solid;left:4px;top:-2px;transform:skewX(-40deg)}&::after{width:22px;height:2px;background:currentColor;top:4px;left:-2px}\n"], ["\n  &{display:block;position:relative;transform:scale(var(--ggs,1));box-sizing:border-box;width:22px;height:18px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:10px;height:8px;border-left:2px solid;border-right:2px solid;left:4px;top:-2px;transform:skewX(-40deg)}&::after{width:22px;height:2px;background:currentColor;top:4px;left:-2px}\n"])));
exports.ClapperBoard = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledClapperBoard, tslib_1.__assign({}, props, { ref: ref, "icon-role": "clapper-board" }))));
});
var templateObject_1;
//# sourceMappingURL=ClapperBoard.js.map