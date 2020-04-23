"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledAddR = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:5px;top:8px;left:4px}&::after{width:2px;height:10px;top:4px;left:8px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:5px;top:8px;left:4px}&::after{width:2px;height:10px;top:4px;left:8px}\n"])));
exports.AddR = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledAddR, tslib_1.__assign({}, props, { ref: ref, "icon-role": "add-r" }))));
});
var templateObject_1;
//# sourceMappingURL=AddR.js.map