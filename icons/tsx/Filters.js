"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFilters = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:19px;height:19px;background:radial-gradient(circle,currentColor 26%,transparent 26%)}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border:2px solid;border-radius:100%;width:14px;height:14px}&::after{bottom:0;right:0}\n"], ["\n  &{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:19px;height:19px;background:radial-gradient(circle,currentColor 26%,transparent 26%)}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border:2px solid;border-radius:100%;width:14px;height:14px}&::after{bottom:0;right:0}\n"])));
exports.Filters = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFilters, tslib_1.__assign({}, props, { ref: ref, "icon-role": "filters" }))));
});
var templateObject_1;
//# sourceMappingURL=Filters.js.map