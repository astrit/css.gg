"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledAlignRight = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;height:12px;width:12px;border-right:2px solid;transform:scale(var(--ggs,1));margin-right:-4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:4px;width:12px;background:currentColor;right:2px;top:1px}&::after{width:6px;top:7px;opacity:.5}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;height:12px;width:12px;border-right:2px solid;transform:scale(var(--ggs,1));margin-right:-4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:4px;width:12px;background:currentColor;right:2px;top:1px}&::after{width:6px;top:7px;opacity:.5}\n"])));
exports.AlignRight = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledAlignRight, tslib_1.__assign({}, props, { ref: ref, "icon-role": "align-right" }))));
});
var templateObject_1;
//# sourceMappingURL=AlignRight.js.map