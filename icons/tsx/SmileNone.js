"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSmileNone = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:2px;background:currentColor;left:4px}&::before{box-shadow:5px 0 0;width:3px;border-radius:10px;top:5px}&::after{border-radius:3px;width:8px;top:10px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:2px;background:currentColor;left:4px}&::before{box-shadow:5px 0 0;width:3px;border-radius:10px;top:5px}&::after{border-radius:3px;width:8px;top:10px}\n"])));
exports.SmileNone = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSmileNone, tslib_1.__assign({}, props, { ref: ref, "icon-role": "smile-none" }))));
});
var templateObject_1;
//# sourceMappingURL=SmileNone.js.map