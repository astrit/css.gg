"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledRemote = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:8px;height:8px}&::after,&::before{content:\"\";position:absolute;border-left:2px solid;border-bottom:2px solid;transform:rotate(45deg) scaleY(1)}&::before{left:5px;top:-2px}&::after{transform:rotate(-45deg) scaleX(-1);left:-5px;top:2px}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:8px;height:8px}&::after,&::before{content:\"\";position:absolute;border-left:2px solid;border-bottom:2px solid;transform:rotate(45deg) scaleY(1)}&::before{left:5px;top:-2px}&::after{transform:rotate(-45deg) scaleX(-1);left:-5px;top:2px}\n"])));
exports.Remote = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledRemote, tslib_1.__assign({}, props, { ref: ref, "icon-role": "remote" }))));
});
var templateObject_1;
//# sourceMappingURL=Remote.js.map