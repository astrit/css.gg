"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSize = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:16px;height:16px;transform:scale(var(--ggs,1));border-left:8px solid transparent;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:12px;border:2px solid;border-right:0;right:6px;top:2px}&::before{width:4px;height:8px;right:12px;top:4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:16px;height:16px;transform:scale(var(--ggs,1));border-left:8px solid transparent;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:12px;border:2px solid;border-right:0;right:6px;top:2px}&::before{width:4px;height:8px;right:12px;top:4px}\n"])));
exports.Size = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSize, tslib_1.__assign({}, props, { ref: ref, "icon-role": "size" }))));
});
var templateObject_1;
//# sourceMappingURL=Size.js.map