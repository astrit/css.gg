"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTally = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:skew(-10deg) scale(var(--ggs,1));width:18px;height:20px}&::after,&::before{content:\"\";position:absolute;box-sizing:border-box;display:block;width:3px;background:currentColor;border-radius:.5px}&::before{height:20px;box-shadow:5px 0 0;left:5px}&::after{height:8px;box-shadow:15px 0 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:skew(-10deg) scale(var(--ggs,1));width:18px;height:20px}&::after,&::before{content:\"\";position:absolute;box-sizing:border-box;display:block;width:3px;background:currentColor;border-radius:.5px}&::before{height:20px;box-shadow:5px 0 0;left:5px}&::after{height:8px;box-shadow:15px 0 0}\n"])));
exports.Tally = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTally, tslib_1.__assign({}, props, { ref: ref, "icon-role": "tally" }))));
});
var templateObject_1;
//# sourceMappingURL=Tally.js.map