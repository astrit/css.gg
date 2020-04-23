"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledReorder = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:2px;border-radius:3px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px}&::before{border:2px solid;width:6px;height:6px;left:12px;top:-2px}&::after{top:-4px;left:0;width:10px;height:2px;opacity:.5;background:currentColor;box-shadow:0 8px 0 0,0 12px 0 0,0 16px 0 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:2px;border-radius:3px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px}&::before{border:2px solid;width:6px;height:6px;left:12px;top:-2px}&::after{top:-4px;left:0;width:10px;height:2px;opacity:.5;background:currentColor;box-shadow:0 8px 0 0,0 12px 0 0,0 16px 0 0}\n"])));
exports.Reorder = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledReorder, tslib_1.__assign({}, props, { ref: ref, "icon-role": "reorder" }))));
});
var templateObject_1;
//# sourceMappingURL=Reorder.js.map