"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMinimizeAlt = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:26px;height:2px;border-left:10px solid;border-right:10px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;top:-2px}&::before{border-right:2px solid;left:-5px;transform:rotate(45deg)}&::after{border-left:2px solid;right:-5px;transform:rotate(-45deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:26px;height:2px;border-left:10px solid;border-right:10px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;top:-2px}&::before{border-right:2px solid;left:-5px;transform:rotate(45deg)}&::after{border-left:2px solid;right:-5px;transform:rotate(-45deg)}\n"])));
exports.MinimizeAlt = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMinimizeAlt, tslib_1.__assign({}, props, { ref: ref, "icon-role": "minimize-alt" }))));
});
var templateObject_1;
//# sourceMappingURL=MinimizeAlt.js.map