"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTwitter = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;left:4px}&::before{width:9px;height:14px;border-left:4px solid;border-bottom:4px solid;border-bottom-left-radius:6px;background:linear-gradient(to left,currentColor 12px,transparent 0)no-repeat center 2px/10px 4px;top:4px}&::after{width:4px;height:4px;background:currentColor;border-radius:20px;top:2px;box-shadow:7px 4px 0,7px 12px 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;left:4px}&::before{width:9px;height:14px;border-left:4px solid;border-bottom:4px solid;border-bottom-left-radius:6px;background:linear-gradient(to left,currentColor 12px,transparent 0)no-repeat center 2px/10px 4px;top:4px}&::after{width:4px;height:4px;background:currentColor;border-radius:20px;top:2px;box-shadow:7px 4px 0,7px 12px 0}\n"])));
exports.Twitter = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTwitter, tslib_1.__assign({}, props, { ref: ref, "icon-role": "twitter" }))));
});
var templateObject_1;
//# sourceMappingURL=Twitter.js.map