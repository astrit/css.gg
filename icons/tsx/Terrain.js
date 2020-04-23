"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTerrain = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:22px;height:14px;overflow:hidden}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:0;height:10px;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:10px solid;top:4px}&::after{width:6px;height:22px;background:currentColor;transform:rotate(-32deg) skewY(-35deg);left:14px;top:3px}\n"], ["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:22px;height:14px;overflow:hidden}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:0;height:10px;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:10px solid;top:4px}&::after{width:6px;height:22px;background:currentColor;transform:rotate(-32deg) skewY(-35deg);left:14px;top:3px}\n"])));
exports.Terrain = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTerrain, tslib_1.__assign({}, props, { ref: ref, "icon-role": "terrain" }))));
});
var templateObject_1;
//# sourceMappingURL=Terrain.js.map