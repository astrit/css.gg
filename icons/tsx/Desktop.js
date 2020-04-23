"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDesktop = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:22px;height:18px;border:2px solid;border-radius:3px;overflow:hidden;}&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;width:22px;height:2px;background:currentColor;top:2px;left:-2px;}&::after{content:\"\";display:block;position:absolute;box-sizing:border-box;background:currentColor;width:2px;height:2px;border-radius:4px;bottom:2px;left:4px;box-shadow:4px 0 0,8px 0 0 ;}\n"], ["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:22px;height:18px;border:2px solid;border-radius:3px;overflow:hidden;}&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;width:22px;height:2px;background:currentColor;top:2px;left:-2px;}&::after{content:\"\";display:block;position:absolute;box-sizing:border-box;background:currentColor;width:2px;height:2px;border-radius:4px;bottom:2px;left:4px;box-shadow:4px 0 0,8px 0 0 ;}\n"])));
exports.Desktop = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDesktop, tslib_1.__assign({}, props, { ref: ref, "icon-role": "desktop" }))));
});
var templateObject_1;
//# sourceMappingURL=Desktop.js.map