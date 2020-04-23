"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledEventbrite = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;box-sizing:border-box;transform:rotate(-25deg) scale(var(--ggs,1));width:20px;height:20px;}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:18px;height:11px;border:4px solid;border-top-right-radius:20px;border-top-left-radius:20px;}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:18px;height:18px;border:4px solid;border-top-color:transparent;border-right-color:transparent;border-radius:20px;}\n"], ["\n  &{display:block;position:relative;box-sizing:border-box;transform:rotate(-25deg) scale(var(--ggs,1));width:20px;height:20px;}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:18px;height:11px;border:4px solid;border-top-right-radius:20px;border-top-left-radius:20px;}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:18px;height:18px;border:4px solid;border-top-color:transparent;border-right-color:transparent;border-radius:20px;}\n"])));
exports.Eventbrite = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledEventbrite, tslib_1.__assign({}, props, { ref: ref, "icon-role": "eventbrite" }))));
});
var templateObject_1;
//# sourceMappingURL=Eventbrite.js.map