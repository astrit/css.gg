"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledComment = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:16px;border:2px solid;border-bottom:0;box-shadow:-6px 8px 0 -6px,6px 8px 0 -6px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px}&::before{border:2px solid;border-top-color:transparent;border-bottom-left-radius:20px;right:4px;bottom:-6px;height:6px}&::after{height:2px;background:currentColor;box-shadow:0 4px 0 0;left:4px;top:4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:16px;border:2px solid;border-bottom:0;box-shadow:-6px 8px 0 -6px,6px 8px 0 -6px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px}&::before{border:2px solid;border-top-color:transparent;border-bottom-left-radius:20px;right:4px;bottom:-6px;height:6px}&::after{height:2px;background:currentColor;box-shadow:0 4px 0 0;left:4px;top:4px}\n"])));
exports.Comment = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledComment, tslib_1.__assign({}, props, { ref: ref, "icon-role": "comment" }))));
});
var templateObject_1;
//# sourceMappingURL=Comment.js.map