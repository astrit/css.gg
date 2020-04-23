"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledGames = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:12px;border:3px solid transparent;border-left:6px solid transparent;box-shadow:0 0 0 2px,inset 2px 0 0;border-radius:40px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:2px;background:currentColor}&::before{left:-2px;width:6px;top:2px}&::after{border-radius:3px;width:2px;box-shadow:0 4px 0,-2px 2px 0,2px 2px 0;top:0;right:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:12px;border:3px solid transparent;border-left:6px solid transparent;box-shadow:0 0 0 2px,inset 2px 0 0;border-radius:40px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:2px;background:currentColor}&::before{left:-2px;width:6px;top:2px}&::after{border-radius:3px;width:2px;box-shadow:0 4px 0,-2px 2px 0,2px 2px 0;top:0;right:2px}\n"])));
exports.Games = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledGames, tslib_1.__assign({}, props, { ref: ref, "icon-role": "games" }))));
});
var templateObject_1;
//# sourceMappingURL=Games.js.map