"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBriefcase = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:16px;border:2px solid;border-radius:2px;margin-top:1px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border:2px solid;border-top-left-radius:1px;border-top-right-radius:1px;left:4px;width:10px;height:4px;border-bottom:0;top:-5px}&::after{width:18px;height:3px;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:1px solid transparent;box-shadow:0 2px 0,inset 16px 74px 0;top:4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:16px;border:2px solid;border-radius:2px;margin-top:1px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border:2px solid;border-top-left-radius:1px;border-top-right-radius:1px;left:4px;width:10px;height:4px;border-bottom:0;top:-5px}&::after{width:18px;height:3px;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:1px solid transparent;box-shadow:0 2px 0,inset 16px 74px 0;top:4px}\n"])));
exports.Briefcase = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBriefcase, tslib_1.__assign({}, props, { ref: ref, "icon-role": "briefcase" }))));
});
var templateObject_1;
//# sourceMappingURL=Briefcase.js.map