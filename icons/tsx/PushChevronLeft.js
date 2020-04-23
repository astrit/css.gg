"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPushChevronLeft = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid transparent;border-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:14px;border-left:2px solid;top:2px;left:0}&::after{width:10px;height:10px;border-bottom:2px solid;transform:rotate(45deg);left:6px;top:4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid transparent;border-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:14px;border-left:2px solid;top:2px;left:0}&::after{width:10px;height:10px;border-bottom:2px solid;transform:rotate(45deg);left:6px;top:4px}\n"])));
exports.PushChevronLeft = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPushChevronLeft, tslib_1.__assign({}, props, { ref: ref, "icon-role": "push-chevron-left" }))));
});
var templateObject_1;
//# sourceMappingURL=PushChevronLeft.js.map