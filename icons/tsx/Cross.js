"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCross = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:10px;height:2px;border-radius:3px;background:currentColor}&::after{content:\"\";position:absolute;width:2px;height:12px;top:-4px;left:4px}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:10px;height:2px;border-radius:3px;background:currentColor}&::after{content:\"\";position:absolute;width:2px;height:12px;top:-4px;left:4px}\n"])));
exports.Cross = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCross, tslib_1.__assign({}, props, { ref: ref, "icon-role": "cross" }))));
});
var templateObject_1;
//# sourceMappingURL=Cross.js.map