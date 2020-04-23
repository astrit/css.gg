"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledGhostCharacter = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:18px;border:2px solid;border-bottom:0;border-top-left-radius:22px;border-top-right-radius:22px;overflow:hidden;background:radial-gradient(circle,currentColor 60%,transparent 40%)no-repeat 2px 4px/2px 2px,radial-gradient(circle,currentColor 60%,transparent 40%)no-repeat 6px 4px/2px 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-right:2px solid;bottom:-3px;transform:rotate(-45deg)}&::before{left:-1px}&::after{right:-1px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:18px;border:2px solid;border-bottom:0;border-top-left-radius:22px;border-top-right-radius:22px;overflow:hidden;background:radial-gradient(circle,currentColor 60%,transparent 40%)no-repeat 2px 4px/2px 2px,radial-gradient(circle,currentColor 60%,transparent 40%)no-repeat 6px 4px/2px 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-right:2px solid;bottom:-3px;transform:rotate(-45deg)}&::before{left:-1px}&::after{right:-1px}\n"])));
exports.GhostCharacter = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledGhostCharacter, tslib_1.__assign({}, props, { ref: ref, "icon-role": "ghost-character" }))));
});
var templateObject_1;
//# sourceMappingURL=GhostCharacter.js.map