"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledAlarm = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{background:linear-gradient( to left,currentColor 5px,transparent 0)no-repeat 4.5px 6px/5px 2px,linear-gradient( to left,currentColor 7px,transparent 0)no-repeat 4.5px 2px/2px 6px;box-sizing:border-box;position:relative;display:block;width:16px;height:16px;border-radius:100%;border:2px solid transparent;transform:scale(var(--ggs,1));box-shadow:0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:2px;background:currentColor;top:-4px}&::before{left:-5px;transform:rotate(-42deg)}&::after{transform:rotate(42deg);right:-5px}\n"], ["\n  &{background:linear-gradient( to left,currentColor 5px,transparent 0)no-repeat 4.5px 6px/5px 2px,linear-gradient( to left,currentColor 7px,transparent 0)no-repeat 4.5px 2px/2px 6px;box-sizing:border-box;position:relative;display:block;width:16px;height:16px;border-radius:100%;border:2px solid transparent;transform:scale(var(--ggs,1));box-shadow:0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:2px;background:currentColor;top:-4px}&::before{left:-5px;transform:rotate(-42deg)}&::after{transform:rotate(42deg);right:-5px}\n"])));
exports.Alarm = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledAlarm, tslib_1.__assign({}, props, { ref: ref, "icon-role": "alarm" }))));
});
var templateObject_1;
//# sourceMappingURL=Alarm.js.map