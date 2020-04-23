"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledGlassAlt = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::before{display:block;box-sizing:border-box;height:20px}&{position:relative;transform:scale(var(--ggs,1));width:14px}&::before{content:\"\";position:absolute;width:10px;border:2px solid;border-bottom:3px solid;transform:perspective(20px)rotateX(-20deg);top:2px;left:2px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:linear-gradient(to left,currentColor 10px,transparent 0) no-repeat center 2px/6px 2px}\n"], ["\n  &,&::before{display:block;box-sizing:border-box;height:20px}&{position:relative;transform:scale(var(--ggs,1));width:14px}&::before{content:\"\";position:absolute;width:10px;border:2px solid;border-bottom:3px solid;transform:perspective(20px)rotateX(-20deg);top:2px;left:2px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:linear-gradient(to left,currentColor 10px,transparent 0) no-repeat center 2px/6px 2px}\n"])));
exports.GlassAlt = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledGlassAlt, tslib_1.__assign({}, props, { ref: ref, "icon-role": "glass-alt" }))));
});
var templateObject_1;
//# sourceMappingURL=GlassAlt.js.map