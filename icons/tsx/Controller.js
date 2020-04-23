"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledController = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:8px;border:2px solid;border-radius:100px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:14px;height:14px;box-shadow:-6px -6px 0 -4px,6px 6px 0 -4px,6px -6px 0 -4px,-6px 6px 0 -4px;left:-5px;top:-5px;transform:rotate(45deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:8px;border:2px solid;border-radius:100px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:14px;height:14px;box-shadow:-6px -6px 0 -4px,6px 6px 0 -4px,6px -6px 0 -4px,-6px 6px 0 -4px;left:-5px;top:-5px;transform:rotate(45deg)}\n"])));
exports.Controller = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledController, tslib_1.__assign({}, props, { ref: ref, "icon-role": "controller" }))));
});
var templateObject_1;
//# sourceMappingURL=Controller.js.map