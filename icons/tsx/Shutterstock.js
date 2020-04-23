"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledShutterstock = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-radius:1px}&::before{border-bottom:2px solid;border-right:2px solid;bottom:2px;right:2px}&::after{border-top:2px solid;border-left:2px solid;top:2px;left:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-radius:1px}&::before{border-bottom:2px solid;border-right:2px solid;bottom:2px;right:2px}&::after{border-top:2px solid;border-left:2px solid;top:2px;left:2px}\n"])));
exports.Shutterstock = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledShutterstock, tslib_1.__assign({}, props, { ref: ref, "icon-role": "shutterstock" }))));
});
var templateObject_1;
//# sourceMappingURL=Shutterstock.js.map