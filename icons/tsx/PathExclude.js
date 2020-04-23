"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPathExclude = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:14px}&::after,&::before{content:\"\";position:absolute;display:block;box-sizing:border-box;width:10px;height:10px}&::after{border-top:4px solid;border-left:4px solid}&::before{border-right:4px solid;border-bottom:4px solid;bottom:0;right:0}\n"], ["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:14px}&::after,&::before{content:\"\";position:absolute;display:block;box-sizing:border-box;width:10px;height:10px}&::after{border-top:4px solid;border-left:4px solid}&::before{border-right:4px solid;border-bottom:4px solid;bottom:0;right:0}\n"])));
exports.PathExclude = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPathExclude, tslib_1.__assign({}, props, { ref: ref, "icon-role": "path-exclude" }))));
});
var templateObject_1;
//# sourceMappingURL=PathExclude.js.map