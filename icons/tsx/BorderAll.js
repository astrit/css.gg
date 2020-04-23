"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBorderAll = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1));}&,&::before{box-sizing:border-box;position:relative;display:block;width:14px;height:14px}&::before{content:\"\";position:absolute;border:3px solid;bottom:0;left:0}\n"], ["\n  &{transform:scale(var(--ggs,1));}&,&::before{box-sizing:border-box;position:relative;display:block;width:14px;height:14px}&::before{content:\"\";position:absolute;border:3px solid;bottom:0;left:0}\n"])));
exports.BorderAll = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBorderAll, tslib_1.__assign({}, props, { ref: ref, "icon-role": "border-all" }))));
});
var templateObject_1;
//# sourceMappingURL=BorderAll.js.map