"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFlag = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:18px;border-left:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px}&::before{border-top:2px solid;border-bottom:2px solid}&::after{border:2px solid;border-left:0;top:2px;left:7px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:18px;border-left:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px}&::before{border-top:2px solid;border-bottom:2px solid}&::after{border:2px solid;border-left:0;top:2px;left:7px}\n"])));
exports.Flag = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFlag, tslib_1.__assign({}, props, { ref: ref, "icon-role": "flag" }))));
});
var templateObject_1;
//# sourceMappingURL=Flag.js.map