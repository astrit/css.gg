"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBorderTop = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1));}&,&::before{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;border-top:3px solid}&::before{content:\"\";position:absolute;height:10px;border:3px solid;border-top:0;top:2px;left:0;opacity:.3}\n"], ["\n  &{transform:scale(var(--ggs,1));}&,&::before{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;border-top:3px solid}&::before{content:\"\";position:absolute;height:10px;border:3px solid;border-top:0;top:2px;left:0;opacity:.3}\n"])));
exports.BorderTop = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBorderTop, tslib_1.__assign({}, props, { ref: ref, "icon-role": "border-top" }))));
});
var templateObject_1;
//# sourceMappingURL=BorderTop.js.map