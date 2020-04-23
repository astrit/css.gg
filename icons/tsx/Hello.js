"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledHello = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));overflow:hidden;width:20px;height:20px;border-radius:6px;border-bottom-left-radius:0}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box}&::before{width:30px;height:30px;border:8px solid;left:-5px;top:-5px;border-radius:30px}&::after{width:10px;height:5px;background:currentColor;border-bottom-left-radius:30px;border-bottom-right-radius:30px;bottom:5px;left:5px}\n"], ["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));overflow:hidden;width:20px;height:20px;border-radius:6px;border-bottom-left-radius:0}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box}&::before{width:30px;height:30px;border:8px solid;left:-5px;top:-5px;border-radius:30px}&::after{width:10px;height:5px;background:currentColor;border-bottom-left-radius:30px;border-bottom-right-radius:30px;bottom:5px;left:5px}\n"])));
exports.Hello = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledHello, tslib_1.__assign({}, props, { ref: ref, "icon-role": "hello" }))));
});
var templateObject_1;
//# sourceMappingURL=Hello.js.map