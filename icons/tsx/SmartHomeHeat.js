"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSmartHomeHeat = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:24px;height:14px;border:2px solid;border-radius:22px;background:linear-gradient(to left,currentColor 24px,transparent 0) no-repeat center 2px/10px 2px}&::after,&::before{content:\"\";position:absolute;display:block;box-sizing:border-box;width:6px;height:6px;border:2px solid;top:2px}&::before{border-right:0;border-top-left-radius:22px;border-bottom-left-radius:22px;left:2px}&::after{border-left:0;border-top-right-radius:22px;border-bottom-right-radius:22px;right:2px}\n"], ["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:24px;height:14px;border:2px solid;border-radius:22px;background:linear-gradient(to left,currentColor 24px,transparent 0) no-repeat center 2px/10px 2px}&::after,&::before{content:\"\";position:absolute;display:block;box-sizing:border-box;width:6px;height:6px;border:2px solid;top:2px}&::before{border-right:0;border-top-left-radius:22px;border-bottom-left-radius:22px;left:2px}&::after{border-left:0;border-top-right-radius:22px;border-bottom-right-radius:22px;right:2px}\n"])));
exports.SmartHomeHeat = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSmartHomeHeat, tslib_1.__assign({}, props, { ref: ref, "icon-role": "smart-home-heat" }))));
});
var templateObject_1;
//# sourceMappingURL=SmartHomeHeat.js.map