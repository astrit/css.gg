"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDetailsMore = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:14px;border:2px solid transparent}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:2px;border-radius:3px;background:currentColor}&::before{box-shadow:0 4px 0 0;top:0;width:16px}&::after{width:10px;bottom:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:14px;border:2px solid transparent}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:2px;border-radius:3px;background:currentColor}&::before{box-shadow:0 4px 0 0;top:0;width:16px}&::after{width:10px;bottom:0}\n"])));
exports.DetailsMore = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDetailsMore, tslib_1.__assign({}, props, { ref: ref, "icon-role": "details-more" }))));
});
var templateObject_1;
//# sourceMappingURL=DetailsMore.js.map