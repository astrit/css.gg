"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDuplicate = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px;border:2px solid transparent;border-bottom:4px solid transparent;box-shadow:0 0 0 2px,inset 0 -2px 0 0;margin-left:-4px;margin-top:4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:currentColor;left:2px;bottom:-2px;width:2px;height:6px}&::after{width:14px;height:14px;border-right:2px solid;border-top:2px solid;right:-8px;top:-8px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px;border:2px solid transparent;border-bottom:4px solid transparent;box-shadow:0 0 0 2px,inset 0 -2px 0 0;margin-left:-4px;margin-top:4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:currentColor;left:2px;bottom:-2px;width:2px;height:6px}&::after{width:14px;height:14px;border-right:2px solid;border-top:2px solid;right:-8px;top:-8px}\n"])));
exports.Duplicate = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDuplicate, tslib_1.__assign({}, props, { ref: ref, "icon-role": "duplicate" }))));
});
var templateObject_1;
//# sourceMappingURL=Duplicate.js.map