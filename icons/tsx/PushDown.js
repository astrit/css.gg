"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPushDown = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:16px;background:currentColor;}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:12px;height:2px;border-bottom:2px solid;bottom:-5px;left:-5px}&::after{width:8px;height:8px;border-right:2px solid;transform:rotate(45deg);left:-3px;bottom:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:16px;background:currentColor;}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:12px;height:2px;border-bottom:2px solid;bottom:-5px;left:-5px}&::after{width:8px;height:8px;border-right:2px solid;transform:rotate(45deg);left:-3px;bottom:0}\n"])));
exports.PushDown = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPushDown, tslib_1.__assign({}, props, { ref: ref, "icon-role": "push-down" }))));
});
var templateObject_1;
//# sourceMappingURL=PushDown.js.map