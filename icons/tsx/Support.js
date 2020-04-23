"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSupport = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:20px;height:20px;transform:rotate(45deg) scale(var(--ggs,1));border:5px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 2px;border-radius:40px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border-left:9px solid;border-right:9px solid;width:24px;height:2px;left:-7px;top:4px}&::after{width:2px;height:24px;border-top:9px solid;border-bottom:9px solid;left:4px;top:-7px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:20px;height:20px;transform:rotate(45deg) scale(var(--ggs,1));border:5px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 2px;border-radius:40px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border-left:9px solid;border-right:9px solid;width:24px;height:2px;left:-7px;top:4px}&::after{width:2px;height:24px;border-top:9px solid;border-bottom:9px solid;left:4px;top:-7px}\n"])));
exports.Support = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSupport, tslib_1.__assign({}, props, { ref: ref, "icon-role": "support" }))));
});
var templateObject_1;
//# sourceMappingURL=Support.js.map