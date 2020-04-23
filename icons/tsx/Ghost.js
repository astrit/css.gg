"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledGhost = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:16px;background:linear-gradient(to left,currentColor 40px,transparent 0)no-repeat -6px center/40px 4px;overflow:hidden}&::after,&::before{content:\"\";background:currentColor;box-sizing:border-box;position:absolute;display:block;height:4px;width:12px;box-shadow:14px 0 0}&::after{width:20px;left:-12px;box-shadow:22px 0 0;bottom:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:16px;background:linear-gradient(to left,currentColor 40px,transparent 0)no-repeat -6px center/40px 4px;overflow:hidden}&::after,&::before{content:\"\";background:currentColor;box-sizing:border-box;position:absolute;display:block;height:4px;width:12px;box-shadow:14px 0 0}&::after{width:20px;left:-12px;box-shadow:22px 0 0;bottom:0}\n"])));
exports.Ghost = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledGhost, tslib_1.__assign({}, props, { ref: ref, "icon-role": "ghost" }))));
});
var templateObject_1;
//# sourceMappingURL=Ghost.js.map