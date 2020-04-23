"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledInsertBeforeR = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:4px}&::before{box-shadow:-2px -12px 0,2px -12px 0;}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:2px;background:currentColor;border-radius:5px;top:5px;left:2px}&::after{width:2px;height:8px;top:2px;left:5px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:4px}&::before{box-shadow:-2px -12px 0,2px -12px 0;}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:2px;background:currentColor;border-radius:5px;top:5px;left:2px}&::after{width:2px;height:8px;top:2px;left:5px}\n"])));
exports.InsertBeforeR = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledInsertBeforeR, tslib_1.__assign({}, props, { ref: ref, "icon-role": "insert-before-r" }))));
});
var templateObject_1;
//# sourceMappingURL=InsertBeforeR.js.map