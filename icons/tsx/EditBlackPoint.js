"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledEditBlackPoint = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:100px;overflow:hidden}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border:3px solid;border-radius:6px;left:2px;top:2px;}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:100px;overflow:hidden}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border:3px solid;border-radius:6px;left:2px;top:2px;}\n"])));
exports.EditBlackPoint = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledEditBlackPoint, tslib_1.__assign({}, props, { ref: ref, "icon-role": "edit-black-point" }))));
});
var templateObject_1;
//# sourceMappingURL=EditBlackPoint.js.map