"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBrowser = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:18px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:22px;height:2px;background:currentColor;top:4px}&::after{border-radius:3px;width:2px;box-shadow:3px 0 0,6px 0 0;top:1px;left:1px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:18px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:22px;height:2px;background:currentColor;top:4px}&::after{border-radius:3px;width:2px;box-shadow:3px 0 0,6px 0 0;top:1px;left:1px}\n"])));
exports.Browser = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBrowser, tslib_1.__assign({}, props, { ref: ref, "icon-role": "browser" }))));
});
var templateObject_1;
//# sourceMappingURL=Browser.js.map