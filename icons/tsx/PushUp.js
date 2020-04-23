"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPushUp = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:16px;background:currentColor;}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:12px;height:2px;border-top:2px solid;top:-5px;left:-5px}&::after{width:8px;height:8px;border-left:2px solid;transform:rotate(45deg);left:-3px;top:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:16px;background:currentColor;}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:12px;height:2px;border-top:2px solid;top:-5px;left:-5px}&::after{width:8px;height:8px;border-left:2px solid;transform:rotate(45deg);left:-3px;top:0}\n"])));
exports.PushUp = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPushUp, tslib_1.__assign({}, props, { ref: ref, "icon-role": "push-up" }))));
});
var templateObject_1;
//# sourceMappingURL=PushUp.js.map