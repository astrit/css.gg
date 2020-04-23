"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledGitCommit = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:16px;border-radius:3px;border-top:6px solid;border-bottom:6px solid}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:2px;box-shadow:0 0 0 2px;border-radius:100%;left:0;top:1px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:16px;border-radius:3px;border-top:6px solid;border-bottom:6px solid}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:2px;box-shadow:0 0 0 2px;border-radius:100%;left:0;top:1px}\n"])));
exports.GitCommit = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledGitCommit, tslib_1.__assign({}, props, { ref: ref, "icon-role": "git-commit" }))));
});
var templateObject_1;
//# sourceMappingURL=GitCommit.js.map