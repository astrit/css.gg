"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledGenderMale = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px;border:2px solid;border-radius:100%;margin-left:-4px;margin-top:4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:8px;top:-6px}&::after{border-right:2px solid;border-top:2px solid;width:7px;height:7px;left:5px}&::before{width:2px;background:currentColor;left:7px;transform:rotate(45deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px;border:2px solid;border-radius:100%;margin-left:-4px;margin-top:4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:8px;top:-6px}&::after{border-right:2px solid;border-top:2px solid;width:7px;height:7px;left:5px}&::before{width:2px;background:currentColor;left:7px;transform:rotate(45deg)}\n"])));
exports.GenderMale = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledGenderMale, tslib_1.__assign({}, props, { ref: ref, "icon-role": "gender-male" }))));
});
var templateObject_1;
//# sourceMappingURL=GenderMale.js.map