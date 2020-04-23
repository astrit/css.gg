"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledStopwatch = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{background:linear-gradient(to left,currentColor 7px,transparent 0)no-repeat 6px 2px/2px 6px;box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border-radius:100%;border:2px solid transparent;box-shadow:0 0 0 2px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:4px;height:2px;background:currentColor;transform:rotate(45deg);right:-4px;top:-3px}\n"], ["\n  &{background:linear-gradient(to left,currentColor 7px,transparent 0)no-repeat 6px 2px/2px 6px;box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border-radius:100%;border:2px solid transparent;box-shadow:0 0 0 2px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:4px;height:2px;background:currentColor;transform:rotate(45deg);right:-4px;top:-3px}\n"])));
exports.Stopwatch = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledStopwatch, tslib_1.__assign({}, props, { ref: ref, "icon-role": "stopwatch" }))));
});
var templateObject_1;
//# sourceMappingURL=Stopwatch.js.map