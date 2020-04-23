"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledViewSplit = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:20px;height:14px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:12px;top:-2px;left:7px;background:currentColor}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:20px;height:14px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:12px;top:-2px;left:7px;background:currentColor}\n"])));
exports.ViewSplit = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledViewSplit, tslib_1.__assign({}, props, { ref: ref, "icon-role": "view-split" }))));
});
var templateObject_1;
//# sourceMappingURL=ViewSplit.js.map