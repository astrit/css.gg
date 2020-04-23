"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledInstagram = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:4px;width:20px;height:20px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{border:2px solid;left:3px;width:10px;height:10px;border-radius:100%;top:3px}&::before{border-radius:3px;width:2px;height:2px;background:currentColor;right:1px;top:1px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:4px;width:20px;height:20px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{border:2px solid;left:3px;width:10px;height:10px;border-radius:100%;top:3px}&::before{border-radius:3px;width:2px;height:2px;background:currentColor;right:1px;top:1px}\n"])));
exports.Instagram = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledInstagram, tslib_1.__assign({}, props, { ref: ref, "icon-role": "instagram" }))));
});
var templateObject_1;
//# sourceMappingURL=Instagram.js.map