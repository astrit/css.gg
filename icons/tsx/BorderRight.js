"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBorderRight = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1));}&,&::before{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;border-right:3px solid}&::before{content:\"\";position:absolute;width:10px;border:3px solid;border-right:0;bottom:0;right:2px;opacity:.3}\n"], ["\n  &{transform:scale(var(--ggs,1));}&,&::before{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;border-right:3px solid}&::before{content:\"\";position:absolute;width:10px;border:3px solid;border-right:0;bottom:0;right:2px;opacity:.3}\n"])));
exports.BorderRight = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBorderRight, tslib_1.__assign({}, props, { ref: ref, "icon-role": "border-right" }))));
});
var templateObject_1;
//# sourceMappingURL=BorderRight.js.map