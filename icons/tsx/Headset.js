"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledHeadset = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border-top-left-radius:120px;border-top-right-radius:120px;border:2px solid;border-bottom:0}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border:2px solid;width:6px;height:8px;top:8px}&::before{border-top-right-radius:2px;border-bottom-right-radius:2px;left:-2px}&::after{border-top-left-radius:2px;border-bottom-left-radius:2px;left:10px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border-top-left-radius:120px;border-top-right-radius:120px;border:2px solid;border-bottom:0}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border:2px solid;width:6px;height:8px;top:8px}&::before{border-top-right-radius:2px;border-bottom-right-radius:2px;left:-2px}&::after{border-top-left-radius:2px;border-bottom-left-radius:2px;left:10px}\n"])));
exports.Headset = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledHeadset, tslib_1.__assign({}, props, { ref: ref, "icon-role": "headset" }))));
});
var templateObject_1;
//# sourceMappingURL=Headset.js.map