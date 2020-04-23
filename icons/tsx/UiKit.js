"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledUiKit = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box}&{position:relative;transform:scale(var(--ggs,1));width:10px;height:16px;border-radius:3px;border:2px solid}&::after,&::before{content:\"\";position:absolute;border:2px solid;width:6px;height:12px}&::before{border-right:0;border-top-left-radius:3px;border-bottom-left-radius:3px;transform:perspective(10px)rotateY(30deg);left:-8px}&::after{border-top-right-radius:3px;border-bottom-right-radius:3px;transform:perspective(10px)rotateY(-30deg);border-left:0;right:-8px}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box}&{position:relative;transform:scale(var(--ggs,1));width:10px;height:16px;border-radius:3px;border:2px solid}&::after,&::before{content:\"\";position:absolute;border:2px solid;width:6px;height:12px}&::before{border-right:0;border-top-left-radius:3px;border-bottom-left-radius:3px;transform:perspective(10px)rotateY(30deg);left:-8px}&::after{border-top-right-radius:3px;border-bottom-right-radius:3px;transform:perspective(10px)rotateY(-30deg);border-left:0;right:-8px}\n"])));
exports.UiKit = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledUiKit, tslib_1.__assign({}, props, { ref: ref, "icon-role": "ui-kit" }))));
});
var templateObject_1;
//# sourceMappingURL=UiKit.js.map