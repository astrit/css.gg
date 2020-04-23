"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTrashEmpty = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:12px;border:2px solid transparent;box-shadow:0 0 0 2px;border-bottom-left-radius:1px;border-bottom-right-radius:1px;margin-top:4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{background:currentColor;border-radius:3px;width:16px;height:2px;top:-4px;left:-5px}&::before{width:10px;height:4px;border:2px solid;border-bottom:transparent;border-top-left-radius:2px;border-top-right-radius:2px;top:-7px;left:-2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:12px;border:2px solid transparent;box-shadow:0 0 0 2px;border-bottom-left-radius:1px;border-bottom-right-radius:1px;margin-top:4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{background:currentColor;border-radius:3px;width:16px;height:2px;top:-4px;left:-5px}&::before{width:10px;height:4px;border:2px solid;border-bottom:transparent;border-top-left-radius:2px;border-top-right-radius:2px;top:-7px;left:-2px}\n"])));
exports.TrashEmpty = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTrashEmpty, tslib_1.__assign({}, props, { ref: ref, "icon-role": "trash-empty" }))));
});
var templateObject_1;
//# sourceMappingURL=TrashEmpty.js.map