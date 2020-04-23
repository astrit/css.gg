"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledUndo = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;border:2px solid;border-left-color:transparent;border-radius:100px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-left:2px solid;top:-3px;left:-1px;transform:rotate(-68deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;border:2px solid;border-left-color:transparent;border-radius:100px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-left:2px solid;top:-3px;left:-1px;transform:rotate(-68deg)}\n"])));
exports.Undo = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledUndo, tslib_1.__assign({}, props, { ref: ref, "icon-role": "undo" }))));
});
var templateObject_1;
//# sourceMappingURL=Undo.js.map