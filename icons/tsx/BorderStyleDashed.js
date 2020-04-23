"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBorderStyleDashed = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1));}&,&::before{box-sizing:border-box;position:relative;display:block;width:26px;height:17px}&::before{content:\"\";position:absolute;height:2px;top:7px;border-top:2px dashed}\n"], ["\n  &{transform:scale(var(--ggs,1));}&,&::before{box-sizing:border-box;position:relative;display:block;width:26px;height:17px}&::before{content:\"\";position:absolute;height:2px;top:7px;border-top:2px dashed}\n"])));
exports.BorderStyleDashed = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBorderStyleDashed, tslib_1.__assign({}, props, { ref: ref, "icon-role": "border-style-dashed" }))));
});
var templateObject_1;
//# sourceMappingURL=BorderStyleDashed.js.map