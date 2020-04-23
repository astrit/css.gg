"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledGitBranch = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:14px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border-right:2px solid;border-bottom:2px solid;border-bottom-right-radius:4px;bottom:0;width:8px;height:6px;left:0}&::after{width:4px;height:4px;background:currentColor;box-shadow:0 12px 0 0,6px 6px 0 0;border-radius:100%;left:-1px;top:-1px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:14px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border-right:2px solid;border-bottom:2px solid;border-bottom-right-radius:4px;bottom:0;width:8px;height:6px;left:0}&::after{width:4px;height:4px;background:currentColor;box-shadow:0 12px 0 0,6px 6px 0 0;border-radius:100%;left:-1px;top:-1px}\n"])));
exports.GitBranch = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledGitBranch, tslib_1.__assign({}, props, { ref: ref, "icon-role": "git-branch" }))));
});
var templateObject_1;
//# sourceMappingURL=GitBranch.js.map