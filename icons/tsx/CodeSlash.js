"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCodeSlash = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;box-sizing:border-box;transform:rotate(15deg) scale(var(--ggs,1));width:2px;height:16px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;transform:rotate(-60deg)}&::before{border-left:2px solid;border-top:2px solid;left:-8px;top:5px}&::after{border-right:2px solid;border-bottom:2px solid;right:-8px;top:3px}\n"], ["\n  &{display:block;position:relative;box-sizing:border-box;transform:rotate(15deg) scale(var(--ggs,1));width:2px;height:16px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;transform:rotate(-60deg)}&::before{border-left:2px solid;border-top:2px solid;left:-8px;top:5px}&::after{border-right:2px solid;border-bottom:2px solid;right:-8px;top:3px}\n"])));
exports.CodeSlash = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCodeSlash, tslib_1.__assign({}, props, { ref: ref, "icon-role": "code-slash" }))));
});
var templateObject_1;
//# sourceMappingURL=CodeSlash.js.map