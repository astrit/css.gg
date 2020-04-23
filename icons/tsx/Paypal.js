"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPaypal = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{position:relative;box-sizing:border-box;display:block;width:16px;height:18px;transform:skew(-10deg)scale(var(--ggs,1));background:linear-gradient(to left,currentColor 20px,transparent 0)no-repeat 3px bottom/4px 2px,linear-gradient(to left,currentColor 20px,transparent 0)no-repeat 5px bottom/3px 10px}&::after,&::before{content:\"\";box-sizing:border-box;display:block;position:absolute;border:2px solid}&::before{width:8px;height:10px;border-top-right-radius:10px;border-bottom-right-radius:10px;border-left:0;left:5px;box-shadow:2px 2px 0}&::after{width:6px;height:16px;border-right:0}\n"], ["\n  &{position:relative;box-sizing:border-box;display:block;width:16px;height:18px;transform:skew(-10deg)scale(var(--ggs,1));background:linear-gradient(to left,currentColor 20px,transparent 0)no-repeat 3px bottom/4px 2px,linear-gradient(to left,currentColor 20px,transparent 0)no-repeat 5px bottom/3px 10px}&::after,&::before{content:\"\";box-sizing:border-box;display:block;position:absolute;border:2px solid}&::before{width:8px;height:10px;border-top-right-radius:10px;border-bottom-right-radius:10px;border-left:0;left:5px;box-shadow:2px 2px 0}&::after{width:6px;height:16px;border-right:0}\n"])));
exports.Paypal = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPaypal, tslib_1.__assign({}, props, { ref: ref, "icon-role": "paypal" }))));
});
var templateObject_1;
//# sourceMappingURL=Paypal.js.map