"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCollage = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:20px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:20px;background:currentColor;left:5px;top:-2px}&::after{width:9px;height:2px;left:-2px;top:4px;box-shadow:7px 5px 0 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:20px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:20px;background:currentColor;left:5px;top:-2px}&::after{width:9px;height:2px;left:-2px;top:4px;box-shadow:7px 5px 0 0}\n"])));
exports.Collage = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCollage, tslib_1.__assign({}, props, { ref: ref, "icon-role": "collage" }))));
});
var templateObject_1;
//# sourceMappingURL=Collage.js.map