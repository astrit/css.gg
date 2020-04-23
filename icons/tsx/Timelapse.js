"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTimelapse = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;transform:scale(var(--ggs,1));position:relative;display:block;width:22px;height:22px;border:2px solid;border-radius:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:5px;height:4px;border:7px solid;border-left-color:transparent;border-bottom-color:transparent;border-radius:22px;top:2px;right:2px}&::before{transform:rotate(45deg)}&::after{border-top-color:transparent;transform:rotate(85deg)}\n"], ["\n  &{box-sizing:border-box;transform:scale(var(--ggs,1));position:relative;display:block;width:22px;height:22px;border:2px solid;border-radius:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:5px;height:4px;border:7px solid;border-left-color:transparent;border-bottom-color:transparent;border-radius:22px;top:2px;right:2px}&::before{transform:rotate(45deg)}&::after{border-top-color:transparent;transform:rotate(85deg)}\n"])));
exports.Timelapse = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTimelapse, tslib_1.__assign({}, props, { ref: ref, "icon-role": "timelapse" }))));
});
var templateObject_1;
//# sourceMappingURL=Timelapse.js.map