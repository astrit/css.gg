"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFlagAlt = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:20px;border-left:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-bottom:2px solid}&::before{width:12px;height:10px;border-top:2px solid;border-right:2px solid transparent}&::after{width:8px;height:8px;border-left:2px solid;border-top-left-radius:2px;border-bottom-right-radius:2px;transform:rotate(45deg);top:1px;left:6px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:20px;border-left:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-bottom:2px solid}&::before{width:12px;height:10px;border-top:2px solid;border-right:2px solid transparent}&::after{width:8px;height:8px;border-left:2px solid;border-top-left-radius:2px;border-bottom-right-radius:2px;transform:rotate(45deg);top:1px;left:6px}\n"])));
exports.FlagAlt = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFlagAlt, tslib_1.__assign({}, props, { ref: ref, "icon-role": "flag-alt" }))));
});
var templateObject_1;
//# sourceMappingURL=FlagAlt.js.map