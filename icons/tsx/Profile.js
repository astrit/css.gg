"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledProfile = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;border:2px solid;border-radius:100px}&{overflow:hidden;transform:scale(var(--ggs,1));width:22px;height:22px;position:relative}&::after,&::before{content:\"\";position:absolute;top:2px;left:5px;width:8px;height:8px}&::after{border-radius:200px;top:11px;left:0px;width:18px;height:18px}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;border:2px solid;border-radius:100px}&{overflow:hidden;transform:scale(var(--ggs,1));width:22px;height:22px;position:relative}&::after,&::before{content:\"\";position:absolute;top:2px;left:5px;width:8px;height:8px}&::after{border-radius:200px;top:11px;left:0px;width:18px;height:18px}\n"])));
exports.Profile = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledProfile, tslib_1.__assign({}, props, { ref: ref, "icon-role": "profile" }))));
});
var templateObject_1;
//# sourceMappingURL=Profile.js.map