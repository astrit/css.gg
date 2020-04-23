"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCommunity = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:21px;height:14px}&::after,&::before{content:\"\";display:block;position:absolute;border:2px solid;width:10px;height:10px;border-radius:22px}&::after{right:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:21px;height:14px}&::after,&::before{content:\"\";display:block;position:absolute;border:2px solid;width:10px;height:10px;border-radius:22px}&::after{right:0}\n"])));
exports.Community = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCommunity, tslib_1.__assign({}, props, { ref: ref, "icon-role": "community" }))));
});
var templateObject_1;
//# sourceMappingURL=Community.js.map