"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledViewComfortable = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:20px;height:14px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;background:currentColor}&::after{width:2px;height:8px;bottom:-2px;left:4px}&::before{width:20px;height:2px;left:-2px;top:4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:20px;height:14px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;background:currentColor}&::after{width:2px;height:8px;bottom:-2px;left:4px}&::before{width:20px;height:2px;left:-2px;top:4px}\n"])));
exports.ViewComfortable = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledViewComfortable, tslib_1.__assign({}, props, { ref: ref, "icon-role": "view-comfortable" }))));
});
var templateObject_1;
//# sourceMappingURL=ViewComfortable.js.map