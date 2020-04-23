"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBorderLeft = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1));}&,&::before{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;border-left:3px solid}&::before{content:\"\";position:absolute;width:10px;border:3px solid;border-left:0;bottom:0;left:2px;opacity:.3}\n"], ["\n  &{transform:scale(var(--ggs,1));}&,&::before{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;border-left:3px solid}&::before{content:\"\";position:absolute;width:10px;border:3px solid;border-left:0;bottom:0;left:2px;opacity:.3}\n"])));
exports.BorderLeft = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBorderLeft, tslib_1.__assign({}, props, { ref: ref, "icon-role": "border-left" }))));
});
var templateObject_1;
//# sourceMappingURL=BorderLeft.js.map