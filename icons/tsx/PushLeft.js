"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPushLeft = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:2px;background:currentColor;}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:12px;border-left:2px solid;left:-5px;top:-5px}&::after{width:8px;height:8px;border-bottom:2px solid;transform:rotate(45deg);top:-3px;left:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:2px;background:currentColor;}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:12px;border-left:2px solid;left:-5px;top:-5px}&::after{width:8px;height:8px;border-bottom:2px solid;transform:rotate(45deg);top:-3px;left:0}\n"])));
exports.PushLeft = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPushLeft, tslib_1.__assign({}, props, { ref: ref, "icon-role": "push-left" }))));
});
var templateObject_1;
//# sourceMappingURL=PushLeft.js.map