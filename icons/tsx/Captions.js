"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCaptions = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{border-radius:1px;transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:20px;height:16px;border:2px solid}&::after,&::before{content:\"\";position:absolute;width:5px;height:8px;border-right:transparent;top:2px;left:2px}&::before{left:9px}\n"], ["\n  &{border-radius:1px;transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:20px;height:16px;border:2px solid}&::after,&::before{content:\"\";position:absolute;width:5px;height:8px;border-right:transparent;top:2px;left:2px}&::before{left:9px}\n"])));
exports.Captions = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCaptions, tslib_1.__assign({}, props, { ref: ref, "icon-role": "captions" }))));
});
var templateObject_1;
//# sourceMappingURL=Captions.js.map