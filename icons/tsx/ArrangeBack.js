"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledArrangeBack = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));display:block;width:18px;height:18px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{width:10px;height:10px;border:2px solid;left:4px;top:4px}&::before{width:8px;height:8px;background:currentColor;box-shadow:10px 10px 0}\n"], ["\n  &{box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));display:block;width:18px;height:18px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{width:10px;height:10px;border:2px solid;left:4px;top:4px}&::before{width:8px;height:8px;background:currentColor;box-shadow:10px 10px 0}\n"])));
exports.ArrangeBack = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledArrangeBack, tslib_1.__assign({}, props, { ref: ref, "icon-role": "arrange-back" }))));
});
var templateObject_1;
//# sourceMappingURL=ArrangeBack.js.map