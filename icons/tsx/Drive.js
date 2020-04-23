"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDrive = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:26px;height:10px;border:2px solid;border-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:2px;border-radius:10px;background:currentColor;top:2px;right:2px}&::before{right:6px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:26px;height:10px;border:2px solid;border-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:2px;border-radius:10px;background:currentColor;top:2px;right:2px}&::before{right:6px}\n"])));
exports.Drive = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDrive, tslib_1.__assign({}, props, { ref: ref, "icon-role": "drive" }))));
});
var templateObject_1;
//# sourceMappingURL=Drive.js.map