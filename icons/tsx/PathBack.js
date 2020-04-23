"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPathBack = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:14px}&::after,&::before{content:\"\";position:absolute;display:block;box-sizing:border-box;width:10px;height:10px}&::after{border:2px solid}&::before{border-right:5px solid;border-bottom:5px solid;bottom:0;right:0}\n"], ["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:14px}&::after,&::before{content:\"\";position:absolute;display:block;box-sizing:border-box;width:10px;height:10px}&::after{border:2px solid}&::before{border-right:5px solid;border-bottom:5px solid;bottom:0;right:0}\n"])));
exports.PathBack = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPathBack, tslib_1.__assign({}, props, { ref: ref, "icon-role": "path-back" }))));
});
var templateObject_1;
//# sourceMappingURL=PathBack.js.map