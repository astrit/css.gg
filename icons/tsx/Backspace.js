"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBackspace = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;transform:scale(var(--ggs,1));border:2px solid;border-left:0;border-top-right-radius:2px;border-bottom-right-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:linear-gradient( to left,currentColor 18px,transparent 0)no-repeat center center/10px 2px;border-right:3px solid transparent;box-shadow:inset 0 0 0 2px;right:2px;bottom:1px;width:8px;height:8px;border-left:3px solid transparent;transform:rotate(45deg)}&::after{width:10px;height:10px;border-top:2px solid;border-left:2px solid;border-top-left-radius:1px;transform:rotate(-45deg);top:0;left:-5px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;transform:scale(var(--ggs,1));border:2px solid;border-left:0;border-top-right-radius:2px;border-bottom-right-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:linear-gradient( to left,currentColor 18px,transparent 0)no-repeat center center/10px 2px;border-right:3px solid transparent;box-shadow:inset 0 0 0 2px;right:2px;bottom:1px;width:8px;height:8px;border-left:3px solid transparent;transform:rotate(45deg)}&::after{width:10px;height:10px;border-top:2px solid;border-left:2px solid;border-top-left-radius:1px;transform:rotate(-45deg);top:0;left:-5px}\n"])));
exports.Backspace = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBackspace, tslib_1.__assign({}, props, { ref: ref, "icon-role": "backspace" }))));
});
var templateObject_1;
//# sourceMappingURL=Backspace.js.map