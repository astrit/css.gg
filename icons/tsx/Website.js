"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledWebsite = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:18px;border:2px solid;border-radius:3px;box-shadow:0 -1px 0}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;top:2px}&::before{background:currentColor;left:2px;box-shadow:0 4px 0,0 8px 0;border-radius:3px;height:2px}&::after{height:10px;border:2px solid;right:2px;border-radius:1px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:18px;border:2px solid;border-radius:3px;box-shadow:0 -1px 0}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;top:2px}&::before{background:currentColor;left:2px;box-shadow:0 4px 0,0 8px 0;border-radius:3px;height:2px}&::after{height:10px;border:2px solid;right:2px;border-radius:1px}\n"])));
exports.Website = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledWebsite, tslib_1.__assign({}, props, { ref: ref, "icon-role": "website" }))));
});
var templateObject_1;
//# sourceMappingURL=Website.js.map