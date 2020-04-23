"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMenuBoxed = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border-radius:3px;border:2px solid;}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:3px;top:2px;left:2px;box-shadow:0 4px 0,0 8px 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border-radius:3px;border:2px solid;}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:3px;top:2px;left:2px;box-shadow:0 4px 0,0 8px 0}\n"])));
exports.MenuBoxed = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMenuBoxed, tslib_1.__assign({}, props, { ref: ref, "icon-role": "menu-boxed" }))));
});
var templateObject_1;
//# sourceMappingURL=MenuBoxed.js.map