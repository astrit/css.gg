"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledAssign = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:6px;height:6px;background:currentColor;transform:scale(var(--ggs,1));border-radius:100px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:12px;height:12px;box-shadow:-5px -5px 0 -3px,5px 5px 0 -3px,5px -5px 0 -3px,-5px 5px 0 -3px;left:-3px;top:-3px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:6px;height:6px;background:currentColor;transform:scale(var(--ggs,1));border-radius:100px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:12px;height:12px;box-shadow:-5px -5px 0 -3px,5px 5px 0 -3px,5px -5px 0 -3px,-5px 5px 0 -3px;left:-3px;top:-3px}\n"])));
exports.Assign = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledAssign, tslib_1.__assign({}, props, { ref: ref, "icon-role": "assign" }))));
});
var templateObject_1;
//# sourceMappingURL=Assign.js.map