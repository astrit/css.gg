"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledClose = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid transparent;border-radius:40px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:16px;height:2px;background:currentColor;transform:rotate(45deg);border-radius:5px;top:8px;left:1px}&::after{transform:rotate(-45deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid transparent;border-radius:40px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:16px;height:2px;background:currentColor;transform:rotate(45deg);border-radius:5px;top:8px;left:1px}&::after{transform:rotate(-45deg)}\n"])));
exports.Close = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledClose, tslib_1.__assign({}, props, { ref: ref, "icon-role": "close" }))));
});
var templateObject_1;
//# sourceMappingURL=Close.js.map