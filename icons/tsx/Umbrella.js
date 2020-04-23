"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledUmbrella = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;box-sizing:border-box;transform:scale(var(--ggs,1));position:relative;width:22px;height:22px;background:linear-gradient(to bottom,currentColor 20px,transparent 0)no-repeat center 10px/2px 8px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border:2px solid}&::before{width:16px;height:10px;left:3px;border-top-left-radius:12px;border-top-right-radius:12px}&::after{width:6px;height:5px;border-top:0;border-bottom-left-radius:12px;border-bottom-right-radius:12px;bottom:0;left:6px}\n"], ["\n  &{display:block;box-sizing:border-box;transform:scale(var(--ggs,1));position:relative;width:22px;height:22px;background:linear-gradient(to bottom,currentColor 20px,transparent 0)no-repeat center 10px/2px 8px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border:2px solid}&::before{width:16px;height:10px;left:3px;border-top-left-radius:12px;border-top-right-radius:12px}&::after{width:6px;height:5px;border-top:0;border-bottom-left-radius:12px;border-bottom-right-radius:12px;bottom:0;left:6px}\n"])));
exports.Umbrella = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledUmbrella, tslib_1.__assign({}, props, { ref: ref, "icon-role": "umbrella" }))));
});
var templateObject_1;
//# sourceMappingURL=Umbrella.js.map