"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDisplayGrid = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));height:14px;width:14px;border:2px solid transparent;box-shadow:0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:4px;border-right:4px solid;border-left:4px solid;top:0;left:0}&::before{top:6px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));height:14px;width:14px;border:2px solid transparent;box-shadow:0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:4px;border-right:4px solid;border-left:4px solid;top:0;left:0}&::before{top:6px}\n"])));
exports.DisplayGrid = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDisplayGrid, tslib_1.__assign({}, props, { ref: ref, "icon-role": "display-grid" }))));
});
var templateObject_1;
//# sourceMappingURL=DisplayGrid.js.map