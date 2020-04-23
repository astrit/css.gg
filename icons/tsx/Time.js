"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTime = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border-radius:100%;border:2px solid transparent;box-shadow:0 0 0 2px currentColor}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:7px;height:7px;border-left:2px solid;border-bottom:2px solid;top:1px;left:5px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border-radius:100%;border:2px solid transparent;box-shadow:0 0 0 2px currentColor}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:7px;height:7px;border-left:2px solid;border-bottom:2px solid;top:1px;left:5px}\n"])));
exports.Time = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTime, tslib_1.__assign({}, props, { ref: ref, "icon-role": "time" }))));
});
var templateObject_1;
//# sourceMappingURL=Time.js.map