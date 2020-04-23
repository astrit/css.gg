"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBot = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:21px;height:10px;border-right:8px solid transparent;border-left:8px solid transparent;border-bottom:1px solid transparent;border-radius:12px;box-shadow:0 0 0 2px,-4px 0 0 -1px,4px 0 0 -1px,inset 0 -4px 0 -2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:2px;box-shadow:0 0 0 2px;top:3px}&::before{left:-4px;border-radius:3px}&::after{border-radius:100px;right:-4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:21px;height:10px;border-right:8px solid transparent;border-left:8px solid transparent;border-bottom:1px solid transparent;border-radius:12px;box-shadow:0 0 0 2px,-4px 0 0 -1px,4px 0 0 -1px,inset 0 -4px 0 -2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:2px;box-shadow:0 0 0 2px;top:3px}&::before{left:-4px;border-radius:3px}&::after{border-radius:100px;right:-4px}\n"])));
exports.Bot = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBot, tslib_1.__assign({}, props, { ref: ref, "icon-role": "bot" }))));
});
var templateObject_1;
//# sourceMappingURL=Bot.js.map