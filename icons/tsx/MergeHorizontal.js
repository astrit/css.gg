"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMergeHorizontal = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:2px;border-radius:3px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(-45deg)}&::after{border-bottom:2px solid;border-left:2px solid;left:4px;bottom:5px}&::before{border-top:2px solid;border-right:2px solid;right:4px;top:5px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:2px;border-radius:3px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(-45deg)}&::after{border-bottom:2px solid;border-left:2px solid;left:4px;bottom:5px}&::before{border-top:2px solid;border-right:2px solid;right:4px;top:5px}\n"])));
exports.MergeHorizontal = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMergeHorizontal, tslib_1.__assign({}, props, { ref: ref, "icon-role": "merge-horizontal" }))));
});
var templateObject_1;
//# sourceMappingURL=MergeHorizontal.js.map