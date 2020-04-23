"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledLaptop = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:12px;border:2px solid;border-radius:2px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:22px;height:2px;background:currentColor;left:-4px;bottom:-5px;border-radius:100px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:12px;border:2px solid;border-radius:2px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:22px;height:2px;background:currentColor;left:-4px;bottom:-5px;border-radius:100px}\n"])));
exports.Laptop = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledLaptop, tslib_1.__assign({}, props, { ref: ref, "icon-role": "laptop" }))));
});
var templateObject_1;
//# sourceMappingURL=Laptop.js.map