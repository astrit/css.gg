"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledGlass = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:13px;border-top:8px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;box-shadow:inset 0 0 0 2px,0 2px 0 0}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border:2px solid;border-bottom-left-radius:100px;border-bottom-right-radius:100px;left:-4px;bottom:3px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:13px;border-top:8px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;box-shadow:inset 0 0 0 2px,0 2px 0 0}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border:2px solid;border-bottom-left-radius:100px;border-bottom-right-radius:100px;left:-4px;bottom:3px}\n"])));
exports.Glass = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledGlass, tslib_1.__assign({}, props, { ref: ref, "icon-role": "glass" }))));
});
var templateObject_1;
//# sourceMappingURL=Glass.js.map