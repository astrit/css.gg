"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBee = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;border:2px solid}&{position:relative;width:12px;height:20px;transform:scale(var(--ggs,1));border-radius:22px;background:linear-gradient(to left,currentColor 12px,transparent 0) no-repeat center 6px/12px 2px,linear-gradient(to left,currentColor 12px,transparent 0) no-repeat center 10px/12px 2px;box-shadow:0 4px 0 -2px,0 7px 0 -4px}&::after,&::before{content:\"\";position:absolute;width:6px;height:10px;border-top:0;border-bottom-left-radius:22px;border-bottom-right-radius:22px;top:4px}&::before{left:-6px;transform:rotate(40deg)}&::after{right:-6px;transform:rotate(-40deg)}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;border:2px solid}&{position:relative;width:12px;height:20px;transform:scale(var(--ggs,1));border-radius:22px;background:linear-gradient(to left,currentColor 12px,transparent 0) no-repeat center 6px/12px 2px,linear-gradient(to left,currentColor 12px,transparent 0) no-repeat center 10px/12px 2px;box-shadow:0 4px 0 -2px,0 7px 0 -4px}&::after,&::before{content:\"\";position:absolute;width:6px;height:10px;border-top:0;border-bottom-left-radius:22px;border-bottom-right-radius:22px;top:4px}&::before{left:-6px;transform:rotate(40deg)}&::after{right:-6px;transform:rotate(-40deg)}\n"])));
exports.Bee = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBee, tslib_1.__assign({}, props, { ref: ref, "icon-role": "bee" }))));
});
var templateObject_1;
//# sourceMappingURL=Bee.js.map