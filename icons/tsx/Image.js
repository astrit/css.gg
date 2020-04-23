"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledImage = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:16px;overflow:hidden;box-shadow:0 0 0 2px;border-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border:2px solid}&::after{transform:rotate(45deg);border-radius:3px;width:16px;height:16px;top:9px;left:6px}&::before{width:6px;height:6px;border-radius:100%;top:2px;left:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:16px;overflow:hidden;box-shadow:0 0 0 2px;border-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border:2px solid}&::after{transform:rotate(45deg);border-radius:3px;width:16px;height:16px;top:9px;left:6px}&::before{width:6px;height:6px;border-radius:100%;top:2px;left:2px}\n"])));
exports.Image = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledImage, tslib_1.__assign({}, props, { ref: ref, "icon-role": "image" }))));
});
var templateObject_1;
//# sourceMappingURL=Image.js.map