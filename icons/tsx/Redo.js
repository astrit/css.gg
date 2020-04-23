"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledRedo = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;border:2px solid;border-right-color:transparent;border-radius:100px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-right:2px solid;top:-3px;right:-1px;transform:rotate(68deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;border:2px solid;border-right-color:transparent;border-radius:100px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-right:2px solid;top:-3px;right:-1px;transform:rotate(68deg)}\n"])));
exports.Redo = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledRedo, tslib_1.__assign({}, props, { ref: ref, "icon-role": "redo" }))));
});
var templateObject_1;
//# sourceMappingURL=Redo.js.map