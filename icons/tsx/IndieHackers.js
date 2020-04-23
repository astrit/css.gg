"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledIndieHackers = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:12px}&::after,&::before{content:\"\";position:absolute;box-sizing:border-box;display:block;height:12px}&::before{width:3px;background:currentColor}&::after{width:10px;right:0;border-left:3px solid;border-right:3px solid;background:linear-gradient(to left,currentColor 14px,transparent 0)no-repeat 0 center/14px 3px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:12px}&::after,&::before{content:\"\";position:absolute;box-sizing:border-box;display:block;height:12px}&::before{width:3px;background:currentColor}&::after{width:10px;right:0;border-left:3px solid;border-right:3px solid;background:linear-gradient(to left,currentColor 14px,transparent 0)no-repeat 0 center/14px 3px}\n"])));
exports.IndieHackers = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledIndieHackers, tslib_1.__assign({}, props, { ref: ref, "icon-role": "indie-hackers" }))));
});
var templateObject_1;
//# sourceMappingURL=IndieHackers.js.map