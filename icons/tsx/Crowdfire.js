"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCrowdfire = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:20px;height:20px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box}&::before{width:20px;height:20px;border:4px solid;border-radius:100px;border-right-color:transparent;transform:rotate(-45deg)}&::after{width:8px;height:8px;border-top:4px solid;border-right:4px solid;right:2px;top:2px}\n"], ["\n  &{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:20px;height:20px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box}&::before{width:20px;height:20px;border:4px solid;border-radius:100px;border-right-color:transparent;transform:rotate(-45deg)}&::after{width:8px;height:8px;border-top:4px solid;border-right:4px solid;right:2px;top:2px}\n"])));
exports.Crowdfire = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCrowdfire, tslib_1.__assign({}, props, { ref: ref, "icon-role": "crowdfire" }))));
});
var templateObject_1;
//# sourceMappingURL=Crowdfire.js.map