"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledShield = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:4px;background:currentColor;border-radius:100px;margin-top:-6px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:8px;height:16px;border:2px solid}&::before{border-bottom-left-radius:40px;border-right:0;left:0}&::after{border-bottom-right-radius:40px;border-left:0;right:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:4px;background:currentColor;border-radius:100px;margin-top:-6px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:8px;height:16px;border:2px solid}&::before{border-bottom-left-radius:40px;border-right:0;left:0}&::after{border-bottom-right-radius:40px;border-left:0;right:0}\n"])));
exports.Shield = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledShield, tslib_1.__assign({}, props, { ref: ref, "icon-role": "shield" }))));
});
var templateObject_1;
//# sourceMappingURL=Shield.js.map