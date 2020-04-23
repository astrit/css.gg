"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledShoppingBag = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:20px;height:20px;border:2px solid;border-radius:3px}&::after{content:\"\";position:absolute;width:10px;height:6px;border-bottom-left-radius:120px;border-bottom-right-radius:120px;border-top:0;top:2px;left:3px}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:20px;height:20px;border:2px solid;border-radius:3px}&::after{content:\"\";position:absolute;width:10px;height:6px;border-bottom-left-radius:120px;border-bottom-right-radius:120px;border-top:0;top:2px;left:3px}\n"])));
exports.ShoppingBag = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledShoppingBag, tslib_1.__assign({}, props, { ref: ref, "icon-role": "shopping-bag" }))));
});
var templateObject_1;
//# sourceMappingURL=ShoppingBag.js.map