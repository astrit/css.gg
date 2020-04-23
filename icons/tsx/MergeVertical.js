"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMergeVertical = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:14px;border-radius:3px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;top:4px}&::after{border-left:2px solid;left:5px;transform:rotate(45deg)}&::before{border-right:2px solid;transform:rotate(-45deg);right:5px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:14px;border-radius:3px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;top:4px}&::after{border-left:2px solid;left:5px;transform:rotate(45deg)}&::before{border-right:2px solid;transform:rotate(-45deg);right:5px}\n"])));
exports.MergeVertical = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMergeVertical, tslib_1.__assign({}, props, { ref: ref, "icon-role": "merge-vertical" }))));
});
var templateObject_1;
//# sourceMappingURL=MergeVertical.js.map